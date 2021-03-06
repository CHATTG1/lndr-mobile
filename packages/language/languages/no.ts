import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Det oppstod et problem i kommunikasjonen med serveren, venligst prøv igjen senere.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Hei verden`,
  noConnection: `Ingen forbindelse`,
  retry: `Prøv på nytt`,
  submit: `SEND INN`,
  next: `Neste`,
  cancel: `Avbryt`,
  back: `Gå tilbake`,
  copy: `Kopier til utklippstavle`,
  confirmAccount: `Bekreft`,
  createAccount: `Opprett konto`,
  recoverAccount: `Gjenopprett konto`,
  removeAccount: `Fjern konto`,
  updateAccount: `Oppdater konto`,
  loginAction: `Lås opp`,
  enterPin: `TAST INN DIN PIN-KODE`,
  changePin: `Endre PIN-kode`,
  enterCurrentPin: `Tast inn nåværende PIN-kode`,
  logoutAction: `LOGG UT`,
  seeAllActivity: `Se alle aktiviteter`,
  copiedClipboard: `Kopiert til utklippstavlen`,
  pleaseWait: `Vennligst vent`,
  addFriend: `Legg til venn`,
  addFriendConfirmationQuestion: `Er du sikker på at du vil legge til denne brukeren som en venn?`,
  removeFriend: `Fjern venn`,
  currentFriends: `Nåværende venner`,
  removeFriendConfirmationQuestion: `Er du sikker på at du vil fjerne denne brukeren som en venn?`,
  inviteFriends: `Inviter venner til Lndr`,
  tryLndr: `Prøv ut Lndr Appen her:`,
  friendInfo: `Mer informasjon om dette vennskapet:`,
  noFriends: `Legg til venner for å komme i gang!`,
  noMatches: `Ingen matchende brukere funnet`,
  noBalances: `Du har ikke registrert gjeld`,
  addFriendButton: `Legg til venn`,
  alreadyFriendsButton: `Venner`,
  friendShell: `Venn`,
  tip: `Tips:`,
  notice: `Merk:`,
  welcome: `Velkommen til ditt LNDR`,
  noBalanceWarning: `Vi var ikke i stand til å laste saldoen din på dette tidspunktet, vennligst prøv igjen senere.`,
  totalBalance: `Total saldo:`,
  totalBalances: `Total motparter:`,
  newTransaction: `Nye Transaksjoner`,
  needsReview: `Venter på godkjenning`,
  owesMe: `Jeg har tilgode`,
  iOwe: `Jeg skylder noen`,
  newPassword: `Nytt passord (minimum 8 tegn)`,
  confirmPassword: `Bekreft passord`,
  newPin: `Ny 4-sifret PIN-kode`,
  enterNewPin: `Vennligst tast inn en ny 4-sifret PIN-kode`,
  confirmPin: `Vennligst bekreft din PIN-kode`,
  newAccount: `Opprett en ny konto`,
  loginAccount: `Lås opp kontoen din`,
  recoverExistingAccount: `Gjenopprett en eksisterende konto`,
  recoverMnemonic: `Minnestøtte (12 ord som ble vist \n når du opprettet kontoen)`,
  recoverMnemonicLengthError: `Minnestøtte bør være nøyaktig 12 ord`,
  successTitle: `Suksess`,
  errorTitle: `Feil`,
  showMnemonic: `Vis minnestøtte på 12 ord`,
  mnemonicExhortation: `Denne setningen på 12 ord er nødvendig for å gjenopprette kontoen din, bevar det på et trygt og hemmelig sted`,
  addressExhortation: `Du kan sende ETH eller hvilken som helst støttet ERC-20 token for lommeboken din adresse.`,
  removeAccountTitle: `Er du sikker på at du vil fjerne kontoen din fra denne enheten?`,
  removeAccountExhortation: `Vær sikker på at du har tilgang til din minnestøtte for å gjenopprette kontoen din senere, da dette er en permanent fjerning av kontoinformasjonen din fra denne enheten.`,
  myAccount: `Min konto`,
  setNickname: `Still inn et brukernavn slik at vennene dine kan søke etter deg`,
  setEmail: `Angi en e-postadresse for å motta informasjon om Lndr oppdateringer`,
  nickname: `Brukernavn (små bokstaver og tall)`,
  email: `E-postadresse`,
  inviteLink: `Inviter Link`,
  splitExpense: `Dele en regning med meg på LNDR app`,
  sendInvite: `Send via e-post eller tekst`,
  unknownTransaction: `ukjent Transaksjons`,
  yourFriend: `vennen din`,
  lndrVerified: {
    ok: `OK`,
    title: `Sett høyere oppgjør grenseverdier og krypto abstinens mengder ved å fullføre vet at kunden krav.`,
    statusTitle: `Gjeldende status for verifisering ditt er:`,
    tryAgain: `Vi kunne ikke bekrefte identiteten din. Send inn informasjon og sørge for at bildene dine er leselig.`,
    formMessage: `Vennligst fyll ut alle feltene nedenfor`,
    button: `Bekreft din identitet`,
    prefix: `Les våre retningslinjer `,
    linkTitle: `retningslinjer for personvern `,
    postfix: `for personvern for hvordan personopplysninger blir håndtert.`,
    upload: `Last opp et `,
    governmentId: `offentlig utstedt ID`,
    selfie: `Last opp et selfie med offentlig utstedt ID`,
    proofOfAddress: `Adresse bevis`,
    ifNotId: `(Hvis ikke ID)`,
    agree: `Jeg har lest og aksepterer `,
    agreeLink: `personvernerklæringen`,
    success: `KYC har blitt sendt.`,
    idInfoHeader: `Eksempler på ID er:`,
    passport: `Pass`,
    drivers: `Førerkort`,
    national: `Nasjonalt ID-kort`,
    addressInfoHeader: `Eksempler på bevis på adresse:`,
    bank: `Kontoutskrift`,
    utility: `Strømregning`,
    other: `andre dokument`,
    chooseGovernmentPhoto: `Velg Regjeringen ID Photo`,
    chooseSelfiePhoto: `Velg selfie Photo`,
    chooseAddressPhoto: `Velg bevis på adresse Photo`,
    emailRequired: `Du trenger en e-post for å bekrefte identiteten, klikker du på "Endre e-post"`,
    approved: `GODKJENT`,
    rejected: `AVVIST`,
    pending: `Under vurdering`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Fornavn`,
      lastName: `Etternavn`,
      street: `Gateadresse`,
      city: `By`,
      state: `Stat / Provins`,
      postalCode: `postnummer`,
      country: `Velg land`,
      phone: `Telefonnummer`,
      dob: `Fødselsdato (ÅÅÅÅ-MM-DD)`,
    },
    formErrors: {
      firstName: `Fornavn er påkrevd`,
      lastName: `Etternavn er påkrevd`,
      street: `Gaten er nødvendig`,
      city: `Byen er nødvendig`,
      state: `Stat / provins er nødvendig`,
      postalCode: `Postnummer er påkrevet`,
      country: `Landet er nødvendig`,
      phone: `Telefonnummer er påkrevd`,
      dob: `Fødselsdato er påkrevd`,
      general: `Sørg for at du har fylt ut alle feltene og festet de riktige bildene`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Brukernavn bør være minst 3 tegn.`,
      compositionViolation: `Brukernavn kan bare inneholde tall og små bokstaver.`,
      duplicationViolation: `Brukernavn er allerede i bruk`,
    },
    email: {
      compositionViolation: `E-postformatet er feil`,
      duplicationViolation: `E-postadressen er allerede i bruk`,
    },
    pin: {
      lengthViolation: `PIN-koden bør være minst 4 tegn.`,
      matchViolation: `PIN-koder bør matche.`,
      failedHashComparison: `PIN-koden er ikke gyldig, vennligst prøv igjen.`,
      updateSuccess: `PIN-koden din er oppdatert`,
      updateError: `Det oppstod en feil i å oppdatere PIN-koden din`,
    },
    mnemonic: {
      lengthViolation: `Minnestøtte bør ha minst 12 ord.`,
      unableToValidate: `Den angitte minnestøtten var ikke gyldig, vennligst prøv igjen.`,
    },
    setNickname: {
      success: `Brukernavnet ditt er lagret.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Din e-postadressen har blitt lagret.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `Du må angi PIN-koden din etter`,
      bottom: `minutter uten aktivitet`,
      update: `Oppdater`,
      error: `Vi klarte ikke å oppdatere kontoinnstillingene dine`,
      success: `Lås timeout oppdatert`,
    },
    addFriend: {
      success: X => `Venneforespørsel sendt til @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Fjernet fra venner: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: Y => `Din ETH saldo er ${String(Y).slice(0,8)}`,
      getError: `Kan ikke hente Eth saldoen`,
      manage: `Administrer ETH`,
    },
    sendEth: {
      error: {
        insufficient: `Du har ikke nok ETH for denne transaksjonen`,
        generic: `Det oppstod en feil med overføringen, vennligst prøv igjen senere`,
        address: `Vennligst oppgi en gyldig adresse`,
        amount: `Venligst fyll inn et beløp større enn 0`,
        limitExceeded: (A, M) => `Du kan bare sende ${CUR(A)} ${TL(A, M)} per uke, vennligst velg et mindre beløp`,
      },
      amount: `Beløpet som skal sendes`,
      address: `Bestemmelsesadresse`,
      transfer: `Overfør ETH`,
      transferAll: `Overfør alt`,
      balance: Y => `Din nåværende ETH saldo er ${typeof Y === 'string' ? Y.slice (0,8) :''} `,
      ethAddress: `Ethereum adresse`,
      transferLowercase: `Overfør Eth`,
      note: (A, M) => `Merk: Du kan bare overføre ${CUR(A)} ${TL(A, M)} per uke ut av Lndr`,
      warning: (Z, A, M) => `Du har ${CUR(A)}${Z} igjen av ditt ${CUR(A)} ${TL(A, M)} maksbeløpet`,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `Du har ikke nok ${name} for denne transaksjonen`,
        generic: `Det oppstod en feil med overføringen, vennligst prøv igjen senere`,
      },
      transfer: (name) => `Overfør ${name}`,
      address: `Bestemmelsesadresse`,
      balance: (name, balance) => `Din nåværende ${name} saldo er ${typeof balance === 'string' ? balance.slice(0,8) :''} `,
      tokenAddress: (name) => `${name} Adresse`,
      txCost: (ethCost, currencyCost) => `Transaksjonskostnad: ${ethCost} ETH (${currencyCost})`,
    },
    panelHeaders: [
      `Lommebok Adresse`,
      `Crypto kontosaldoer`,
      `Fjern konto`,
      `ETH Transaksjonshistorikk`,
      `Aktiver PayPal`,
      `Endre Primær Valuta`,
      `Lås opp Tilleggsfunksjoner`,
      `Endre e-post`,
      `Endre PIN-kode`,
      `Endre Lock Timeout`,
      `Mnemonic`,
      `Varsler`,
    ],
    viewEtherscan: `Vis Etherscan historikk`,
    profilePic: {
      change: `Bytt profilbilde`,
      setError: `Det oppstod en feil ved opplasting av bildet ditt, vennligst prøv igjen senere`,
      getError: `Det oppstod en feil ved henting av profilbildet ditt`,
      setSuccess: `Profilbilde er oppdatert`,
    },
    logoutSuccess: `Du har nå logget ut!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: name => `Nåværende ${name} saldo er`,

  welcomeView: {
    by: `BYGD AV`,
    makeItEasy: `Lndr gjør det enkelt å følge enkle gjeldLndr gjør det enkelt å følge enkle gjeld`,
    weHelpFriends: `Vi hjelper venner å bo, arbeide og leke sammen.`,
    len: `Ut`,
    dot: `.`,
    der: `lånerlånerlånerlånerlånerlånerlåner`,
    shareDinner: `Del middag`,
    fillTank: `Fyll tanken din`,
    travelTogether: `Reis sammen`,
    runEthereum: `Vi kjører på ETH!`,
    firstLendingApp: `Den første mobile utlånsappen som er sikret på blockchain.`,
    greatConcert: `Se en flott konsert`,
    youPlayWithFriends: `Du spiller med venner, \n vi vil holde styr på regningen...`,
    start: `Kom i gang`,
  },

  walkthrough: {
    skip: `hoppe`,
    continue: `fortsette`,
    step1: {
      easyToUse: `Lndr er den enkleste måten å splitte regninger, dele utgifter og bosette enkle gjeld med venner og familie, alt gjøres sikkert på blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `For å komme i gang med Lndr, må du legge til en venn.`,
      friendsScreen: `Besøk Venner skjermen for å søke etter, legge til eller invitere venner og familie til å koble på Lndr.`,
    },
    step3: {
      title: `Spille inn en transaksjon`,
      easy: `Splitte en regning eller legge en gjeld med en venn er lett i Lndr!`,
      selectFriend: `Velg din venn, din valutatype og beløp.`,
      addMemo: `Legg noen notater i memo boksen og klikk Send.`,
    },
    step4: {
      title: `Gjør opp`,
      ready: `Klar til å gjør opp?`,
      payPal: `Når det er på tide å slå seg opp med Lndr, \n- kan du velge PayPal:`,
      ether: `- cryptocurrencies som Ether:`,
      cash: `- eller rett og slett ta et kontantoppgjør:`,
      positiveBalance: `10,46`,
    },
    step5: {
      title: `Multi-valuta`,
      multiCurrency: `Lndr kan holde oversikt over transaksjonene selv om de skjer i ulike valutaer.`,
      exchangeRate: `Når du bestemmer deg for å gjøre opp med din venn, vil alle transaksjoner bli konvertert til din primære valutaen ved bruk av mest up-to-date valutakurser tilgjengelig.`,
      start: `Begynn å bruke Lndr!`,
    }
  },

  debtManagement: {
    shell: `Ny transaksjon`,
    add: `Legg til gjeld`,
    selectFriend: `Selekter`,
    lend: `Nytt lånNytt lånNytt lånNytt lånNytt lånNytt lån`,
    borrow: `Ny gjeld`,
    owesMe: `Skylder meg`,
    iOwe: `Jeg skylder`,
    iLent: `En venn skylder meg`,
    iBorrowed: `Jeg skylder en venn`,
    settleUpLower: `Gjør opp`,
    amountToSettle: `Beløpet til å gjøre opp`,
    total: `Total`,
    record: `Oversikt`,
    records: `Oversikter`,
    chooseCurrency: `Velg en valuta`,

    createError: {
      amountTooLow: `Beløpet må være større enn $ 0`,
      amountTooHigh: `Beløpet må være mindre enn $ 1.000.000.000`,
      selfAsFriend: `Du kan ikke opprette gjeld med deg selv, velg en annen venn`,
      pending: `Vennligst gjør opp din utestående transaksjon med denne brukeren før du oppretter en annen`,
      insufficientEth: E => `Du trenger minst ${E} ETH til å gjøre opp for deg, gå til Innstillinger for å se din saldo`,
    },
    fields: {
      currency: `Valuta`,
      amount: `Beløp`,
      settlementAmount: `Oppgjørsbeløpet`,
      selectFriend: `Venn`,
      memo: `Notat`,
      direction: `Velg den riktige erklæringen`,
    },
    memo: {
      example: `Skriv notatet her`,
    },
    direction: {
      lend: X => `${X} skylder meg`,
      borrow: X => `Jeg skylder ${X}`,
      initiatedLend: X => `${X} sier han / hun skylder`,
      initiatedBorrow: X => `${X} sier du skylder`,
      pendingLend: X => `@${X} skylder deg`,
      pendingBorrow: X => `Du skylder @${X}`,
      pendingLendSettlement: S => `@${S.debtorNickname} ber om et oppgjør i ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} ønsker å gjøre opp med deg i ${S.settlementCurrency}`,
      pendingLendSettlementMe: S => `Du har bedt om å gjøre opp for deg med @${S.debtorNickname} i ${S.settlementCurrency}`,
      pendingBorrowSettlementMe: S => `Du har bedt om at @${S.creditorNickname} gjør opp for seg i ${S.settlementCurrency}`,
    },
    pending: {
      success: F => `Gjeld under vurdering sendt inn til @${F.nickname}`,
      error: generalCommunicationError
    },
    pendingParens: `(under vurdering)`,
    confirmation: {
      transaction: CP => `Transaksjon med ${CP} har blitt bekreftet`,
      settlement: CP => `Oppgjør med ${CP} har blitt bekreftet`,
      error: `Kan ikke bekrefte transaksjonen på denne tiden, vennligst prøv igjen senere`,
    },
    rejection: {
      success: `Transaksjonen er avvist`,
      error: `Kan ikke avvise transaksjonen på denne tiden, vennligst prøv igjen senere`,
    },
    balances: {
      error: `Kan ikke laste saldoer på denne tiden, vennligst prøv igjen senere`,
    },
    for: M => `for ${M}`,
    settleUp: `Gjør opp`,
    settleTotal: `Gjør opp totalbeløpet`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Gjør opp for': 'Forespørsel om å betale for'} ${A} `,
    recordSettleUpMemo: `Gjør opp`,
    balanceByCurrency: `Detaljer`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `Ditt oppgjør med ${X} mislyktes på grunn av utilstrekkelige midler`,
        generic: X => `Det oppstod en feil under oppgjøret med ${X}`,
      }
    },
    eth: `Gjør opp med ETH`,
    erc20: name => `Settle with ${name}`,
    paypal: `Gjør opp med PayPal`,
    nonPayment: `Ta opp et oppgjør`,
    select: `Velg Oppgjør Type`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Hjem`,
    friends: `Venner`,
    activity: `Aktivitet`,
  },

  notifications: {
    toggleNotifications: `Endre varsler`,
    enable: `Slå på`,
    disable: `Slå av`,
  },

  pendingTransactionsLanguage: {
    shell: `Transaksjon under vurdering`,
    title: `Under vurdering`,
    memo: `Notat:`,
    for: `Til`,
    none: `Du har ingen transaksjoner under vurdering`,
    confirmationQuestion: `Er du sikker på at du vil bekrefte denne transaksjonen?`,
    pendingAnnouncement: `Denne transaksjonen venter på bekreftelse av den andre parten.`,
    bilateral: `Venter på at overføringen er fullført`,
    confirm: `Bekreft`,
    reject: `Avvis transaksjon`,
    rejectRequest: `Avvis`,
    cancel: `Avbryt transaksjon`,
    direction: {
      lend: (X, Z) => `@${X} skylder deg ${Z}`,
      borrow: (X, Z) => `Du skylder @${X} ${Z}`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Oppgjør under vurdering`,
    title: `Under vurdering`,
    none: `Du har ingen oppgjør under vurdering`,
    confirm: `Bekreft`,
    reject: `Avvis Oppgjør`,
    cancel: `Avbryt Oppgjør`,
  },

  recentTransactionsLanguage: {
    title: `Fullført`,
    none: `Du har ingen fullførte transaksjoner`,
    direction: {
      lend: (X, Z) => `@${X} skylder deg ${Z}`,
      borrow: (X, Z) => `Du skylder @${X} ${Z}`
    },
    balance: `Saldo`,
    consolidatedBalance: `Saldo`,
    friends: FS => `(fra ${FS} ${FS === 1 ? 'venn': 'venner'})`,
  },

  tabs: {
    home: `Hjem `,
    friends: `  Venner  `,
    activity: `Aktivitet`,
  },

  confirmation: {
    shell: `Bekreftelse`,
    done: `Ferdig`,
    create: {
      start: `Vi har sendt oversikten over til `,
      end: ` for bekreftelse.`,
    },
    confirm: {
      start: ``,
      end: ` har bekreftet denne oversikten.`,
    },
    reject: {
      start: `Vi har informert `,
      end: ` over at du avviste denne oversikten.`,
    },
    confirmFriend: {
      start: `Du er nå venner med `,
      end: `!`,
    },
    rejectFriend: {
      start: `Du har avvist venneforespørselen fra `,
      end: `.`,
    },
    rejectOutboundFriendRequest: {
      start: `Du har avbrutt venneforespørsel til `,
      end: `.`,
    },
    ethSent: {
      start: `Du har sendt `,
      end: ` ETH og transaksjonens referanse er `,
    },
    erc20Sent: {
      start: `Du har sendt `,
      end: ` og transaksjonens referanse er `,
    },
    requestPayPalPayee: {
      start: `Vi har latt `,
      end: ` vet at du ønsker å bosette seg med PayPal.`,
    },
    requestPayPalPayment: {
      start: `Vi har latt `,
      end: ` vet at du ønsker å bli betalt med PayPal.`,
    },
    settledWithPayPal: {
      start: `Vi har latt `,
      end: ` vet at du har avgjort med PayPal.`,
    },
    kycSuccess: {
      start: `Takk skal du ha! Din konto blir bekreftet.

      `,
      end: `Du vil bli varslet når tilleggsfunksjoner er ulåst.`
    },
    status: `Du kan se statusen for denne transaksjonen `,
    activity: `i aktivitetsfanen.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Venneforespørsel`,
    message: `Venneforespørsler`,
    request: F => `@${F} ønsker å være venner med deg!`,
    outbound: F => `Du sendt en forespørsel om å venn @${F}`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `Ved å klikke nedenfor bekrefter du at du har lest og aksepterer Blockmasons personvernreglene. Blockmason kan bruke e-postadressen din til å sende oppdateringer om Blockmason og LNDR. Her er en lenke til personvernreglene:`,
  },

  payPalLanguage: {
    connectPayPal: `Koble PayPal`,
    connectSuccess: `PayPal aktivert vellykket.`,
    disconnectPayPal: `Koble PayPal`,
    disconnected: `PayPal frakoblet.`,
    requestPayPalPayment: `Forespørsel om PayPal Payment`,
    sendWithPayPal: `Send Med PayPal`,
    enablePayPal: `Aktiver PayPal`,
    requestPayPalPayee: `Be om PayPal`,
    enablePayPalForFriend: F => `Aktivering PayPal tillater @${F} for å betale you.`,
    friendNotEnabled: F => `@${F} is niet ingeschakeld PayPal betalingen.`,
    friendRequestedConnect: F => `@${F} ønsker å betale deg via PayPal`,
    requestFriendConnect: F => `Du ba @${F} for å muliggjøre PayPal`,
    feesNotification: `Inkluderer ikke PayPal avgifter`,
    feesInformationHeader: `PayPal gebyrer Informasjon`,
    feesInformation: `1. PayPal-kontoen din må være knyttet til en bankkonto.
    
2. Betale i en annen valuta enn bankens valuta vil medføre en $ 0.35 gebyr.

3. Internasjonale overføre avgifter:
    USA til Canada / Europa: $ 2.99
    USA til noe annet: $ 4.99

4. Disse avgiftene er ikke fullstendig. For den mest oppdaterte informasjon vennligst gå til:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afghanistan`, code: 'AFG' },
    { name: `albania`, code: 'ALB' },
    { name: `Algerie`, code: 'DZA' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angola`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Antarktis`, code: 'ATA' },
    { name: `Antigua og Barbuda`, code: 'ATG' },
    { name: `Argentina`, code: 'ARG' },
    { name: `Armenia`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Australia`, code: 'AUS' },
    { name: `Østerrike`, code: 'AUT' },
    { name: `Aserbajdsjan`, code: 'AZE' },
    { name: `Bahamas`, code: 'BHS' },
    { name: `Bahrain`, code: 'BHR' },
    { name: `Bangladesh`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Hviterussland`, code: 'BLR' },
    { name: `Belgia`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `Bermuda`, code: 'BMU' },
    { name: `Bhutan`, code: 'BTN' },
    { name: `Bolivia`, code: 'BOL' },
    { name: `Bosnia og Herzegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brasil`, code: 'BRA' },
    { name: `Brunei`, code: 'BRN' },
    { name: `Bulgaria`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Kambodsja`, code: 'KHM' },
    { name: `Kamerun`, code: 'CMR' },
    { name: `Canada`, code: 'CAN' },
    { name: `Caymanøyene`, code: 'CYM' },
    { name: `Den sentralafrikanske republikk`, code: 'CAF' },
    { name: `Tsjad`, code: 'TCD' },
    { name: `Chile`, code: 'CHL' },
    { name: `Kina`, code: 'CHN' },
    { name: `Colombia`, code: 'COL' },
    { name: `Komorene`, code: 'COM' },
    { name: `Kongo`, code: 'COG' },
    { name: `Kongo`, code: 'COD' },
    { name: `Cook-øyene`, code: 'COK' },
    { name: `Costa Rica`, code: 'CRI' },
    { name: `Elfenbenskysten`, code: 'CIV' },
    { name: `Kroatia`, code: 'HRV' },
    { name: `Cuba`, code: 'CUB' },
    { name: `Curaçao`, code: 'CUW' },
    { name: `Kypros`, code: 'CYP' },
    { name: `Tsjekkia`, code: 'CZE' },
    { name: `Danmark`, code: 'DNK' },
    { name: `Djibouti`, code: 'DJI' },
    { name: `Dominica`, code: 'DMA' },
    { name: `den dominikanske republikk`, code: 'DOM' },
    { name: `Ecuador`, code: 'ECU' },
    { name: `Egypt`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Ekvatorial-Guinea`, code: 'GNQ' },
    { name: `Eritrea`, code: 'ERI' },
    { name: `Estland`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Etiopia`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Finland`, code: 'FIN' },
    { name: `Frankrike`, code: 'FRA' },
    { name: `fransk Guyana`, code: 'GUF' },
    { name: `Fransk Polynesia`, code: 'PYF' },
    { name: `Gabon`, code: 'GAB' },
    { name: `Gambia`, code: 'GMB' },
    { name: `Georgia`, code: 'GEO' },
    { name: `Tyskland`, code: 'DEU' },
    { name: `Ghana`, code: 'GHA' },
    { name: `Gibraltar`, code: 'GIB' },
    { name: `Hellas`, code: 'GRC' },
    { name: `Grønland`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadeloupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guinea`, code: 'GIN' },
    { name: `Guinea-Bissau`, code: 'GNB' },
    { name: `Guyana`, code: 'GUY' },
    { name: `Haiti`, code: 'HTI' },
    { name: `Vatikanet`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hong Kong`, code: 'HKG' },
    { name: `Ungarn`, code: 'HUN' },
    { name: `Island`, code: 'ISL' },
    { name: `India`, code: 'IND' },
    { name: `Indonesia`, code: 'IDN' },
    { name: `Iran`, code: 'IRN' },
    { name: `Irak`, code: 'IRQ' },
    { name: `Irland`, code: 'IRL' },
    { name: `Isle of Man`, code: 'IMN' },
    { name: `Israel`, code: 'ISR' },
    { name: `Italia`, code: 'ITA' },
    { name: `Jamaica`, code: 'JAM' },
    { name: `Japan`, code: 'JPN' },
    { name: `Jordan`, code: 'JOR' },
    { name: `Kasakhstan`, code: 'KAZ' },
    { name: `Kenya`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Korea (DPRK)`, code: 'PRK' },
    { name: `Korea (ROK)`, code: 'KOR' },
    { name: `Kuwait`, code: 'KWT' },
    { name: `Kirgisistan`, code: 'KGZ' },
    { name: `Laos`, code: 'LAO' },
    { name: `Latvia`, code: 'LVA' },
    { name: `Libanon`, code: 'LBN' },
    { name: `Lesotho`, code: 'LSO' },
    { name: `Liberia`, code: 'LBR' },
    { name: `Libya`, code: 'LBY' },
    { name: `Liechtenstein`, code: 'LIE' },
    { name: `Litauen`, code: 'LTU' },
    { name: `Luxembourg`, code: 'LUX' },
    { name: `Macao`, code: 'MAC' },
    { name: `Makedonia`, code: 'MKD' },
    { name: `Madagaskar`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Malaysia`, code: 'MYS' },
    { name: `Maldivene`, code: 'MDV' },
    { name: `Mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `Marshalløyene`, code: 'MHL' },
    { name: `Martinique`, code: 'MTQ' },
    { name: `Mauritania`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `Mexico`, code: 'MEX' },
    { name: `Mikronesia`, code: 'FSM' },
    { name: `Moldova`, code: 'MDA' },
    { name: `Monaco`, code: 'MCO' },
    { name: `Mongolia`, code: 'MNG' },
    { name: `Montenegro`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Marokko`, code: 'MAR' },
    { name: `Mosambik`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namibia`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepal`, code: 'NPL' },
    { name: `Nederland`, code: 'NLD' },
    { name: `Ny Caledonia`, code: 'NCL' },
    { name: `New Zealand`, code: 'NZL' },
    { name: `Nicaragua`, code: 'NIC' },
    { name: `Niger`, code: 'NER' },
    { name: `Nigeria`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Nord-Marianene`, code: 'MNP' },
    { name: `Norge`, code: 'NOR' },
    { name: `Oman`, code: 'OMN' },
    { name: `Pakistan`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palestina`, code: 'PSE' },
    { name: `Panama`, code: 'PAN' },
    { name: `Papua Ny-Guinea`, code: 'PNG' },
    { name: `Paraguay`, code: 'PRY' },
    { name: `Peru`, code: 'PER' },
    { name: `Filippinene`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Polen`, code: 'POL' },
    { name: `Portugal`, code: 'PRT' },
    { name: `Puerto Rico`, code: 'PRI' },
    { name: `Qatar`, code: 'QAT' },
    { name: `Gjenforening`, code: 'REU' },
    { name: `Romania`, code: 'ROU' },
    { name: `Russland`, code: 'RUS' },
    { name: `Rwanda`, code: 'RWA' },
    { name: `Saint Barthélemy`, code: 'BLM' },
    { name: `Saint Helena, Ascension og Tristan da Cunha`, code: 'SHN' },
    { name: `Saint Kitts og Nevis`, code: 'KNA' },
    { name: `Saint Lucia`, code: 'LCA' },
    { name: `Saint Martin`, code: 'MAF' },
    { name: `Saint Pierre og Miquelon`, code: 'SPM' },
    { name: `Saint Vincent og Grenadinene`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `São Tomé og Príncipe`, code: 'STP' },
    { name: `Saudi-Arabia`, code: 'SAU' },
    { name: `Senegal`, code: 'SEN' },
    { name: `Serbia`, code: 'SRB' },
    { name: `Seychellene`, code: 'SYC' },
    { name: `Sierra Leone`, code: 'SLE' },
    { name: `Singapore`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Slovakia`, code: 'SVK' },
    { name: `Slovenia`, code: 'SVN' },
    { name: `Solomon øyene`, code: 'SLB' },
    { name: `Somalia`, code: 'SOM' },
    { name: `Sør-Afrika`, code: 'ZAF' },
    { name: `Sør-Sudan`, code: 'SSD' },
    { name: `Spania`, code: 'ESP' },
    { name: `Sri Lanka`, code: 'LKA' },
    { name: `Sudan`, code: 'SDN' },
    { name: `Surinam`, code: 'SUR' },
    { name: `Sverige`, code: 'SWE' },
    { name: `Sveits`, code: 'CHE' },
    { name: `Syria`, code: 'SYR' },
    { name: `Taiwan`, code: 'TWN' },
    { name: `Tadsjikistan`, code: 'TJK' },
    { name: `Tanzania`, code: 'TZA' },
    { name: `Thailand`, code: 'THA' },
    { name: `Øst-Timor`, code: 'TLS' },
    { name: `Å gå`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `Tonga`, code: 'TON' },
    { name: `Trinidad og Tobago`, code: 'TTO' },
    { name: `Tunisia`, code: 'TUN' },
    { name: `Tyrkia`, code: 'TUR' },
    { name: `Turkmenistan`, code: 'TKM' },
    { name: `Turks- og Caicosøyene`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `Ukraina`, code: 'UKR' },
    { name: `De forente arabiske emirater`, code: 'ARE' },
    { name: `Storbritannia`, code: 'GBR' },
    { name: `Amerikas forente stater`, code: 'USA' },
    { name: `USA ytre småøyer`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Usbekistan`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Viet Nam`, code: 'VNM' },
    { name: `De britiske jomfruøyene`, code: 'VGB' },
    { name: `De amerikanske jomfruøyene`, code: 'VIR' },
    { name: `Vestre Sahara`, code: 'ESH' },
    { name: `Jemen`, code: 'YEM' },
    { name: `Zambia`, code: 'ZMB' },
    { name: `Zimbabwe`, code: 'ZWE' },
  ]
}
