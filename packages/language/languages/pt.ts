import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Houve um problema de comunicação com o servidor, tente novamente mais tarde.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Olá Mundo`,
  noConnection: `Sem ligação`,
  retry: `Tentar novamente`,
  submit: `ENVIAR`,
  next: `Próximo`,
  cancel: `Cancelar`,
  back: `Voltar`,
  copy: `Copiar para área de transferência`,
  confirmAccount: `Confirmar`,
  createAccount: `Criar Conta em Portugues-Brasil`,
  recoverAccount: `Restaurar conta`,
  removeAccount: `Remover conta`,
  updateAccount: `Atualizar conta`,
  loginAction: `Desbloquear`,
  enterPin: `Digite seu PIN`,
  changePin: `Alterar PIN`,
  enterCurrentPin: `Digite o PIN atual`,
  logoutAction: `SAIR`,
  seeAllActivity: `Visualizar toda a atividade`,
  copiedClipboard: `Copiado para a área de transferência`,
  pleaseWait: `Por favor, espere`,
  addFriend: `Adicionar amigo`,
  addFriendConfirmationQuestion: `Tem certeza de que gostaria de adicionar esse usuário como amigo?`,
  removeFriend: `Remover amigo`,
  currentFriends: `Amigos Atuais`,
  removeFriendConfirmationQuestion: `Tem certeza de que deseja remover este usuário dos seus amigos?`,
  inviteFriends: `Convidar amigos para Lndr`,
  tryLndr: `Experimente o App Lndr aqui:`,
  friendInfo: `Mais informações sobre essa amizade:`,
  noFriends: `Adicione alguns amigos para começar!`,
  noMatches: `Não foram encontrados usuários correspondentes`,
  noBalances: `Você não tem dívidas registradas`,
  addFriendButton: `Adicionar amigo`,
  alreadyFriendsButton: `Amigos`,
  friendShell: `Amigo`,
  tip: `Gorjeta:`,
  notice: `Aviso:`,
  welcome: `Bem-vindo ao seu LNDR`,
  noBalanceWarning: `Não conseguimos carregar o seu saldo neste momento, tente novamente mais tarde.`,
  totalBalance: `Saldo Total:`,
  totalBalances: `Total de Contrapartes:`,
  newTransaction: `Nova Transação`,
  needsReview: `Aprovação Pendente`,
  owesMe: `Estou em dívida`,
  iOwe: `Devo alguém`,
  newPassword: `Nova Senha (mínimo de 8 caracteres)`,
  confirmPassword: `Confirme a Senha`,
  newPin: `Novo PIN de 4 dígitos`,
  enterNewPin: `DEFINA UM NOVO PIN DE 4 DÍGITOS`,
  confirmPin: `CONFIRME SEU PIN`,
  newAccount: `Criar uma nova conta`,
  loginAccount: `Desbloquear sua conta`,
  recoverExistingAccount: `Recuperar uma conta existente`,
  recoverMnemonic: `Mnemonic (exibindo 12 palavras \ Nwhen você criou sua conta)`,
  recoverMnemonicLengthError: `Mnemonic deve ter exatamente 12 palavras`,
  successTitle: `Sucesso`,
  errorTitle: `Erro`,
  showMnemonic: `Mostrar 12-Palavras Mnemonic`,
  mnemonicExhortation: `Esta frase de 12 palavras é necessária para restaurar sua conta, por favor salve-a em algum lugar seguro e secreto`,
  addressExhortation: `Você pode enviar ETH ou qualquer suportado ERC-20 token para o seu endereço de carteira.`,
  removeAccountTitle: `Tem certeza de que deseja remover a sua conta deste dispositivo?`,
  removeAccountExhortation: `Certifique-se de que você tem acesso ao seu mnemonic para restaurar sua conta mais tarde, pois esta é uma remoção permanente das informações da sua conta deste dispositivo.`,
  myAccount: `Minha Conta`,
  setNickname: `Defina um apelido que seus amigos possam encontrar por você`,
  setEmail: `Defina um e-mail para receber informações sobre atualizações do Lndr`,
  nickname: `Apelido (letras minúsculas e números)`,
  email: `Endereço de e-mail`,
  inviteLink: `Invite Link`,
  splitExpense: `Split an expense with me on the LNDR app`,
  sendInvite: `Send via email or text`,
  unknownTransaction: `Unknown Transaction`,
  yourFriend: `your friend`,
  lndrVerified: {
    ok: `Está bem`,
    title: `Definir limite superior de liquidação e de retirada de criptografia quantidades por completar saber suas necessidades de clientes.`,
    statusTitle: `O estado actual da sua verificação é:`,
    tryAgain: `Não fomos capazes de verificar a sua identidade. Reenvie suas informações e garantir que suas fotos são legíveis.`,
    formMessage: `Por favor, preencha todos os seguintes campos`,
    button: `Verifique sua identidade`,
    prefix: `Leia nossa `,
    linkTitle: `Política de Privacidade `,
    postfix: `para saber como seus dados pessoais serão gerenciados.`,
    upload: `Fazer upload de um `,
    governmentId: `documento de identificação emitido pelo governo`,
    selfie: `Carregar uma selfie com o seu ID emitido pelo governo`,
    proofOfAddress: `Prova de endereço`,
    ifNotId: `(Se não ID)`,
    agree: `Eu li e concordo com a `,
    agreeLink: `política de privacidade`,
    success: `KYC foi submetido.`,
    idInfoHeader: `Exemplos de ID incluem:`,
    passport: `Passaporte`,
    drivers: `Carteira de motorista`,
    national: `Bilhete de Identidade Nacional`,
    addressInfoHeader: `Exemplos de comprovante de endereço:`,
    bank: `Extrato bancário`,
    utility: `Conta de serviço público`,
    other: `Outro Documento`,
    chooseGovernmentPhoto: `Escolha ID Governo Foto`,
    chooseSelfiePhoto: `Escolha selfie Foto`,
    chooseAddressPhoto: `Escolha comprovante de endereço Foto`,
    emailRequired: `Você precisa de um e-mail para verificar sua identidade, clique no "Alterar e-mail"`,
    approved: `APROVADO`,
    rejected: `REJEITADO`,
    pending: `Pendente`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Primeiro nome`,
      lastName: `Último nome`,
      street: `Endereço`,
      city: `Cidade`,
      state: `Estado / Província`,
      postalCode: `Código postal`,
      country: `Selecione o pais`,
      phone: `Número de telefone`,
      dob: `Data de Nascimento (AAAA-MM-DD)`,
    },
    formErrors: {
      firstName: `O primeiro nome é necessário`,
      lastName: `Sobrenome é exigido`,
      street: `Rua é necessária`,
      city: `Cidade é necessária`,
      state: `Estado / Província é necessária`,
      postalCode: `Código Postal é necessária`,
      country: `País é necessária`,
      phone: `Número de telefone é necessária`,
      dob: `Data de nascimento é necessária`,
      general: `Por favor, certifique-se de ter preenchido todos os campos e anexado as fotos corretas`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `O Apelido deve ter pelo menos 3 caracteres.`,
      compositionViolation: `Apelido pode conter apenas números e letras minúsculas.`,
      duplicationViolation: `Apelido em uso`,
    },
    email: {
      compositionViolation: `Formato de e-mail incorreto`,
      duplicationViolation: `E-mail em uso`,
    },
    pin: {
      lengthViolation: `O PIN deve ter pelo menos 4 caracteres.`,
      matchViolation: `Os PINs devem ser iguais.`,
      failedHashComparison: `PIN inválido, por favor tente novamente.`,
      updateSuccess: `O seu PIN foi atualizado`,
      updateError: `Ocorreu um erro ao atualizar seu PIN`,
    },
    mnemonic: {
      lengthViolation: `Mnemonic deve ter pelo menos 12 palavras.`,
      unableToValidate: `Mnemonic inválido, por favor tente novamente.`,
    },
    setNickname: {
      success: `Seu apelido foi salvo.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `O seu e-mail foi salvo.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `Você deve digitar o seu PIN em seguida`,
      bottom: `minutos de inatividade`,
      update: `Atualizar`,
      error: `Não conseguimos atualizar as suas configurações de conta`,
      success: `Intervalo de Bloqueio Atualizado`,
    },
    addFriend: {
      success: X => `Pedido de amizade enviado para @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Removido dos amigos: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `Não é possível recuperar o saldo Eth`,
      manage: `Gerenciar ETH`,
    },
    sendEth: {
      error: {
        insufficient: `Você não tem ETH o suficiente para esta transação`,
        generic: `Houve um erro com a transferência, por favor tente novamente mais tarde`,
        address: `Por Favor insira um endereço válido`,
        amount: `Por favor, indique um valor superior a 0`,
        limitExceeded: (A, M) => `Você só pode enviar ${CUR(A)} ${TL(A, M)} por semana, por favor selecione uma quantidade menor`,
      },
      amount: `Quantidade a enviar`,
      address: `Endereço de destino`,
      transfer: `Transferir ETH`,
      transferAll: `Transferir tudo`,
      balance: Y => `Seu saldo ETH atual é de R ${typeof Y === 'string'? Y.slice (0,8): ''} `,
      ethAddress: `Endereço Ethereum`,
      transferLowercase: `Transferir Eth`,
      note: (A, M) => `Por favor, note: você só pode transferir ${CUR(A)} ${TL(A, M)} por semana no Lndr`,
      warning: (Z, A, M) => `Você tem ${CUR(A)} ${Z} remanescente do seu ${CUR(A)} ${TL(A, M)} limite`,
    },
    sendERC20: {
      error: {
        transfer: (name) => `Você não tem ${name} o suficiente para esta transação`,
        generic: `Houve um erro com a transferência, por favor tente novamente mais tarde`,
      },
      transfer: (name) => `Transferir ${name}`,
      address: `Endereço de destino`,
      balance: (name, balance) => `Seu saldo ${name} atual é de R ${typeof balance === 'string' ? balance.slice (0,8): ''} `,
      tokenAddress: (name) => `Endereço ${name}`,
      txCost: (ethCost, currencyCost) => `Custo de transação: ${ethCost} ETH (${currencyCost})`,
    },
    panelHeaders: [
      `Carteira Endereço`,
      `Saldos de Contas de criptografia`,
      `Remover conta`,
      `Histórico de Transações ETH`,
      `Ativar PayPal`,
      `Alterar Moeda principal`,
      `Desbloquear recursos adicionais`,
      `Alterar e-mail`,
      `Alterar PIN`,
      `Alterar tempo limite de bloqueio`,
      `Mnemonic`,
      `Notificações`,
    ],
    viewEtherscan: `Ver Histórico Etherscan`,
    profilePic: {
      change: `Alterar Foto do Perfil`,
      setError: `Houve um erro ao enviar a sua imagem, por favor tente novamente mais tarde`,
      getError: `Houve um erro ao recuperar a sua imagem no perfil`,
      setSuccess: `Imagem do Perfil Atualizada`,
    },
    logoutSuccess: `Você deslogou com sucesso!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: name => `Seu saldo ${name} atual é de R`,

  welcomeView: {
    by: `CONSTRUIDO POR`,
    makeItEasy: `Com Lndr é mais fácil para você controlar dívidas simples`,
    weHelpFriends: `Nós ajudamos amigos a viverem, trabalharem e jogarem juntos.`,
    len: `Len`,
    dot: `.`,
    der: `der`,
    shareDinner: `Compartilhar Jantar`,
    fillTank: `Encher o tanque`,
    travelTogether: `Viajar Juntos`,
    runEthereum: `Corremos na ETH!`,
    firstLendingApp: `O primeiro aplicativo de empréstimo móvel garantido na blockchain.`,
    greatConcert: `Ver um Grande Concerto`,
    youPlayWithFriends: `Você joga com os amigos; \n vamos continuar a guia ...`,
    start: `Iniciar`,
  },

  walkthrough: {
    skip: `pular`,
    continue: `continuar`,
    step1: {
      easyToUse: `Lndr é a maneira mais fácil de dividir as contas, compartilhar despesas e liquidar dívidas simples com amigos e familiares, tudo feito com segurança no blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Para começar com o Lndr, você vai precisar adicionar um amigo.`,
      friendsScreen: `Visite os amigos ecrã para procurar, adicionar ou convidar seus amigos e familiares para se conectar em Lndr.`,
    },
    step3: {
      title: `Gravando uma transação`,
      easy: `Dividir um projeto de lei ou a adição de uma dívida com um amigo é fácil na Lndr!`,
      selectFriend: `Selecione seu amigo, seu moeda eo montante.`,
      addMemo: `Adicionar algumas notas na caixa de memorando e clique em Enviar.`,
    },
    step4: {
      title: `Contentar-se`,
      ready: `Pronto para contentar-se?`,
      payPal: `Quando é hora de se contentar com Lndr, \n- você pode escolher PayPal:`,
      ether: `- cryptocurrencies como éter:`,
      cash: `- ou simplesmente gravar uma liquidação em dinheiro:`,
      positiveBalance: `10,46`,
    },
    step5: {
      title: `Multi Moeda`,
      multiCurrency: `Lndr pode manter o controle de suas transações, mesmo que eles acontecem em diferentes moedas.`,
      exchangeRate: `Quando você decidir resolver com o seu amigo, todas as transações serão convertidos em sua moeda principal usando as taxas de câmbio mais up-to-date disponíveis.`,
      start: `Comece a usar Lndr!`,
    }
  },

  debtManagement: {
    shell: `Nova Transação`,
    add: `Adicionar Dívida`,
    selectFriend: `Selecionar`,
    lend: `Novo Empréstimo`,
    borrow: `Novo Débito`,
    owesMe: `Me deve`,
    iOwe: `Eu devo`,
    iLent: `Um amigo me deve`,
    iBorrowed: `Devo um amigo`,
    settleUpLower: `Contentar-se`,
    amountToSettle: `Montante a pagar`,
    total: `Total`,
    record: `registro`,
    records: `registros`,
    chooseCurrency: `Escolha uma moeda`,

    createError: {
      amountTooLow: `Montante deve ser superior a US $ 0`,
      amountTooHigh: `Montante deve ser inferior a US $ 1.000.000.000`,
      selfAsFriend: `Você não pode criar dívida com você mesmo, escolha um outro amigo`,
      pending: `Por favor, resolva a sua transação pendente com este usuário antes de criar outra`,
      insufficientEth: E => `Você precisa de pelo menos US ${E} ETH para pagar, vá para Configurações para ver o seu balanço`,
    },
    fields: {
      currency: `Moeda`,
      amount: `Montante`,
      settlementAmount: `Quantidade do Pagamento`,
      selectFriend: `Amigos`,
      memo: `Memorando`,
      direction: `Selecione a afirmação correta`,
    },
    memo: {
      example: `Digite o memorando aqui`,
    },
    direction: {
      lend: X => `${X} me deve`,
      borrow: X => `eu devo ${X}`,
      initiatedLend: X => `${X} diz que ele / ela deve`,
      initiatedBorrow: X => `${X} diz que você deve`,
      pendingLend: X => `@${X} deve você`,
      pendingBorrow: X => `Você deve @${X} `,
      pendingLendSettlement: S => `@${S.debtorNickname} solicita um pagamento em ${S.settlementCurrency} `,
      pendingBorrowSettlement: S => `@${S.creditorNickname} quer pagar você ${S.settlementCurrency} `,
      pendingLendSettlementMe: S => `Você solicitou um pagamento de @${S.debtorNickname} em ${S.settlementCurrency} `,
      pendingBorrowSettlementMe: S => `Você solicitou que @${S.creditorNickname} pague em ${S.settlementCurrency} `,
    },
    pending: {
      success: F => `Dívida pendente enviada para @${F.nickname}`,
      error: generalCommunicationError
    },
    pendingParens: `(pendente)`,
    confirmation: {
      transaction: CP => `Transação de ${CP} foi confirmada com sucesso`,
      settlement: CP => `Pagamento de ${CP} foi confirmado com sucesso`,
      error: `Incapaz de confirmar a transação neste momento, por favor tente novamente mais tarde`,
    },
    rejection: {
      success: `A Transação foi Rejeitada`,
      error: `Não é possível rejeitar a transação neste momento, tente novamente mais tarde`,
    },
    balances: {
      error: `Não foi possível carregar os saldos neste momento, por favor tente novamente mais tarde`,
    },
    for: M => `para ${M}`,
    settleUp: `Pagar`,
    settleTotal: `Pagamento Total`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Pagar a': 'Pedido de pagamento de'} ${A} `,
    recordSettleUpMemo: `Pagando`,
    balanceByCurrency: `Detalhes`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `O seu pagamento de ${X} falhou devido a fundos insuficientes`,
        generic: X => `Ocorreu um erro ao processar o seu pagamento de ${X} `,
      }
    },
    eth: `Pagar com ETH`,
    erc20: name => `Settle with ${name}`,
    paypal: `Pagar com PayPal`,
    nonPayment: `Gravar um Pagamento`,
    select: `Escolha um tipo de liquidação`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Principal`,
    friends: `Amigos`,
    activity: `Atividade`,
  },

  notifications: {
    toggleNotifications: `Alternar Notificações`,
    enable: `Ligar`,
    disable: `Desligar`,
  },

  pendingTransactionsLanguage: {
    shell: `Transação pendente`,
    title: `Pendente`,
    memo: `Memorando:`,
    for: `Para`,
    none: `Você não tem transações pendentes`,
    confirmationQuestion: `Tem certeza de que deseja confirmar esta transação?`,
    pendingAnnouncement: `Esta transação está aguardando a confirmação pela outra parte.`,
    bilateral: `Esperando transferência para completar`,
    confirm: `Confirmar`,
    reject: `Rejeitar Transação`,
    rejectRequest: `Rejeitar`,
    cancel: `Cancelar transações`,
    direction: {
      lend: (X, Z) => `@${X} lhe deve ${Z}`,
      borrow: (X, Z) => `Você deve @${X} ${Z}`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Pagamento Pendente`,
    title: `Pendente`,
    none: `Você não tem Pagamentos Pendentes`,
    confirm: `Confirmar`,
    reject: `Rejeitar Pagamento`,
    cancel: `Anular Pagamentos`,
  },

  recentTransactionsLanguage: {
    title: `Concluído`,
    none: `Você não tem transações concluídas`,
    direction: {
      lend: (X, Z) => `@${X} deve você ${Z}`,
      borrow: (X, Z) => `Você deve @${X} ${Z}`
    },
    balance: `Balanço`,
    consolidatedBalance: `Balanço`,
    friends: FS => `(de ${FS} ${ FS === 1 ? 'amigo': 'Amigos'})`,
  },

  tabs: {
    home: `Principal `,
    friends: `Amigos`,
    activity: `Atividade`,
  },

  confirmation: {
    shell: `Confirmação`,
    done: `Feito`,
    create: {
      start: `Enviamos o registro sobre `,
      end: ` para confirmação.`,
    },
    confirm: {
      start: `Você já confirmou este registro de `,
      end: `.`,
    },
    reject: {
      start: `Avisamos `,
      end: ` que você rejeitou este registro.`,
    },
    confirmFriend: {
      start: `Agora você é amigo de `,
      end: `!`,
    },
    rejectFriend: {
      start: `Você recusou o pedido de amizade de `,
      end: `.`,
    },
    rejectOutboundFriendRequest: {
      start: `Você cancelou a solicitação de amigo para `,
      end: `.`,
    },
    ethSent: {
      start: `Você enviou com sucesso `,
      end: ` ETH e seu hash de transação é `,
    },
    erc20Sent: {
      start: `Você enviou com sucesso `,
      end: ` e seu hash de transação é `,
    },
    requestPayPalPayee: {
      start: `Deixamos `,
      end: ` saber que você gostaria de se contentar com o PayPal.`,
    },
    requestPayPalPayment: {
      start: `Deixamos `,
      end: ` saber que você gostaria de ser pago com PayPal.`,
    },
    settledWithPayPal: {
      start: `Deixamos `,
      end: ` saber que você tenha resolvido com PayPal.`,
    },
    kycSuccess: {
      start: `Obrigado! A sua conta está sendo verificada.

      `,
      end: `Você será notificado quando suas características adicionais são desbloqueadas.`
    },
    status: `Você pode ver o status da operação na aba atividade.`,
    activity: `.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Pedido de amizade`,
    message: `Pedidos de amizade`,
    request: F => `@${F} quer ser seu amigo!`,
    outbound: F => `Você enviou uma solicitação de amigo para @${F}`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `Ao clicar abaixo, você confirma que leu e concorda com a política de privacidade da Blockmason. Blockmason pode usar seu endereço de e-mail para enviar atualizações sobre Blockmason e LNDR. Aqui está um link para a política de privacidade:`,
  },

  payPalLanguage: {
    connectPayPal: `Ligue PayPal`,
    connectSuccess: `PayPal habilitado com sucesso.`,
    disconnectPayPal: `Desligue PayPal`,
    disconnected: `PayPal desligado.`,
    requestPayPalPayment: `Pedido PayPal Payment`,
    sendWithPayPal: `Enviar Com PayPal`,
    enablePayPal: `Ativar PayPal`,
    requestPayPalPayee: `Solicitar PayPal`,
    enablePayPalForFriend: F => `Ativando PayPal permite @${F} para pagar you.`,
    friendNotEnabled: F => `@${F} não permitiu PayPal pagamentos.`,
    friendRequestedConnect: F => `@${F} quer pagar via PayPal`,
    requestFriendConnect: F => `Você pediu @${F} para permitir PayPal`,
    feesNotification: `Não inclui taxas do PayPal`,
    feesInformationHeader: `PayPal Taxas Informação`,
    feesInformation: `1. A sua conta PayPal deve estar vinculado a uma conta bancária.
    
2. Pagar em uma moeda diferente da moeda do seu banco irá incorrer em uma taxa de US $ 0,35.

3. taxas de transferência internacionais:
    EUA para o Canadá / Europa: $ 2.99
    EUA para qualquer outro lugar: $ 4.99

4. Estas taxas não são abrangentes. Para obter as informações mais atualizadas acesse:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afeganistão`, code: 'AFG' },
    { name: `Albânia`, code: 'ALB' },
    { name: `Argélia`, code: 'DZA' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angola`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Antártica`, code: 'ATA' },
    { name: `Antígua e Barbuda`, code: 'ATG' },
    { name: `Argentina`, code: 'ARG' },
    { name: `Armênia`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Austrália`, code: 'AUS' },
    { name: `Áustria`, code: 'AUT' },
    { name: `Azerbaijão`, code: 'AZE' },
    { name: `Bahamas`, code: 'BHS' },
    { name: `Bahrain`, code: 'BHR' },
    { name: `Bangladesh`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Belarus`, code: 'BLR' },
    { name: `Bélgica`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `Bermudas`, code: 'BMU' },
    { name: `Butão`, code: 'BTN' },
    { name: `Bolívia`, code: 'BOL' },
    { name: `Bósnia e Herzegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brasil`, code: 'BRA' },
    { name: `Brunei`, code: 'BRN' },
    { name: `Bulgária`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Camboja`, code: 'KHM' },
    { name: `Camarões`, code: 'CMR' },
    { name: `Canadá`, code: 'CAN' },
    { name: `Ilhas Cayman`, code: 'CYM' },
    { name: `República Centro-Africano`, code: 'CAF' },
    { name: `Chade`, code: 'TCD' },
    { name: `Chile`, code: 'CHL' },
    { name: `China`, code: 'CHN' },
    { name: `Colômbia`, code: 'COL' },
    { name: `Comores`, code: 'COM' },
    { name: `Congo`, code: 'COG' },
    { name: `Congo`, code: 'COD' },
    { name: `Ilhas Cook`, code: 'COK' },
    { name: `Costa Rica`, code: 'CRI' },
    { name: `Côte d'Ivoire`, code: 'CIV' },
    { name: `Croácia`, code: 'HRV' },
    { name: `Cuba`, code: 'CUB' },
    { name: `Curaçao`, code: 'CUW' },
    { name: `Chipre`, code: 'CYP' },
    { name: `Czechia`, code: 'CZE' },
    { name: `Dinamarca`, code: 'DNK' },
    { name: `Djibouti`, code: 'DJI' },
    { name: `Dominica`, code: 'DMA' },
    { name: `República Dominicana`, code: 'DOM' },
    { name: `Equador`, code: 'ECU' },
    { name: `Egito`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Guiné Equatorial`, code: 'GNQ' },
    { name: `Eritrea`, code: 'ERI' },
    { name: `Estônia`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Etiópia`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Finlândia`, code: 'FIN' },
    { name: `França`, code: 'FRA' },
    { name: `Guiana Francesa`, code: 'GUF' },
    { name: `Polinésia Francesa`, code: 'PYF' },
    { name: `Gabão`, code: 'GAB' },
    { name: `Gâmbia`, code: 'GMB' },
    { name: `Georgia`, code: 'GEO' },
    { name: `Alemanha`, code: 'DEU' },
    { name: `Gana`, code: 'GHA' },
    { name: `Gibraltar`, code: 'GIB' },
    { name: `Grécia`, code: 'GRC' },
    { name: `Groenlândia`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadalupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guiné`, code: 'GIN' },
    { name: `Guiné-Bissau`, code: 'GNB' },
    { name: `Guiana`, code: 'GUY' },
    { name: `Haiti`, code: 'HTI' },
    { name: `Vaticano`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hong Kong`, code: 'HKG' },
    { name: `Hungria`, code: 'HUN' },
    { name: `Islândia`, code: 'ISL' },
    { name: `Índia`, code: 'IND' },
    { name: `Indonésia`, code: 'IDN' },
    { name: `Irã`, code: 'IRN' },
    { name: `Iraque`, code: 'IRQ' },
    { name: `Irlanda`, code: 'IRL' },
    { name: `Isle of Man`, code: 'IMN' },
    { name: `Israel`, code: 'ISR' },
    { name: `Itália`, code: 'ITA' },
    { name: `Jamaica`, code: 'JAM' },
    { name: `Japão`, code: 'JPN' },
    { name: `Jordânia`, code: 'JOR' },
    { name: `Cazaquistão`, code: 'KAZ' },
    { name: `Quênia`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Coreia (RPDC)`, code: 'PRK' },
    { name: `Coreia (ROK)`, code: 'KOR' },
    { name: `Kuweit`, code: 'KWT' },
    { name: `Quirguistão`, code: 'KGZ' },
    { name: `Laos`, code: 'LAO' },
    { name: `Letônia`, code: 'LVA' },
    { name: `Líbano`, code: 'LBN' },
    { name: `Lesoto`, code: 'LSO' },
    { name: `Libéria`, code: 'LBR' },
    { name: `Líbia`, code: 'LBY' },
    { name: `Liechtenstein`, code: 'LIE' },
    { name: `Lituânia`, code: 'LTU' },
    { name: `Luxemburgo`, code: 'LUX' },
    { name: `Macau`, code: 'MAC' },
    { name: `Macedonia`, code: 'MKD' },
    { name: `Madagáscar`, code: 'MDG' },
    { name: `Malavi`, code: 'MWI' },
    { name: `Malásia`, code: 'MYS' },
    { name: `Maldivas`, code: 'MDV' },
    { name: `Mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `Ilhas Marshall`, code: 'MHL' },
    { name: `Martinique`, code: 'MTQ' },
    { name: `Mauritânia`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `México`, code: 'MEX' },
    { name: `Micronesia`, code: 'FSM' },
    { name: `Moldova`, code: 'MDA' },
    { name: `Monaco`, code: 'MCO' },
    { name: `Mongólia`, code: 'MNG' },
    { name: `Montenegro`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Marrocos`, code: 'MAR' },
    { name: `Moçambique`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namíbia`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepal`, code: 'NPL' },
    { name: `Países Baixos`, code: 'NLD' },
    { name: `Nova Caledônia`, code: 'NCL' },
    { name: `Nova Zelândia`, code: 'NZL' },
    { name: `Nicarágua`, code: 'NIC' },
    { name: `Níger`, code: 'NER' },
    { name: `Nigéria`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Ilhas Marianas do Norte`, code: 'MNP' },
    { name: `Noruega`, code: 'NOR' },
    { name: `Omã`, code: 'OMN' },
    { name: `Paquistão`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palestina`, code: 'PSE' },
    { name: `Panamá`, code: 'PAN' },
    { name: `Papua Nova Guiné`, code: 'PNG' },
    { name: `Paraguai`, code: 'PRY' },
    { name: `Peru`, code: 'PER' },
    { name: `Filipinas`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Polônia`, code: 'POL' },
    { name: `Portugal`, code: 'PRT' },
    { name: `Porto Rico`, code: 'PRI' },
    { name: `Catar`, code: 'QAT' },
    { name: `Reunião`, code: 'REU' },
    { name: `Romênia`, code: 'ROU' },
    { name: `Federação Russa`, code: 'RUS' },
    { name: `Ruanda`, code: 'RWA' },
    { name: `São Bartolomeu`, code: 'BLM' },
    { name: `Santa Helena, Ascensão e Tristão da Cunha`, code: 'SHN' },
    { name: `São Cristóvão e Nevis`, code: 'KNA' },
    { name: `Santa Lúcia`, code: 'LCA' },
    { name: `são Martinho`, code: 'MAF' },
    { name: `Saint Pierre e Miquelon`, code: 'SPM' },
    { name: `São Vicente e Granadinas`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `São Tomé e Príncipe`, code: 'STP' },
    { name: `Arábia Saudita`, code: 'SAU' },
    { name: `Senegal`, code: 'SEN' },
    { name: `Sérvia`, code: 'SRB' },
    { name: `Seychelles`, code: 'SYC' },
    { name: `Serra Leoa`, code: 'SLE' },
    { name: `Cingapura`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Eslováquia`, code: 'SVK' },
    { name: `Eslovenia`, code: 'SVN' },
    { name: `Ilhas Salomão`, code: 'SLB' },
    { name: `Somália`, code: 'SOM' },
    { name: `África do Sul`, code: 'ZAF' },
    { name: `Sudão do Sul`, code: 'SSD' },
    { name: `Espanha`, code: 'ESP' },
    { name: `Sri Lanka`, code: 'LKA' },
    { name: `Sudão`, code: 'SDN' },
    { name: `Suriname`, code: 'SUR' },
    { name: `Suécia`, code: 'SWE' },
    { name: `Suíça`, code: 'CHE' },
    { name: `República Árabe da Síria`, code: 'SYR' },
    { name: `Taiwan`, code: 'TWN' },
    { name: `Tadjiquistão`, code: 'TJK' },
    { name: `Tanzânia`, code: 'TZA' },
    { name: `Tailândia`, code: 'THA' },
    { name: `Timor-Leste`, code: 'TLS' },
    { name: `Ir`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `Tonga`, code: 'TON' },
    { name: `Trinidad e Tobago`, code: 'TTO' },
    { name: `Tunísia`, code: 'TUN' },
    { name: `Peru`, code: 'TUR' },
    { name: `Turcomenistão`, code: 'TKM' },
    { name: `Ilhas Turks e Caicos`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `Ucrânia`, code: 'UKR' },
    { name: `Emirados Árabes Unidos`, code: 'ARE' },
    { name: `Reino Unido`, code: 'GBR' },
    { name: `Estados Unidos da America`, code: 'USA' },
    { name: `Estados Unidos Ilhas Menores Distantes`, code: 'UMI' },
    { name: `Uruguai`, code: 'URY' },
    { name: `Uzbequistão`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Viet Nam`, code: 'VNM' },
    { name: `Ilhas Virgens Britânicas`, code: 'VGB' },
    { name: `Ilhas Virgens Americanas`, code: 'VIR' },
    { name: `Saara Ocidental`, code: 'ESH' },
    { name: `Iémen`, code: 'YEM' },
    { name: `Zâmbia`, code: 'ZMB' },
    { name: `Zimbábue`, code: 'ZWE' },
  ]
}
