import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Terjadi masalah hubungan dengan server. Silakan coba lagi nanti.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Halo, dunia!`,
  noConnection: `Tidak ada koneksi`,
  retry: `Mencoba kembali`,
  submit: `KIRIM`,
  next: `Selanjutnya`,
  cancel: `Batalkan`,
  back: `Kembali`,
  copy: `Salin ke Papan Klip`,
  confirmAccount: `Konfirmasi`,
  createAccount: `Buat Akun`,
  recoverAccount: `Pulihkan Akun`,
  removeAccount: `Hapus Akun`,
  updateAccount: `Perbarui Akun`,
  loginAction: `Buka Kunci`,
  enterPin: `MASUKKAN PIN ANDA`,
  changePin: `Ubah PIN`,
  enterCurrentPin: `Masukan PIN Saat Ini`,
  logoutAction: `KELUAR`,
  seeAllActivity: `Lihat Semua Aktivitas`,
  copiedClipboard: `Disalin ke Papan Klip`,
  pleaseWait: `Mohon tunggu`,
  addFriend: `Tambahkan Teman`,
  addFriendConfirmationQuestion: `Anda yakin ingin menambahkan pengguna ini sebagai teman?`,
  removeFriend: `Hapus Teman`,
  currentFriends: `Teman Saat Ini`,
  removeFriendConfirmationQuestion: `Anda yakin ingin menghapus pengguna ini sebagai teman?`,
  inviteFriends: `Undang Teman ke Lndr`,
  tryLndr: `Coba aplikasi Lndr di sini:`,
  friendInfo: `Informasi selengkapnya tentang pertemanan ini:`,
  noFriends: `Tambahkan beberapa teman untuk memulai!`,
  noMatches: `Tidak ditemukan pengguna yang cocok`,
  noBalances: `Anda tidak memiliki catatan utang`,
  addFriendButton: `Tambahkan Teman`,
  alreadyFriendsButton: `Teman`,
  friendShell: `Teman`,
  tip: `Tip:`,
  notice: `Pemberitahuan:`,
  welcome: `Selamat datang di LNDR Anda!`,
  noBalanceWarning: `Kami tidak dapat memuat saldo Anda saat ini. Silakan coba lagi nanti.`,
  totalBalance: `Total Saldo:`,
  totalBalances: `Total Mitra Pengimbang:`,
  newTransaction: `Transaksi Baru`,
  needsReview: `Menunggu Persetujuan`,
  owesMe: `Seseorang berutang pada saya`,
  iOwe: `Saya berutang pada seseorang`,
  newPassword: `Kata Sandi Baru (minimal 8 karakter)`,
  confirmPassword: `Konfirmasi Kata Sandi`,
  newPin: `4 digit PIN baru`,
  enterNewPin: `ATUR 4 DIGIT PIN BARU`,
  confirmPin: `KONFIRMASI PIN ANDA`,
  newAccount: `Buat akun baru`,
  loginAccount: `Buka akun Anda`,
  recoverExistingAccount: `Pulihkan akun yang sudah ada`,
  recoverMnemonic: `Frasa Pemulih Akun (12 kata yang ditampilkan \nsaat Anda membuat akun)`,
  recoverMnemonicLengthError: `Frasa pemulih akun harus tepat 12 kata.`,
  successTitle: `Berhasil`,
  errorTitle: `Terjadi kesalahan`,
  showMnemonic: `Tampilkan 12 kata frasa pemulih akun`,
  mnemonicExhortation: `Frasa 12 kata ini dibutuhkan untuk memulihkan akun Anda. Simpan di tempat yang aman dan rahasia.`,
  addressExhortation: `Anda dapat mengirim ETH atau didukung ERC-20 token untuk alamat dompet Anda.`,
  removeAccountTitle: `Anda yakin ingin menghapus akun Anda dari perangkat ini?`,
  removeAccountExhortation: `Pastikan Anda memiliki akses ke frasa pemulih akun untuk memulihkan akun Anda nanti karena penghapusan informasi akun Anda dari perangkat ini bersifat permanen.`,
  myAccount: `Akun Saya`,
  setNickname: `Atur nama panggilan agar teman-teman dapat mencari Anda`,
  setEmail: `Atur email untuk menerima informasi tentang update Lndr`,
  nickname: `Nama panggilan (huruf kecil & angka)`,
  email: `Alamat Email`,
  inviteLink: `Invite Link`,
  splitExpense: `Split an expense with me on the LNDR app`,
  sendInvite: `Send via email or text`,
  unknownTransaction: `Unknown Transaction`,
  yourFriend: `your friend`,
  lndrVerified: {
    ok: `baik`,
    title: `Ditetapkan lebih tinggi batas pemukiman dan penarikan kripto jumlah dengan melengkapi Tahu persyaratan Nasabah.`,
    statusTitle: `Status verifikasi Anda adalah:`,
    tryAgain: `Kami tidak dapat memverifikasi identitas Anda. Silahkan kirimkan kembali informasi Anda dan memastikan bahwa foto Anda terbaca.`,
    formMessage: `Silahkan mengisi semua bidang berikut`,
    button: `Verifikasi Identitas Anda`,
    prefix: `Baca `,
    linkTitle: `Kebijakan Privasi `,
    postfix: `kami untuk bagaimana data pribadi Anda akan dikelola.`,
    upload: `Unggah `,
    governmentId: `ID yang dikeluarkan pemerintah`,
    selfie: `Upload selfie dengan ID yang dikeluarkan pemerintah Anda`,
    proofOfAddress: `Bukti alamat`,
    ifNotId: `(Jika tidak ID)`,
    agree: `Saya telah membaca dan setuju dengan `,
    agreeLink: `Kebijakan Privasi`,
    success: `KYC telah disampaikan.`,
    idInfoHeader: `Contoh ID meliputi:`,
    passport: `Paspor`,
    drivers: `Surat izin Mengemudi`,
    national: `Kartu identitas nasional`,
    addressInfoHeader: `Contoh bukti alamat:`,
    bank: `Pernyataan Bank`,
    utility: `Tagihan utilitas`,
    other: `Dokumen lainnya`,
    chooseGovernmentPhoto: `Pilih Foto Pemerintah ID`,
    chooseSelfiePhoto: `Pilih Selfie Foto`,
    chooseAddressPhoto: `Pilih Bukti Alamat Photo`,
    emailRequired: `Anda memerlukan email untuk memverifikasi identitas Anda, silakan klik "Ubah Email"`,
    approved: `DISETUJUI`,
    rejected: `DITOLAK`,
    pending: `Tertunda`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Nama depan`,
      lastName: `Nama keluarga`,
      street: `Alamat jalan`,
      city: `Kota`,
      state: `Negara / Provinsi`,
      postalCode: `Kode Pos`,
      country: `Pilih negara`,
      phone: `Nomor telepon`,
      dob: `Tanggal Lahir (YYYY-MM-DD)`,
    },
    formErrors: {
      firstName: `Nama pertama diperlukan`,
      lastName: `Nama terakhir diperlukan`,
      street: `Jalan diperlukan`,
      city: `Kota diperlukan`,
      state: `Negara / Provinsi diperlukan`,
      postalCode: `Kode pos diperlukan`,
      country: `Negara diperlukan`,
      phone: `Nomor telepon diperlukan`,
      dob: `Tanggal Lahir diperlukan`,
      general: `Pastikan Anda telah mengisi semua field dan terpasang foto-foto yang benar`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Nama panggilan harus terdiri dari minimal 3 karakter.`,
      compositionViolation: `Nama panggilan hanya boleh berupa angka dan huruf kecil.`,
      duplicationViolation: `Nama panggilan sudah digunakan.`,
    },
    email: {
      compositionViolation: `Format email salah.`,
      duplicationViolation: `Email sudah digunakan.`,
    },
    pin: {
      lengthViolation: `PIN harus terdiri dari minimal 4 karakter.`,
      matchViolation: `PIN harus sesuai.`,
      failedHashComparison: `PIN tidak valid. Silakan coba lagi.`,
      updateSuccess: `PIN Anda telah diperbarui.`,
      updateError: `Terjadi kesalahan saat memperbarui PIN Anda.`,
    },
    mnemonic: {
      lengthViolation: `Frasa pemulih akun harus terdiri dari minimal 12 kata.`,
      unableToValidate: `Frasa pemulih akun yang dimasukkan tidak valid. Silakan coba lagi.`,
    },
    setNickname: {
      success: `Nama panggilan Anda telah disimpan.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Email Anda telah disimpan.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `Anda harus memasukkan PIN Anda setelah`,
      bottom: `menit tidak aktif.`,
      update: `Perbarui`,
      error: `Kami tidak dapat memperbarui pengaturan akun Anda.`,
      success: `Waktu Kunci Layar Diperbarui`,
    },
    addFriend: {
      success: X => `Permintaan pertemanan dikirimkan ke @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Dihapus dari daftar teman: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `Tidak dapat memuat saldo ETH`,
      manage: `Kelola ETH`,
    },
    sendEth: {
      error: {
        insufficient: `Anda tidak memiliki cukup ETH untuk transaksi ini.`,
        generic: `Terjadi kesalahan saat transfer. Silakan coba lagi nanti.`,
        address: `Masukkan alamat yang valid`,
        amount: `Masukkan jumlah yang lebih besar dari 0`,
        limitExceeded: (A, M) => `Anda hanya dapat mengirimkan ${CUR(A)} ${TL(A, M)} per minggu. Silakan pilih jumlah yang lebih kecil.`
      },
      amount: `Jumlah yang Dikirim`,
      address: `Alamat Tujuan`,
      transfer: `Transfer ETH`,
      transferAll: `Transfer Semuanya`,
      balance: Y => `Saldo ETH Anda saat ini adalah ${typeof Y === 'string' ? Y.slice(0,8) :''}.`,
      ethAddress: `Alamat Ethereum`,
      transferLowercase: `Transfer ETH`,
      note: (A, M) => `Perhatian: Anda hanya dapat mentransfer ${CUR(A)} ${TL(A, M)} per minggu dari Lndr.`,
      warning: (Z, A, M) => `Anda memiliki ${CUR(A)}${Z} tersisa dari batas ${CUR(A)} ${TL(A, M)} Anda.`,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `Anda tidak memiliki cukup ${name} untuk transaksi ini.`,
        generic: `Terjadi kesalahan saat transfer. Silakan coba lagi nanti.`,
      },
      transfer: (name) => `Transfer ${name}`,
      address: `Alamat Tujuan`,
      balance: (name, balance) => `Saldo ${name} Anda saat ini adalah ${typeof balance === 'string' ? balance.slice(0,8) :''}.`,
      tokenAddress: (name) => `Alamat ${name}`,
      txCost: (ethCost, currencyCost) => `Biaya transaksi: ${ethCost} ETH (${currencyCost}).`,
    },
    panelHeaders: [
      `Dompet Alamat`,
      `Saldo kripto`,
      `Hapus Akun`,
      `Riwayat Transaksi ETH`,
      `Aktifkan PayPal`,
      `Ubah Mata Uang Primer`,
      `Aktifkan Fitur Tambahan`,
      `Ubah Email`,
      `Ubah PIN`,
      `Ubah Waktu Kunci Layar`,
      `Frasa Pemulih Akun`,
      `Pemberitahuan`,
    ],
    viewEtherscan: `Lihat Riwayat Etherscan`,
    profilePic: {
      change: `Ubah Foto Profil`,
      setError: `Terjadi kesalahan saat mengunggah gambar Anda. Silakan coba lagi nanti.`,
      getError: `Terjadi kesalahan saat memuat foto profil Anda.`,
      setSuccess: `Foto profil diperbarui`,
    },
    logoutSuccess: `Anda berhasil keluar!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: name => `Saldo ${name} Anda saat ini adalah`,

  welcomeView: {
    by: `DIBUAT OLEH`,
    makeItEasy: `Lndr membantu Anda melacak utang sederhana.`,
    weHelpFriends: `Kami membantu teman-teman hidup, bekerja, dan bermain bersama.`,
    len: `Pemin`,
    dot: `.`,
    der: `jam`,
    shareDinner: `Makan Malam Bersama`,
    fillTank: `Mengisi Bensin`,
    travelTogether: `Bepergian Bersama`,
    runEthereum: `Kami beroperasi menggunakan ETH!`,
    firstLendingApp: `Aplikasi pinjaman seluler pertama yang dijamin di rantai blok.`,
    greatConcert: `Menyaksikan Konser Besar`,
    youPlayWithFriends: `Anda bermain dengan teman-teman.\n Kami akan mengatur tagihannya…`,
    start: `Mulai`,
  },

  walkthrough: {
    skip: `melewatkan`,
    continue: `terus`,
    step1: {
      easyToUse: `Lndr adalah cara termudah untuk membagi tagihan, biaya saham dan melunasi hutang sederhana dengan teman-teman dan keluarga, semua dilakukan dengan aman pada blockchain tersebut.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Untuk memulai Lndr, Anda akan perlu menambahkan teman.`,
      friendsScreen: `Kunjungi layar Friends untuk mencari, menambah, atau mengundang teman-teman dan keluarga Anda untuk terhubung pada Lndr.`,
    },
    step3: {
      title: `Merekam Transaksi`,
      easy: `Membelah tagihan atau menambahkan utang dengan teman mudah di Lndr!`,
      selectFriend: `Pilih teman, mata uang dan jumlahnya.`,
      addMemo: `Tambahkan beberapa catatan dalam kotak memo dan klik Submit.`,
    },
    step4: {
      title: `Lunasi`,
      ready: `Siap untuk lunasi?`,
      payPal: `Ketika saatnya untuk menyelesaikan dengan Lndr, \n Anda dapat memilih PayPal:`,
      ether: `- cryptocurrencies seperti Eter:`,
      cash: `- atau hanya merekam pembayaran tunai:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `Multi-Mata Uang`,
      multiCurrency: `Lndr dapat melacak transaksi Anda, bahkan jika mereka terjadi dalam mata uang yang berbeda.`,
      exchangeRate: `Ketika Anda memutuskan untuk Settle Up dengan teman Anda, semua transaksi akan dikonversi ke dalam mata uang utama Anda menggunakan paling tukar up-to-date tersedia.`,
      start: `Mulai menggunakan Lndr!`,
    }
  },

  debtManagement: {
    shell: `Transaksi Baru`,
    add: `Tambahkan Utang`,
    selectFriend: `Pilih`,
    lend: `Pinjaman Baru`,
    borrow: `Utang Baru`,
    owesMe: `Berutang saya`,
    iOwe: `Saya berhutang`,
    iLent: `Teman berutang pada saya`,
    iBorrowed: `Saya berutang pada teman`,
    settleUpLower: `Lunasi`,
    amountToSettle: `Jumlah yang Dilunasi`,
    total: `Total`,
    record: `catatan`,
    records: `catatan`,
    chooseCurrency: `Pilih mata uang`,

    createError: {
      amountTooLow: `Jumlah harus lebih besar dari $0.`,
      amountTooHigh: `Jumlah harus kurang dari $1,000,000,000.`,
      selfAsFriend: `Anda tidak dapat berutang pada diri sendiri. Pilih teman lainnya.`,
      pending: `Selesaikan transaksi tertunda Anda dengan pengguna ini sebelum melakukan transaksi lain.`,
      insufficientEth: E => `Anda membutuhkan minimal ${E} ETH untuk melunasi. Buka Pengaturan untuk melihat saldo Anda.`,
    },
    fields: {
      currency: `Mata uang`,
      amount: `Jumlah`,
      settlementAmount: `Jumlah Pelunasan`,
      selectFriend: `Teman`,
      memo: `Memo`,
      direction: `Pilih Pernyataan yang Benar`,
    },
    memo: {
      example: `Ketikkan memo di sini`,
    },
    direction: {
      lend: X => `${X} berutang pada saya.`,
      borrow: X => `Saya berutang pada ${X}.`,
      initiatedLend: X => `${X} mengatakan dia berutang.`,
      initiatedBorrow: X => `${X} mengatakan Anda berutang.`,
      pendingLend: X => `@${X} berutang pada Anda.`,
      pendingBorrow: X => `Anda berutang pada @${X}.`,
      pendingLendSettlement: S => `@${S.debtorNickname} meminta pelunasan dengan ${S.settlementCurrency}.`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} ingin melunasi Anda dengan ${S.settlementCurrency}.`,
      pendingLendSettlementMe: S => `Anda diminta untuk melunasi @${S.debtorNickname} dengan ${S.settlementCurrency}.`,
      pendingBorrowSettlementMe: S => `Anda meminta agar @${S.creditorNickname} melunasi dengan ${S.settlementCurrency}.`,
    },
    pending: {
      success: F => `Utang tertunda dikirimkan ke @${F.nickname}.`,
      error: generalCommunicationError
    },
    pendingParens: `(tertunda)`,
    confirmation: {
      transaction: CP => `Transaksi dengan ${CP} berhasil dikonfirmasi.`,
      settlement: CP => `Pelunasan dengan ${CP} berhasil dikonfirmasi.`,
      error: `Tidak dapat mengonfirmasi transaksi saat ini. Silakan coba lagi nanti.`,
    },
    rejection: {
      success: `Transaksi ditolak.`,
      error: `Tidak dapat menolak transaksi saat ini. Silakan coba lagi nanti.`,
    },
    balances: {
      error: `Tidak dapat memuat saldo saat ini. Silakan coba lagi nanti.`,
    },
    for: M => `untuk ${M}`,
    settleUp: `Lunasi`,
    settleTotal: `Jumlah Pelunasan`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Melunasi': 'Permintaan pelunasan'} ${A}.`,
    recordSettleUpMemo: `melunasi`,
    balanceByCurrency: `Rincian`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `Pelunasan Anda dengan ${X} gagal karena dana tidak mencukupi.`,
        generic: X => `Terjadi kesalahan saat memproses pelunasan Anda dengan ${X}.`,
      }
    },
    eth: `Lunasi dengan ETH`,
    erc20: name => `Settle with ${name}`,
    paypal: `Lunasi dengan PayPal`,
    nonPayment: `Catat Pelunasan`,
    select: `Pilih Settlement Jenis`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Beranda`,
    friends: `Teman`,
    activity: `Aktivitas`,
  },

  notifications: {
    toggleNotifications: `Notifikasi Beralih`,
    enable: `Aktifkan`,
    disable: `Matikan`,
  },

  pendingTransactionsLanguage: {
    shell: `Transaksi Tertunda`,
    title: `Tertunda`,
    memo: `Memo:`,
    for: `Untuk`,
    none: `Anda tidak memiliki transaksi tertunda.`,
    confirmationQuestion: `Anda yakin ingin mengonfirmasi transaksi ini?`,
    pendingAnnouncement: `Transaksi ini menunggu konfirmasi dari pihak lain.`,
    bilateral: `Menunggu transfer selesai`,
    confirm: `Konfirmasi`,
    reject: `Tolak Transaksi`,
    rejectRequest: `Tolak`,
    cancel: `Batalkan Transaksi`,
    direction: {
      lend: (X, Z) => `@${X} berutang ${Z} pada Anda.`,
      borrow: (X, Z) => `Anda berutang ${Z} pada @${X}.`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Pelunasan Tertunda`,
    title: `Tertunda`,
    none: `Anda tidak memiliki pelunasan tertunda.`,
    confirm: `Konfirmasi`,
    reject: `Tolak Pelunasan`,
    cancel: `Batalkan Pelunasan`,
  },

  recentTransactionsLanguage: {
    title: `Selesai`,
    none: `Anda tidak memiliki transaksi selesai.`,
    direction: {
      lend: (X, Z) => `@${X} berutang ${Z} pada Anda.`,
      borrow: (X, Z) => `Anda berutang ${Z} pada @${X}.`
    },
    balance: `Saldo`,
    consolidatedBalance: `Saldo`,
    friends: FS => `(dari ${FS} ${FS === 1 ? 'teman' :'teman'})`,
  },

  tabs: {
    home: `Beranda `,
    friends: `Teman`,
    activity: `Aktivitas`,
  },

  confirmation: {
    shell: `Konfirmasi`,
    done: `Selesai`,
    create: {
      start: `Kami telah mengirimkan catatan ke `,
      end: ` untuk konfirmasi.`,
    },
    confirm: {
      start: `Anda telah mengonfirmasi catatan ini dari `,
      end: `.`,
    },
    reject: {
      start: `Kami memberi tahu `,
      end: ` tahu bahwa Anda menolak catatan ini.`,
    },
    confirmFriend: {
      start: `Anda sekarang berteman dengan `,
      end: `!`,
    },
    rejectFriend: {
      start: `Anda menolak permintaan pertemanan dari `,
      end: `.`,
    },
    rejectOutboundFriendRequest: {
      start: `Anda telah membatalkan permintaan teman untuk `,
      end: `.`,
    },
    ethSent: {
      start: `Anda berhasil mengirimkan `,
      end: ` ETH, dan hash transaksi Anda adalah `,
    },
    erc20Sent: {
      start: `Anda berhasil mengirimkan `,
      end: `, dan hash transaksi Anda adalah `,
    },
    requestPayPalPayee: {
      start: `Kami telah membiarkan `,
      end: ` tahu bahwa Anda ingin menyelesaikan dengan PayPal.`,
    },
    requestPayPalPayment: {
      start: `Kami telah membiarkan `,
      end: ` tahu bahwa Anda ingin dibayar dengan PayPal.`,
    },
    settledWithPayPal: {
      start: `Kami telah membiarkan `,
      end: ` tahu bahwa Anda telah diselesaikan dengan PayPal.`,
    },
    kycSuccess: {
      start: `Terima kasih! Akun Anda sedang diverifikasi.

      `,
      end: `Anda akan diberitahu ketika fitur tambahan Anda akan dibuka.`
    },
    status: `Anda dapat melihat status transaksi ini di `,
    activity: `tab aktivitas.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Permintaan Pertemanan`,
    message: `Permintaan Pertemanan`,
    request: F => `@${F} ingin berteman dengan Anda!`,
    outbound: F => `Anda mengirim permintaan teman untuk @${F}`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `Dengan mengklik di bawah Anda mengkonfirmasi bahwa Anda telah membaca dan setuju dengan kebijakan privasi Blockmason ini. Blockmason dapat menggunakan alamat email Anda untuk mengirim pembaruan tentang Blockmason dan LNDR. Berikut ini adalah link ke kebijakan privasi:`,
  },

  payPalLanguage: {
    connectPayPal: `Terhubung PayPal`,
    connectSuccess: `PayPal diaktifkan berhasil.`,
    disconnectPayPal: `Putus PayPal`,
    disconnected: `PayPal terputus.`,
    requestPayPalPayment: `Permintaan Pembayaran PayPal`,
    sendWithPayPal: `Kirim Dengan PayPal`,
    enablePayPal: `Aktifkan PayPal`,
    requestPayPalPayee: `Meminta PayPal`,
    enablePayPalForFriend: F => `Mengaktifkan PayPal memungkinkan @${F} membayar you.`,
    friendNotEnabled: F => `@${F} belum diaktifkan PayPal pembayaran.`,
    friendRequestedConnect: F => `@${F} ingin membayar Anda melalui PayPal`,
    requestFriendConnect: F => `Anda bertanya @${F} untuk mengaktifkan PayPal`,
    feesNotification: `Tidak termasuk biaya PayPal`,
    feesInformationHeader: `PayPal Informasi Biaya`,
    feesInformation: `1. Account PayPal Anda harus terikat ke rekening bank.
    
2. Membayar dalam mata uang yang berbeda dari mata uang bank Anda akan dikenakan biaya $ 0,35.

3. Biaya transfer International:
    USA ke Kanada / Eropa: $ 2,99
    USA dengan tempat lain: $ 4.99

4. Biaya ini tidak komprehensif. Untuk informasi terbaru silakan kunjungi:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afganistan`, code: 'AFG' },
    { name: `Albania`, code: 'ALB' },
    { name: `Aljazair`, code: 'DZA' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angola`, code: 'AGO' },
    { name: `anguilla`, code: 'AIA' },
    { name: `Antartika`, code: 'ATA' },
    { name: `Antigua dan Barbuda`, code: 'ATG' },
    { name: `Argentina`, code: 'ARG' },
    { name: `Armenia`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Australia`, code: 'AUS' },
    { name: `Austria`, code: 'AUT' },
    { name: `Azerbaijan`, code: 'AZE' },
    { name: `Bahama`, code: 'BHS' },
    { name: `Bahrain`, code: 'BHR' },
    { name: `Bangladesh`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Belarus`, code: 'BLR' },
    { name: `Belgium`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `Bermuda`, code: 'BMU' },
    { name: `Bhutan`, code: 'BTN' },
    { name: `Bolivia`, code: 'BOL' },
    { name: `Bosnia dan Herzegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brazil`, code: 'BRA' },
    { name: `brunei`, code: 'BRN' },
    { name: `Bulgaria`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Kamboja`, code: 'KHM' },
    { name: `Kamerun`, code: 'CMR' },
    { name: `Kanada`, code: 'CAN' },
    { name: `Pulau cayman`, code: 'CYM' },
    { name: `Republik Afrika Tengah`, code: 'CAF' },
    { name: `Chad`, code: 'TCD' },
    { name: `Chili`, code: 'CHL' },
    { name: `Cina`, code: 'CHN' },
    { name: `Kolumbia`, code: 'COL' },
    { name: `Komoro`, code: 'COM' },
    { name: `Kongo`, code: 'COG' },
    { name: `Kongo`, code: 'COD' },
    { name: `Kepulauan cook`, code: 'COK' },
    { name: `Kosta Rika`, code: 'CRI' },
    { name: `Côte d'Ivoire`, code: 'CIV' },
    { name: `Kroasia`, code: 'HRV' },
    { name: `Kuba`, code: 'CUB' },
    { name: `Curacao`, code: 'CUW' },
    { name: `Siprus`, code: 'CYP' },
    { name: `Czechia`, code: 'CZE' },
    { name: `Denmark`, code: 'DNK' },
    { name: `Djibouti`, code: 'DJI' },
    { name: `Dominica`, code: 'DMA' },
    { name: `Republik Dominika`, code: 'DOM' },
    { name: `Ekuador`, code: 'ECU' },
    { name: `Mesir`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Guinea ekuator`, code: 'GNQ' },
    { name: `Eritrea`, code: 'ERI' },
    { name: `Estonia`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Etiopia`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Finlandia`, code: 'FIN' },
    { name: `Perancis`, code: 'FRA' },
    { name: `Guyana Perancis`, code: 'GUF' },
    { name: `Polinesia Perancis`, code: 'PYF' },
    { name: `Gabon`, code: 'GAB' },
    { name: `Gambia`, code: 'GMB' },
    { name: `Georgia`, code: 'GEO' },
    { name: `Jerman`, code: 'DEU' },
    { name: `Ghana`, code: 'GHA' },
    { name: `Gibraltar`, code: 'GIB' },
    { name: `Yunani`, code: 'GRC' },
    { name: `Tanah penggembalaan`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadeloupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guinea`, code: 'GIN' },
    { name: `Guinea-Bissau`, code: 'GNB' },
    { name: `guyana`, code: 'GUY' },
    { name: `Haiti`, code: 'HTI' },
    { name: `Vatikan`, code: 'VAT' },
    { name: `honduras`, code: 'HND' },
    { name: `Hongkong`, code: 'HKG' },
    { name: `Hongaria`, code: 'HUN' },
    { name: `Islandia`, code: 'ISL' },
    { name: `India`, code: 'IND' },
    { name: `Indonesia`, code: 'IDN' },
    { name: `Iran`, code: 'IRN' },
    { name: `Irak`, code: 'IRQ' },
    { name: `Irlandia`, code: 'IRL' },
    { name: `Pulau manusia`, code: 'IMN' },
    { name: `Israel`, code: 'ISR' },
    { name: `Italia`, code: 'ITA' },
    { name: `Jamaika`, code: 'JAM' },
    { name: `Jepang`, code: 'JPN' },
    { name: `Jordan`, code: 'JOR' },
    { name: `Kazakhstan`, code: 'KAZ' },
    { name: `Kenya`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Korea (DPRK)`, code: 'PRK' },
    { name: `Korea (ROK)`, code: 'KOR' },
    { name: `Kuwait`, code: 'KWT' },
    { name: `Kyrgyzstan`, code: 'KGZ' },
    { name: `Laos`, code: 'LAO' },
    { name: `Latvia`, code: 'LVA' },
    { name: `Libanon`, code: 'LBN' },
    { name: `Lesotho`, code: 'LSO' },
    { name: `Liberia`, code: 'LBR' },
    { name: `Libya`, code: 'LBY' },
    { name: `Liechtenstein`, code: 'LIE' },
    { name: `Lithuania`, code: 'LTU' },
    { name: `Luksemburg`, code: 'LUX' },
    { name: `Makao`, code: 'MAC' },
    { name: `Makedonia`, code: 'MKD' },
    { name: `Madagaskar`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Malaysia`, code: 'MYS' },
    { name: `Maladewa`, code: 'MDV' },
    { name: `mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `Pulau Marshall`, code: 'MHL' },
    { name: `Martinique`, code: 'MTQ' },
    { name: `Mauritania`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `Mexico`, code: 'MEX' },
    { name: `Mikronesia`, code: 'FSM' },
    { name: `Moldova`, code: 'MDA' },
    { name: `Monako`, code: 'MCO' },
    { name: `Mongolia`, code: 'MNG' },
    { name: `montenegro`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Maroko`, code: 'MAR' },
    { name: `Mozambik`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namibia`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepal`, code: 'NPL' },
    { name: `Belanda`, code: 'NLD' },
    { name: `Kaledonia Baru`, code: 'NCL' },
    { name: `Selandia Baru`, code: 'NZL' },
    { name: `Nikaragua`, code: 'NIC' },
    { name: `Niger`, code: 'NER' },
    { name: `Nigeria`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Kepulauan Mariana Utara`, code: 'MNP' },
    { name: `Norway`, code: 'NOR' },
    { name: `Oman`, code: 'OMN' },
    { name: `Pakistan`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palestina`, code: 'PSE' },
    { name: `Panama`, code: 'PAN' },
    { name: `Papua Nugini`, code: 'PNG' },
    { name: `Paraguai`, code: 'PRY' },
    { name: `Peru`, code: 'PER' },
    { name: `Pilipina`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Polandia`, code: 'POL' },
    { name: `Portugal`, code: 'PRT' },
    { name: `Puerto Rico`, code: 'PRI' },
    { name: `Qatar`, code: 'QAT' },
    { name: `Reuni`, code: 'REU' },
    { name: `Rumania`, code: 'ROU' },
    { name: `Federasi Rusia`, code: 'RUS' },
    { name: `Rwanda`, code: 'RWA' },
    { name: `Saint Barthélemy`, code: 'BLM' },
    { name: `Saint Helena, Ascension dan Tristan da Cunha`, code: 'SHN' },
    { name: `Saint Kitts dan Nevis`, code: 'KNA' },
    { name: `Saint Lucia`, code: 'LCA' },
    { name: `Saint Martin`, code: 'MAF' },
    { name: `Saint Pierre dan Miquelon`, code: 'SPM' },
    { name: `Saint Vincent dan Grenadines`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `Sao Tome dan Principe`, code: 'STP' },
    { name: `Arab Saudi`, code: 'SAU' },
    { name: `senegal`, code: 'SEN' },
    { name: `Serbia`, code: 'SRB' },
    { name: `Seychelles`, code: 'SYC' },
    { name: `Sierra Leone`, code: 'SLE' },
    { name: `Singapura`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Slowakia`, code: 'SVK' },
    { name: `Slovenia`, code: 'SVN' },
    { name: `Pulau Solomon`, code: 'SLB' },
    { name: `Somalia`, code: 'SOM' },
    { name: `Afrika Selatan`, code: 'ZAF' },
    { name: `Sudan Selatan`, code: 'SSD' },
    { name: `Spanyol`, code: 'ESP' },
    { name: `Srilanka`, code: 'LKA' },
    { name: `Sudan`, code: 'SDN' },
    { name: `Suriname`, code: 'SUR' },
    { name: `Swedia`, code: 'SWE' },
    { name: `Swiss`, code: 'CHE' },
    { name: `Republik Arab Syria`, code: 'SYR' },
    { name: `Taiwan`, code: 'TWN' },
    { name: `Tajikistan`, code: 'TJK' },
    { name: `Tanzania`, code: 'TZA' },
    { name: `Thailand`, code: 'THA' },
    { name: `Timor-Leste`, code: 'TLS' },
    { name: `Untuk pergi`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `Tonga`, code: 'TON' },
    { name: `Trinidad dan Tobago`, code: 'TTO' },
    { name: `Tunisia`, code: 'TUN' },
    { name: `Turki`, code: 'TUR' },
    { name: `Turkmenistan`, code: 'TKM' },
    { name: `Kepulauan Turks dan Caicos`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `ukraina`, code: 'UKR' },
    { name: `Uni Emirat Arab`, code: 'ARE' },
    { name: `united Kingdom`, code: 'GBR' },
    { name: `Amerika Serikat`, code: 'USA' },
    { name: `Kepulauan Terluar Kecil Amerika Serikat`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Uzbekistan`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Viet Nam`, code: 'VNM' },
    { name: `Kepulauan Virgin Inggris`, code: 'VGB' },
    { name: `US Virgin Islands`, code: 'VIR' },
    { name: `Sahara Barat`, code: 'ESH' },
    { name: `Yaman`, code: 'YEM' },
    { name: `Zambia`, code: 'ZMB' },
    { name: `Zimbabwe`, code: 'ZWE' },
  ]
}
