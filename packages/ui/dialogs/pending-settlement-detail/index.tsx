import React, { Component } from 'react'

import { Text, View, Image, ScrollView } from 'react-native'

import { getStore } from 'reducers/app'
import { getResetAction } from 'reducers/nav'

import { defaultTransactionCosts, TransactionCosts } from 'credit-protocol'
import { UserData } from 'lndr/user'
import { currencyFormats, formatCommaDecimal, formatEthRemaining, isERC20Settlement, formatSettlementCurrencyAmount, isEthSettlement } from 'lndr/format'
import PendingUnilateral from 'lndr/pending-unilateral'
import profilePic from 'lndr/profile-pic'
import Friend from 'lndr/friend'
import { currencySymbols, transferLimits, hasNoDecimals, TRANSFER_LIMIT_STANDARD } from 'lndr/currencies'
import { WEI_PER_ETH, ERC20_Token, getERC20_token } from 'lndr/erc-20'

import BackButton from 'ui/components/back-button'
import Button from 'ui/components/button'
import Loading, { LoadingContext } from 'ui/components/loading'
import DashboardShell from 'ui/components/dashboard-shell'
import BalanceSection from 'ui/components/balance-section'

import style from 'theme/pending'
import formStyle from 'theme/form'
import accountStyle from 'theme/account'
import general from 'theme/general'

import language from 'language'
const {
  cancel,
  pendingSettlementsLanguage,
  debtManagement,
  accountManagement
} = language

import { getUser, settlerIsMe, getEthExchange, getWeeklyEthTotal, calculateBalance, getUcacCurrency, getPrimaryCurrency,
  getFriendFromAddress } from 'reducers/app'
import { addDebt, rejectPendingSettlement, getTransactionCosts, getTransferLimitLevel, exceedsTransferLimit } from 'actions'
import { connect } from 'react-redux'

const loadingContext = new LoadingContext()

interface Props {
  user: UserData
  ethSentPastWeek: number
  navigation: any
  primaryCurrency: string
  addDebt: (
    friend: Friend,
    amount: string,
    memo: string,
    direction: string,
    currency: string,
    settleTotal?: boolean,
    denomination?: string
  ) => any
  getFriendFromAddress: (address: string) => Friend | undefined
  rejectPendingSettlement: (pendingSettlement: PendingUnilateral, settlementCurrency: string) => any
  ethExchange: (currency: string) => string
  settlerIsMe: (pendingSettlement: PendingUnilateral) => boolean
  calculateBalance: (friend: Friend) => number
  getUcacCurrency: (ucac: string) => string
  getStore: () => any
}

interface State {
  transactionCosts: TransactionCosts
  pic?: string
  confirmationError?: string
  transferLimitLevel: string
  token?: ERC20_Token
}

class PendingSettlementDetail extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      token: undefined,
      transactionCosts: defaultTransactionCosts(),
      transferLimitLevel: TRANSFER_LIMIT_STANDARD
    }
  }

  async componentWillMount() {
    const { user, primaryCurrency } = this.props

    const transferLimitLevel = await getTransferLimitLevel(this.props.user.address, this.props.getStore())
    const pendingSettlement = this.getPendingSettlement()
    const settlementType = pendingSettlement.settlementCurrency

    const transactionCosts = await getTransactionCosts(settlementType, primaryCurrency)
    this.setState({ transferLimitLevel, transactionCosts })

    if (isERC20Settlement(settlementType)) {
      this.setState({ token: getERC20_token(settlementType) })
    }

    const friendAddress = (user.address === pendingSettlement.creditorAddress) ? pendingSettlement.debtorAddress : pendingSettlement.creditorAddress
    try {
      const pic = await profilePic.get(friendAddress)
      if (pic) {
        this.setState({ pic })
      }
    } catch (e) {
    }
  }

  async addDebt(pendingSettlement: PendingUnilateral) {
    const { ethExchange, ethSentPastWeek, user, calculateBalance, primaryCurrency } = this.props
    const { transferLimitLevel } = this.state
    const { memo, amount, ucac, settlementCurrency, debtorAddress, debtorNickname, creditorAddress, creditorNickname, multiSettlements } = pendingSettlement
    const friend = user.address === debtorAddress ? new Friend(creditorAddress, creditorNickname) : new Friend(debtorAddress, debtorNickname)
    const direction = user.address === debtorAddress ? 'borrow' : 'lend'
    const settleTotal = multiSettlements !== undefined
    const formattedAmount = hasNoDecimals(this.props.getUcacCurrency(ucac)) ? amount : amount / 100

    if ( (creditorAddress === user.address) && exceedsTransferLimit(formattedAmount, transferLimitLevel, ethExchange(primaryCurrency), ethSentPastWeek) ) {
      this.setState({ confirmationError: accountManagement.sendEth.error.limitExceeded(primaryCurrency, transferLimitLevel) })
      return
    }

    const success = await loadingContext.wrap(
      this.props.addDebt(
        friend as Friend,
        String(formattedAmount) as string,
        memo as string,
        direction as string,
        primaryCurrency as string,
        settleTotal as boolean,
        settlementCurrency as string
      )
    )

    if (success) {
      this.closePopup('confirm')
    } else {
      this.props.navigation.goBack()
    }
  }

  async rejectPendingSettlement(pendingSettlement: PendingUnilateral) {
    const pending = this.getPendingSettlement()

    const success = await loadingContext.wrap(
      this.props.rejectPendingSettlement(pendingSettlement, pending.settlementCurrency)
    )

    if (success) {
      this.closePopup('reject')
    }
  }

  closePopup(type) {
    let resetAction
    if (type) {
      resetAction = getResetAction({ routeName:'Confirmation', params: { type: type, friend: { nickname: this.getFriendNickname() } } })

      this.props.navigation.dispatch(resetAction)
    } else {
      this.props.navigation.navigate('Home')
    }
  }

  getFriendNickname() {
    const { user } = this.props
    const pendingSettlement = this.getPendingSettlement()

    if (user.address === pendingSettlement.creditorAddress) {
      return pendingSettlement.debtorNickname
    } else {
      return pendingSettlement.creditorNickname
    }
  }

  getTitle() {
    const { user, settlerIsMe } = this.props
    const pendingSettlement = this.getPendingSettlement()

    if(settlerIsMe(pendingSettlement)) {
      if (user.address === pendingSettlement.creditorAddress) {
        return debtManagement.direction.pendingLendSettlementMe(pendingSettlement)
      } else if (user.address === pendingSettlement.debtorAddress) {
        return debtManagement.direction.pendingBorrowSettlementMe(pendingSettlement)
      } else {
        return 'Unknown Settlement'
      }
    } else {
      if (user.address === pendingSettlement.creditorAddress) {
        return debtManagement.direction.pendingLendSettlement(pendingSettlement)
      } else if (user.address === pendingSettlement.debtorAddress) {
        return debtManagement.direction.pendingBorrowSettlement(pendingSettlement)
      } else {
        return 'Unknown Settlement'
      }
    }
  }

  getPendingSettlement() {
    return this.props.navigation.state ? this.props.navigation.state.params.pendingSettlement : {}
  }

  getSettlementAmount() {
    const pendingSettlement = this.getPendingSettlement()

    const divisor = !!this.state.token ? Math.pow(10, this.state.token.decimals) : WEI_PER_ETH
    return formatSettlementCurrencyAmount(`${pendingSettlement.settlementAmount / divisor}`, isEthSettlement(pendingSettlement.settlementCurrency))
  }

  showButtons() {
    const { settlerIsMe } = this.props
    const pendingSettlement = this.getPendingSettlement()
    if (settlerIsMe(pendingSettlement)) {
      return <Button danger round onPress={() => this.rejectPendingSettlement(pendingSettlement)} text={pendingSettlementsLanguage.cancel} />
    }

    return <View style={{marginBottom: 50}}>
      <Button round large onPress={() => this.addDebt(pendingSettlement)} text={pendingSettlementsLanguage.confirm} />
      <Button danger round onPress={() => this.rejectPendingSettlement(pendingSettlement)} text={pendingSettlementsLanguage.reject} />
    </View>
  }

  getLimit() {
    const { ethExchange, ethSentPastWeek, primaryCurrency } = this.props
    return formatEthRemaining(ethExchange, ethSentPastWeek, primaryCurrency, this.state.transferLimitLevel)
  }

  render() {
    const { confirmationError, transferLimitLevel } = this.state
    const { currencyCostFormatted, ethCostFormatted } = this.state.transactionCosts
    const { user, primaryCurrency } = this.props
    const pendingSettlement = this.getPendingSettlement()
    const isPayee = (user.address === pendingSettlement.debtorAddress)
    const friendAddress = isPayee ? pendingSettlement.creditorAddress : pendingSettlement.debtorAddress
    const friend = this.props.getFriendFromAddress(friendAddress) || new Friend('', '')

    return <View style={general.whiteFlex}>
      <View style={general.view}>
        <Loading context={loadingContext} />
        <DashboardShell text={pendingSettlementsLanguage.shell} navigation={this.props.navigation} />
        <BackButton onPress={() => this.props.navigation.goBack()} />
      </View>
      <ScrollView style={general.whiteFlex} keyboardShouldPersistTaps="always">
        <View style={[general.centeredColumn, general.standardHMargin]}>
          <Image source={require('images/person-outline-dark.png')} style={style.image}/>
          <Text style={[style.title, {alignSelf: 'center', textAlign: 'center'}]}>{this.getTitle()}</Text>
          <View style={style.balanceRow}>
            <Text style={style.balanceInfo}>{currencySymbols(primaryCurrency)}</Text>
            <Text style={style.amount}>{currencyFormats(primaryCurrency)(pendingSettlement.amount)}</Text>
          </View>
          <View style={style.balanceRow}>
            <Text style={style.amount}>{this.getSettlementAmount()}</Text>
            <Text style={style.balanceInfo}>{pendingSettlement.settlementCurrency}</Text>
          </View>
          {pendingSettlement.multiSettlements === undefined ? null :
          <BalanceSection friend={friend} />
          }
          <View style={{marginBottom: 20}}/>
          {!isPayee && <Text style={[formStyle.smallText, formStyle.spaceTop, formStyle.center]}>{accountManagement.sendEth.warning(this.getLimit(), primaryCurrency, transferLimitLevel)}</Text>}
          {!isPayee && <Text style={[accountStyle.txCost, formStyle.spaceBottom, {marginLeft: '2%'}]}>{accountManagement.sendERC20.txCost(ethCostFormatted, currencyCostFormatted)}</Text>}
          {confirmationError && <Text style={[formStyle.warningText, {alignSelf: 'center'}]}>{confirmationError}</Text>}
          {this.showButtons()}
          <View style={general.spaceBelow}/>
        </View>
      </ScrollView>
    </View>
  }
}

export default connect((state) => ({ user: getUser(state)(), settlerIsMe: settlerIsMe(state), ethExchange: getEthExchange(state),
  ethSentPastWeek: getWeeklyEthTotal(state), calculateBalance: calculateBalance(state), getUcacCurrency: getUcacCurrency(state),
  primaryCurrency: getPrimaryCurrency(state), getFriendFromAddress: getFriendFromAddress(state), getStore: getStore(state) }),
  { addDebt, rejectPendingSettlement })(PendingSettlementDetail)
