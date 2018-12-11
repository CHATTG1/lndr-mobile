import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Došlo k potížím při komunikaci se serverem, zkuste to znovu později.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Ahoj světe`,
  noConnection: `Žádné připojení`,
  retry: `Opakujte`,
  submit: `PŘEDLOŽIT`,
  next: `Další`,
  cancel: `Zrušit`,
  back: `Zpět`,
  copy: `Zkopírovat do schránky`,
  confirmAccount: `Potvrdit`,
  createAccount: `Vytvořit účet`,
  recoverAccount: `Obnovit účet`,
  removeAccount: `Odstranit účet`,
  updateAccount: `Aktualizovat účet`,
  loginAction: `Odemknout`,
  enterPin: `Prosím, zadejte svůj PIN`,
  changePin: `Změnit PIN`,
  enterCurrentPin: `Zadejte aktuální PIN`,
  logoutAction: `ODHLÁSIT SE`,
  seeAllActivity: `Zobrazit veškerou aktivitu`,
  copiedClipboard: `Zkopírováno do schránky`,
  pleaseWait: `Čekejte, prosím`,
  addFriend: `Přidat přítele`,
  addFriendConfirmationQuestion: `Opravdu chcete přidat tohoto uživatele jako přítele?`,
  removeFriend: `Odebrat přítele`,
  currentFriends: `Současní přátelé`,
  removeFriendConfirmationQuestion: `Opravdu chcete odstranit tohoto uživatele jako přítele?`,
  inviteFriends: `Pozvat přátele na Lndr`,
  tryLndr: `Vyzkoušejte Lndr App zde:`,
  friendInfo: `Více informací o tomto přátelství:`,
  noFriends: `Začněte tím, že si přidáte nějaké přátele!`,
  noMatches: `Nebyly nalezeny žádní odpovídající uživatelé`,
  noBalances: `Nemáte žádné nahrané dluhy`,
  addFriendButton: `Přidat přítele`,
  alreadyFriendsButton: `Přátelé`,
  friendShell: `Přítel`,
  tip: `Tip:`,
  notice: `Oznámení:`,
  welcome: `Vítejte ve své LNDR`,
  noBalanceWarning: `Nebylo možné nahrát váš zůstatek, zkuste to prosím později.`,
  totalBalance: `Celkový zůstatek:`,
  totalBalances: `Celkem Protistrany:`,
  newTransaction: `Nová transakce`,
  needsReview: `Čeká na schválení`,
  owesMe: `Já dlužím`,
  iOwe: `Dlužím někomu`,
  newPassword: `Nové heslo (minimálně 8 znaků)`,
  confirmPassword: `Potvrďte heslo`,
  newPin: `Nový 4-místný PIN`,
  enterNewPin: `NASTAVTE SI NOVÝ 4-MÍSTNÝ PIN`,
  confirmPin: `POTVRĎTE SVŮJ PIN`,
  newAccount: `Vytvořit nový účet`,
  loginAccount: `Odemknout svůj účet`,
  recoverExistingAccount: `Obnovit existující účet`,
  recoverMnemonic: `Mnemotechnika (12 slov zobrazených \npři vytváření účtu)`,
  recoverMnemonicLengthError: `Mnemotechnika by měla mít přesně 12 slov`,
  successTitle: `Úspěch`,
  errorTitle: `Chyba`,
  showMnemonic: `Ukázat 12 slov mnemotechniky`,
  mnemonicExhortation: `Tato fráze o 12 slovech je vyžadována k obnovení účtu, bezpečně ji proto uschovejte.`,
  addressExhortation: `Můžete poslat ETH nebo libovolného podporovaného ERC-20 token vaší peněženky adresu.`,
  removeAccountTitle: `Opravdu chcete odstranit svůj účet z tohoto zařízení?`,
  removeAccountExhortation: `Ujistěte se, že máte přístup ke své mnemotechnické pomůcce pro obnovení účtu, protože odstranění vašeho účtu z tohoto zařízení je trvalé.`,
  myAccount: `Můj účet`,
  setNickname: `Nastavit přezdívku, aby vás přátelé mohli vyhledat`,
  setEmail: `Nastavit e-mail pro účely zasílání aktualit z Lndr`,
  nickname: `Přezdívka (malá písmena a čísla)`,
  email: `Emailová adresa`,
  inviteLink: `Invite Link`,
  splitExpense: `Split an expense with me on the LNDR app`,
  sendInvite: `Send via email or text`,
  unknownTransaction: `Unknown Transaction`,
  yourFriend: `your friend`,
  lndrVerified: {
    ok: `OK`,
    title: `Stanovit vyšší mezní osídlení a abstinenční krypto množství vyplněním Know Your požadavky zákazníků.`,
    statusTitle: `Současný stav vašeho ověření je:`,
    tryAgain: `Nebyli jsme schopni ověřit vaši totožnost. Odešlete své informace a zajistí, že vaše fotografie jsou čitelné.`,
    formMessage: `Vyplňte prosím všechny následující pole`,
    button: `Potvrďte vaši identitu`,
    prefix: `Přečtěte si naše `,
    linkTitle: `zásady ochrany osobních `,
    postfix: `údajů o tom, jak bude vaše osobní údaje spravovány.`,
    upload: `Nahrát `,
    governmentId: `ID úředně vydaným`,
    selfie: `Nahrát selfie se svým státem vydaného dokladu totožnosti`,
    proofOfAddress: `Důkaz adresy`,
    ifNotId: `(Ne-li ID)`,
    agree: `Přečetl jsem a souhlasím s `,
    agreeLink: `Ochrana osobních údajů`,
    success: `KYC byl odeslán.`,
    idInfoHeader: `Příklady ID zahrnují:`,
    passport: `Cestovní pas`,
    drivers: `Řidičský průkaz`,
    national: `Občanský průkaz`,
    addressInfoHeader: `Příklady doklad o bydlišti:`,
    bank: `Výpis z bankovního účtu`,
    utility: `účet za služby`,
    other: `Ostatní Document`,
    chooseGovernmentPhoto: `Vyberte si číslo občanského průkazu, fotografie`,
    chooseSelfiePhoto: `Zvolit selfie Photo`,
    chooseAddressPhoto: `Vyberte si doklad o bydlišti fotka`,
    emailRequired: `Potřebujete e-mail za účelem ověření vaší identity, klikněte na "Změnit email"`,
    approved: `SCHVÁLENÝ`,
    rejected: `REJECTED`,
    pending: `Čekající`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Jméno`,
      lastName: `Příjmení`,
      street: `Adresa ulice`,
      city: `Město`,
      state: `Stát / Provincie`,
      postalCode: `poštovní směrovací číslo`,
      country: `Vyberte zemi`,
      phone: `Telefonní číslo`,
      dob: `Datum narození (YYYY-MM-DD)`,
    },
    formErrors: {
      firstName: `je zapotřebí nejprve Name`,
      lastName: `Je zapotřebí Last Name`,
      street: `Ulice je vyžadováno`,
      city: `Je zapotřebí City`,
      state: `Stát / Provincie je vyžadováno`,
      postalCode: `je vyžadováno PSČ`,
      country: `Je zapotřebí země`,
      phone: `Telefonní číslo je povinné`,
      dob: `Je nutné zadat datum narození`,
      general: `Prosím, ujistěte se, že jste vyplnili všechna pole a připojené správné fotografie`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Přezdívka by měla být nejméně 3 znaky.`,
      compositionViolation: `Přezdívka může obsahovat pouze čísla a malá písmena.`,
      duplicationViolation: `Tuto přezdívku již někdo používá`,
    },
    email: {
      compositionViolation: `Nesprávný formát emailu`,
      duplicationViolation: `Na tento email již byl vytvořen účet`,
    },
    pin: {
      lengthViolation: `PIN by měl být alespoň 4 znaky.`,
      matchViolation: `PINy se musí shodovat.`,
      failedHashComparison: `PIN není platný, zkuste to znovu.`,
      updateSuccess: `Váš PIN byl aktualizován`,
      updateError: `Došlo k chybě při aktualizaci PINu`,
    },
    mnemonic: {
      lengthViolation: `Mnemotechnická pomůcka by měla mít alespoň 12 slov.`,
      unableToValidate: `Zadaná mnemotechnická pomůcka je neplatná, zkuste to znovu, prosím.`,
    },
    setNickname: {
      success: `Vaše přezdívka byla uložena.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Váš email byl uložen.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `Zadání PINu je vyžadováno po`,
      bottom: `minutách nečinnosti`,
      update: `Aktualizace`,
      error: `Nepodařilo se aktualizovat nastavení účtu`,
      success: `Timeout zámek aktualizován`,
    },
    addFriend: {
      success: X => `Zádost o přátelství odeslána @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Odebrán(a) z přátel: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `Nelze načíst Eth rovnováhu`,
      manage: `Správovat ETH`,
    },
    sendEth: {
      error: {
        insufficient: `Pro tuto transakci nemáte dostatek ETH`,
        generic: `Došlo k chybě při převodu, zkuste to prosím později`,
        address: `Zadejte prosím platnou adresu`,
        amount: `Zadejte částku větší než 0`,
        limitExceeded: (A, M) => `Můžete poslat pouze ${CUR(A)} ${TL(A, M)} týdně, zvolte menší částku`
      },
      amount: `Částka k odeslání`,
      address: `Cílová adresa`,
      transfer: `Převést ETH`,
      transferAll: `Převést vše`,
      balance: Y => `Aktuální zůstatek ETH je ${typeof Y === 'string' ? Y.slice(0,8) :''}`,
      ethAddress: `Ethereum adresa`,
      transferLowercase: `Převést Eth`,
      note: (A, M) => `Poznámka: můžete převést max. ${CUR(A)} ${TL(A, M)} týdně z Lndr`,
      warning: (Z, A, M) => `Zbývá vám ${CUR(A)}${Z} z vašeho limitu ${CUR(A)} ${TL(A, M)}`,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `Pro tuto transakci nemáte dostatek ${name}`,
        generic: `Došlo k chybě při převodu, zkuste to prosím později`,
      },
      transfer: (name) => `Převést ${name}`,
      address: `Cílová adresa`,
      balance: (name, balance) => `Aktuální ${name} zůstatek je ${typeof balance === 'string' ? balance.slice(0,8) :''}`,
      tokenAddress: (name) => `${name} adresa`,
      txCost: (ethCost, currencyCost) => `Transakční náklady: ${ethCost} ETH (${currencyCost})`,
    },
    panelHeaders: [
      `Peněženka Address`,
      `Crypto váhy`,
      `Odstranit účet`,
      `ETH Transakční historie`,
      `Umožnit PayPal`,
      `Změnit hlavní měně`,
      `Odemknout další funkce`,
      `Změnit email`,
      `Změna PIN`,
      `Změna zámku Timeout`,
      `Mnemo`,
      `Poznámka`,
    ],
    viewEtherscan: `Přehled Etherscanové historie`,
    profilePic: {
      change: `Změnit profilovou fotku`,
      setError: `Při nahrávání fotky došlo k chybě, zkuste to později znovu`,
      getError: `Při načítání fotky došlo k chybě, zkuste to později znovu`,
      setSuccess: `Profilová fotka změněna`,
    },
    logoutSuccess: `Došlo k úspěšnému odhlášení!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: name => `Aktuální ${name} zůstatek`,

  welcomeView: {
    by: `VYTVOŘENO`,
    makeItEasy: `Lndr usnadňuje sledování jednoduchých dluhů`,
    weHelpFriends: `Pomáháme přátelům společně žít, pracovat a hrát si.`,
    len: `Len`,
    dot: `,`,
    der: `der`,
    shareDinner: `Sdílejte večeři`,
    fillTank: `Natankujte nádrž`,
    travelTogether: `Cestujte společně`,
    runEthereum: `Používáme ETH!`,
    firstLendingApp: `První mobilní aplikace zaměřená na půjčování zabezpečená blockchainem.`,
    greatConcert: `Běžte na super koncert`,
    youPlayWithFriends: `Bavte se s přáteli, \n my se postaráme o kartu ...`,
    start: `Začínáme`,
  },

  walkthrough: {
    skip: `přeskočit`,
    continue: `pokračovat`,
    step1: {
      easyToUse: `Lndr je nejjednodušší způsob, jak rozdělit účty, sdílení nákladů a usadit jednoduché dluhy s přáteli a rodinou, to vše provedeno bezpečně na blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Chcete-li začít s Lndr, budete muset přidat přítele.`,
      friendsScreen: `Navštívit Friends obrazovky hledat, přidat nebo pozvat své přátele a rodinu se připojit k Lndr.`,
    },
    step3: {
      title: `Nahrávání transakce`,
      easy: `Rozdělením účet nebo přidání dluh s přítelem, je snadné v Lndr!`,
      selectFriend: `Zvolit svého přítele, měnu a částku.`,
      addMemo: `Přidat nějaké poznámky do poznámkového pole a klikněte na tlačítko Odeslat.`,
    },
    step4: {
      title: `Vyrovnat`,
      ready: `Připraven vyrovnat?`,
      payPal: `Když je čas se usadit s Lndr, \n- můžete zvolit PayPal:`,
      ether: `- cryptocurrencies jako Ether:`,
      cash: `- nebo jednoduše nahrát výplatu v hotovosti:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `Více měn`,
      multiCurrency: `Lndr mohou sledovat své transakce, i když se stalo v různých měnách.`,
      exchangeRate: `Když jste se rozhodli vyřídit se svým přítelem, budou všechny transakce bude převedena na primární měnu za použití nejvíce směnné kurzy up-to-date k dispozici.`,
      start: `Začněte používat Lndr!`,
    }
  },

  debtManagement: {
    shell: `Nová transakce`,
    add: `Přidat dluh`,
    selectFriend: `Vybrat`,
    lend: `Nová půjčka`,
    borrow: `Nový dluh`,
    owesMe: `Mi dluží`,
    iOwe: `Dlužím`,
    iLent: `Přítel mi dluží`,
    iBorrowed: `Dlužím příteli`,
    settleUpLower: `Vyrovnat`,
    amountToSettle: `Částka k vyrovnání`,
    total: `Celkem`,
    record: `záznam`,
    records: `záznamy`,
    chooseCurrency: `Vyberte měnu`,

    createError: {
      amountTooLow: `Částka musí být větší než 0 $`,
      amountTooHigh: `Částka musí být menší než 1.000.000.000 $`,
      selfAsFriend: `Není možné vytvořit dluh se sebou, vyberte přítele`,
      pending: `Vyřešte prosím čekající transakci s tímto uživatelem, než založíte transakci novou`,
      insufficientEth: E => `K vypořádání je třeba alespoň ${E} ETH, info o vašem zůstatku naleznete v Nastavení`,
    },
    fields: {
      currency: `Měna`,
      amount: `Částka`,
      settlementAmount: `Částka k vypořádání`,
      selectFriend: `Přítel`,
      memo: `Poznámka`,
      direction: `Zvolte odpovídající zprávu`,
    },
    memo: {
      example: `Druh poznámky zde`,
    },
    direction: {
      lend: X => `${X} dluží mi`,
      borrow: X => `Dlužím ${X}`,
      initiatedLend: X => `${X} říká, že dluží`,
      initiatedBorrow: X => `${X} říká, že dlužíš`,
      pendingLend: X => ` '${X} ti dluží`,
      pendingBorrow: X => `Dlužíte @${X}`,
      pendingLendSettlement: S => `@${S.debtorNickname} žádá vypořádání v ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} se chce s vámi vypořádat v ${S.settlementCurrency}`,
      pendingLendSettlementMe: S => `Zažádal(a) jste o vyrovnání s @${S.debtorNickname} v ${S.settlementCurrency}`,
      pendingBorrowSettlementMe: S => `Požádal(a) jste @${S.creditorNickname} o vyrovnání v ${S.settlementCurrency}`,
    },
    pending: {
      success: F => `Nesplacený dluh předložen @${F.nickname}`,
      error: generalCommunicationError
    },
    pendingParens: `(čekající)`,
    confirmation: {
      transaction: CP => `Transakce s ${CP} byla úspěšně potvrzena`,
      settlement: CP => `Vypořádání s ${CP} bylo úspěšně potvrzeno`,
      error: `V tuto chvíli nelze transakce potvrdit, zkuste to později prosím`,
    },
    rejection: {
      success: `Transakce byla zamítnuta`,
      error: `V tuto chvíli nelze transakci odmítnout, zkuste to později prosím`,
    },
    balances: {
      error: `V tuto chvíli nelze načíst zůstatky, zkuste to později prosím`,
    },
    for: M => `za ${M}`,
    settleUp: `Vyrovnat`,
    settleTotal: `Celkem k vyrovnání`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Vypořádání na' : 'Žádost o vypořádání na'} ${A}`,
    recordSettleUpMemo: `probíhá vypořádání`,
    balanceByCurrency: `Podrobnosti`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `Vaše vypořádání s ${X} selhalo z důvodu nedostatečných fin. prostředků`,
        generic: X => `Došlo k chybě při zpracování vašeho vyrovnání s ${X}`,
      }
    },
    eth: `Vyrovnat prostřednictvím ETH`,
    erc20: name => `Settle with ${name}`,
    paypal: `Vyrovnat prostřednictvím PayPal`,
    nonPayment: `Nahrát vyrovnání`,
    select: `Vyberte typ vypořádání`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Domů`,
    friends: `Přátelé`,
    activity: `Aktivita`,
  },

  notifications: {
    toggleNotifications: `Přepnout oznámení`,
    enable: `Zapnout`,
    disable: `Vypnout`,
  },

  pendingTransactionsLanguage: {
    shell: `Čekající transakce`,
    title: `Čekající`,
    memo: `Poznámka:`,
    for: `Pro`,
    none: `Nemáte žádné nevyřízené transakce`,
    confirmationQuestion: `Opravdu chcete potvrdit tuto transakci?`,
    pendingAnnouncement: `Tato transakce čeká na potvrzení druhou stranou.`,
    bilateral: `Čekání na dokončení převodu`,
    confirm: `Potvrdit`,
    reject: `Odmítnout transakci`,
    rejectRequest: `Odmítnout`,
    cancel: `Zrušit transakci`,
    direction: {
      lend: (X, Z) => ` '${X} vám dluží ${Z}`,
      borrow: (X, Z) => `Dlužíte @${X}${Z}`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Čekající na vyrovnání`,
    title: `Čekající`,
    none: `Nemáte žádná nevyřízená vyrovnání`,
    confirm: `Potvrdit`,
    reject: `Odmítnout vyrovnání`,
    cancel: `Zrušit vyrovnání`,
  },

  recentTransactionsLanguage: {
    title: `Dokončeno`,
    none: `Nemáte žádné dokončené transakce`,
    direction: {
      lend: (X, Z) => ` '${X} dluží vám ${Z}`,
      borrow: (X, Z) => `Dlužíte @${X}${Z}`
    },
    balance: `Zůstatek`,
    consolidatedBalance: `Zůstatek`,
    friends: FS => `(od ${FS} ${FS === 1 ? 'přítele' :'přátel'})`,
  },

  tabs: {
    home: `Domů `,
    friends: `Přátelé`,
    activity: `Aktivita`,
  },

  confirmation: {
    shell: `Potvrzení`,
    done: `Hotovo`,
    create: {
      start: `Transakce byla poslána `,
      end: `ovi k potvrzení.`,
    },
    confirm: {
      start: `Tento záznam od `,
      end: `a jste potvrdil(a).`,
    },
    reject: {
      start: ``,
      end: ` byl informová, že jste tento záznam zamítl(a).`,
    },
    confirmFriend: {
      start: `S `,
      end: `em jste nyní přáteli!`,
    },
    rejectFriend: {
      start: `Odmítli jste žádost o přátelství od `,
      end: `a.`,
    },
    rejectOutboundFriendRequest: {
      start: `Zrušili jste žádost o přátelství na `,
      end: `.`,
    },
    ethSent: {
      start: `Úspěšně jste odeslal(a) `,
      end: ` ETH a hash vaší transakce je `,
    },
    erc20Sent: {
      start: `Úspěšně jste odeslali `,
      end: ` a hash vaší transakce je `,
    },
    requestPayPalPayee: {
      start: `Máme nechat `,
      end: ` vědět, že byste chtěli usadit přes PayPal.`,
    },
    requestPayPalPayment: {
      start: `Máme nechat `,
      end: ` vědět, že byste chtěli být zaplacena přes PayPal.`,
    },
    settledWithPayPal: {
      start: `Máme nechat `,
      end: ` vědět, že jste se vyrovnal s PayPal.`,
    },
    kycSuccess: {
      start: `Děkuji! Váš účet je ověřen.

      `,
      end: `Budete upozorněni, když vaše další funkce jsou odemčené.`
    },
    status: `Stav této transakce můžete sledovat v `,
    activity: `záložce Aktivita.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Žádost o přátelství`,
    message: `Žádosti o přátelství`,
    request: F => `@${F} si vás chce přidat mezi přátele!`,
    outbound: F => `jste poslal žádost o přátelství na @${F}`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `Kliknutím na tlačítko níže potvrzujete, že jste si přečetli a souhlasíte se zásadami ochrany osobních údajů Blockmason je. Blockmason může používat e-mailovou adresu pro zaslání aktualizací o Blockmason a LNDR. Zde je odkaz na zásady ochrany osobních údajů:`,
  },

  payPalLanguage: {
    connectPayPal: `Připojit PayPal`,
    connectSuccess: `PayPal úspěšně povoleno.`,
    disconnectPayPal: `Odpojení PayPal`,
    disconnected: `PayPal odpojen.`,
    requestPayPalPayment: `Požadavek PayPal Payment`,
    sendWithPayPal: `Poslat PayPal`,
    enablePayPal: `Umožnit PayPal`,
    requestPayPalPayee: `Vyžádat PayPal`,
    enablePayPalForFriend: F => `Povolení PayPal umožňuje @${F} zaplatit you.`,
    friendNotEnabled: F => `${F} není povoleno PayPal platby.`,
    friendRequestedConnect: F => `${F} chce zaplatit přes PayPal`,
    requestFriendConnect: F => `Ptal ses @${F} umožnit PayPal`,
    feesNotification: `Nezahrnuje PayPal poplatky`,
    feesInformationHeader: `PayPal Poplatky Informace`,
    feesInformation: `1. Váš účet PayPal musí být vázána na bankovní účet.
    
2. Platba v měně odlišné od měny vaší banky bude vynakládat $ 0.35 poplatek.

3. Mezinárodní poplatky za převod:
    USA do Kanady / Evropa: $ 2,99
    USA se nikde jinde: $ 4,99

4. Tyto poplatky nejsou vyčerpávající. Pro většinu aktualizované informace naleznete na adrese:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afghánistán`, code: 'AFG' },
    { name: `Albánie`, code: 'ALB' },
    { name: `Alžírsko`, code: 'DZA' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angola`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Antarctica`, code: 'ATA' },
    { name: `Antigua a Barbuda`, code: 'ATG' },
    { name: `Argentina`, code: 'ARG' },
    { name: `Arménie`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Austrálie`, code: 'AUS' },
    { name: `Rakousko`, code: 'AUT' },
    { name: `Ázerbajdžán`, code: 'AZE' },
    { name: `Bahamské ostrovy`, code: 'BHS' },
    { name: `Bahrain`, code: 'BHR' },
    { name: `Bangladéš`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Bělorusko`, code: 'BLR' },
    { name: `Belgie`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `Bermudy`, code: 'BMU' },
    { name: `Bhútán`, code: 'BTN' },
    { name: `Bolívie`, code: 'BOL' },
    { name: `Bosna a Hercegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brazílie`, code: 'BRA' },
    { name: `Brunej`, code: 'BRN' },
    { name: `Bulharsko`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Kambodža`, code: 'KHM' },
    { name: `Kamerun`, code: 'CMR' },
    { name: `Kanada`, code: 'CAN' },
    { name: `Kajmanské ostrovy`, code: 'CYM' },
    { name: `Středoafrická republika`, code: 'CAF' },
    { name: `Chad`, code: 'TCD' },
    { name: `Chile`, code: 'CHL' },
    { name: `Čína`, code: 'CHN' },
    { name: `Kolumbie`, code: 'COL' },
    { name: `Komory`, code: 'COM' },
    { name: `Congo`, code: 'COG' },
    { name: `Congo`, code: 'COD' },
    { name: `Cookovy ostrovy`, code: 'COK' },
    { name: `Kostarika`, code: 'CRI' },
    { name: `Pobřeží slonoviny`, code: 'CIV' },
    { name: `Chorvatsko`, code: 'HRV' },
    { name: `Kuba`, code: 'CUB' },
    { name: `Curaçao`, code: 'CUW' },
    { name: `Kypr`, code: 'CYP' },
    { name: `Česko`, code: 'CZE' },
    { name: `Dánsko`, code: 'DNK' },
    { name: `Džibutsko`, code: 'DJI' },
    { name: `Dominica`, code: 'DMA' },
    { name: `Dominikánská republika`, code: 'DOM' },
    { name: `Ekvádor`, code: 'ECU' },
    { name: `Egypt`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Rovníková Guinea`, code: 'GNQ' },
    { name: `Eritrea`, code: 'ERI' },
    { name: `Estonsko`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Etiopie`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Finsko`, code: 'FIN' },
    { name: `Francie`, code: 'FRA' },
    { name: `francouzské Guyany`, code: 'GUF' },
    { name: `Francouzská Polynésie`, code: 'PYF' },
    { name: `Gabon`, code: 'GAB' },
    { name: `Gambie`, code: 'GMB' },
    { name: `Georgia`, code: 'GEO' },
    { name: `Německo`, code: 'DEU' },
    { name: `Ghana`, code: 'GHA' },
    { name: `Gibraltar`, code: 'GIB' },
    { name: `Řecko`, code: 'GRC' },
    { name: `Grónsko`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadeloupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guinea`, code: 'GIN' },
    { name: `Guinea-Bissau`, code: 'GNB' },
    { name: `Guyana`, code: 'GUY' },
    { name: `Haiti`, code: 'HTI' },
    { name: `Vatikán`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hongkong`, code: 'HKG' },
    { name: `Maďarsko`, code: 'HUN' },
    { name: `Island`, code: 'ISL' },
    { name: `Indie`, code: 'IND' },
    { name: `Indonésie`, code: 'IDN' },
    { name: `Írán`, code: 'IRN' },
    { name: `Irák`, code: 'IRQ' },
    { name: `Irsko`, code: 'IRL' },
    { name: `Isle of Man`, code: 'IMN' },
    { name: `Izrael`, code: 'ISR' },
    { name: `Itálie`, code: 'ITA' },
    { name: `Jamaica`, code: 'JAM' },
    { name: `Japonsko`, code: 'JPN' },
    { name: `Jordán`, code: 'JOR' },
    { name: `Kazachstán`, code: 'KAZ' },
    { name: `Keňa`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Korea (KLDR)`, code: 'PRK' },
    { name: `Korea (ROK)`, code: 'KOR' },
    { name: `Kuvajt`, code: 'KWT' },
    { name: `Kyrgyzstán`, code: 'KGZ' },
    { name: `Laos`, code: 'LAO' },
    { name: `Lotyšsko`, code: 'LVA' },
    { name: `Libanon`, code: 'LBN' },
    { name: `Lesotho`, code: 'LSO' },
    { name: `Libérie`, code: 'LBR' },
    { name: `Libye`, code: 'LBY' },
    { name: `Lichtenštejnsko`, code: 'LIE' },
    { name: `Litva`, code: 'LTU' },
    { name: `Lucembursko`, code: 'LUX' },
    { name: `Macao`, code: 'MAC' },
    { name: `Makedonie`, code: 'MKD' },
    { name: `Madagaskar`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Malajsie`, code: 'MYS' },
    { name: `Maledivy`, code: 'MDV' },
    { name: `Mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `Marshallovy ostrovy`, code: 'MHL' },
    { name: `Martinique`, code: 'MTQ' },
    { name: `Mauritánie`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `Mexiko`, code: 'MEX' },
    { name: `Mikronésie`, code: 'FSM' },
    { name: `Moldavsko`, code: 'MDA' },
    { name: `Monaco`, code: 'MCO' },
    { name: `Mongolsko`, code: 'MNG' },
    { name: `Černá Hora`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Maroko`, code: 'MAR' },
    { name: `Mosambik`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namibie`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepál`, code: 'NPL' },
    { name: `Nizozemí`, code: 'NLD' },
    { name: `Nová Kaledonie`, code: 'NCL' },
    { name: `Nový Zéland`, code: 'NZL' },
    { name: `Nikaragua`, code: 'NIC' },
    { name: `Niger`, code: 'NER' },
    { name: `Nigérie`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Severní Mariany`, code: 'MNP' },
    { name: `Norsko`, code: 'NOR' },
    { name: `Omán`, code: 'OMN' },
    { name: `Pákistán`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palestina`, code: 'PSE' },
    { name: `Panama`, code: 'PAN' },
    { name: `Papua-Nová Guinea`, code: 'PNG' },
    { name: `Paraguay`, code: 'PRY' },
    { name: `Peru`, code: 'PER' },
    { name: `Filipíny`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Polsko`, code: 'POL' },
    { name: `Portugalsko`, code: 'PRT' },
    { name: `Portoriko`, code: 'PRI' },
    { name: `Katar`, code: 'QAT' },
    { name: `Shledání`, code: 'REU' },
    { name: `Rumunsko`, code: 'ROU' },
    { name: `Ruská Federace`, code: 'RUS' },
    { name: `Rwanda`, code: 'RWA' },
    { name: `Saint Barthélemy`, code: 'BLM' },
    { name: `Svatá Helena, Ascension a Tristan da Cunha`, code: 'SHN' },
    { name: `Svatý Kryštof a Nevis`, code: 'KNA' },
    { name: `Saint Lucia`, code: 'LCA' },
    { name: `Saint Martin`, code: 'MAF' },
    { name: `Saint Pierre a Miquelon`, code: 'SPM' },
    { name: `Svatý Vincenc a Grenadiny`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `Svatý Tomáš a Princův`, code: 'STP' },
    { name: `Saudská arábie`, code: 'SAU' },
    { name: `Senegal`, code: 'SEN' },
    { name: `Srbsko`, code: 'SRB' },
    { name: `Seychely`, code: 'SYC' },
    { name: `Sierra Leone`, code: 'SLE' },
    { name: `Singapore`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Slovensko`, code: 'SVK' },
    { name: `Slovinsko`, code: 'SVN' },
    { name: `Solomonovy ostrovy`, code: 'SLB' },
    { name: `Somálsko`, code: 'SOM' },
    { name: `Jižní Afrika`, code: 'ZAF' },
    { name: `jižní Súdán`, code: 'SSD' },
    { name: `Španělsko`, code: 'ESP' },
    { name: `Srí Lanka`, code: 'LKA' },
    { name: `Sudan`, code: 'SDN' },
    { name: `Surinam`, code: 'SUR' },
    { name: `Švédsko`, code: 'SWE' },
    { name: `Švýcarsko`, code: 'CHE' },
    { name: `Syrská Arabská republika`, code: 'SYR' },
    { name: `Taiwan`, code: 'TWN' },
    { name: `Tádžikistán`, code: 'TJK' },
    { name: `Tanzanie`, code: 'TZA' },
    { name: `Thajsko`, code: 'THA' },
    { name: `Timor-Leste`, code: 'TLS' },
    { name: `Jít`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `Tonga`, code: 'TON' },
    { name: `Trinidad a Tobago`, code: 'TTO' },
    { name: `Tunisko`, code: 'TUN' },
    { name: `krocan`, code: 'TUR' },
    { name: `Turkmenistán`, code: 'TKM' },
    { name: `ostrovy Turks a Cacois`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `Ukrajina`, code: 'UKR' },
    { name: `Spojené arabské emiráty`, code: 'ARE' },
    { name: `Spojené království`, code: 'GBR' },
    { name: `Spojené státy americké`, code: 'USA' },
    { name: `Menší odlehlé ostrovy Spojených států amerických`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Uzbekistán`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Viet Nam`, code: 'VNM' },
    { name: `Britské Panenské ostrovy`, code: 'VGB' },
    { name: `Americké Panenské ostrovy`, code: 'VIR' },
    { name: `západní Sahara`, code: 'ESH' },
    { name: `Jemen`, code: 'YEM' },
    { name: `Zambie`, code: 'ZMB' },
    { name: `Zimbabwe`, code: 'ZWE' },
  ]
}
