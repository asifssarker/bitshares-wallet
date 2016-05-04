module.exports = {

languages: {

	sq: 'Albanian; sq (Gjuha Shqipe)',
	ar: 'Arabic;  (العربية)',
	bs: 'Bosnian;  (Bosanski Jezik)',
	bg: 'Bulgarian; bg (български език)',
	zh: 'Chinese, Simplified/Mandarin; zh (中文)',
	hr: 'Croatian; hr (Hrvatski Jezik)',
	en: 'English; en (English)',
	fi: 'Finnish; fi (Suomi)',
	fr: 'French; fr (Français)',
	de: 'German; de (Deutsch)',
	el: 'Greek; el (ελληνικά)',
	hi: 'Hindi; hi (हिन्दी, हिंदी) ',
	hu: 'Hungarian; hu (Magyar)',
	it: 'Italian; it (Italiano)',
	ja: 'Japanese; ja (日本語)',
	pl: 'Polish; pl (Język Polski)',
	ro: 'Romanian; ro (Română)',
	ru: 'Russian; ru (Русский)',
	sr: 'Serbian; sr (Cрпски Jезик (Srpski))',
	sk: 'Slovak; sk (Slovenčina)',
	es: 'Spanish; es (Español)',
	tr: 'Turkish; tr (Türkçe)'
 },
 

  wallet: {

    switch_language: 'Switch Language: ',
    // additional
    existing_password: "Existing PIN",
    verify: "Verify",
    enter_password: "Enter PIN",
    reset: "Reset",
    //change_password: "Change PIN",
    accept: "Accept",
    transaction_sent: "sent",
    transaction_to: "To",
    transaction_op: "All",
    transaction_info: "Info",
    transaction_date: "Date",
    transaction_fee: "Fee",
    transaction_from: "From",
    transaction_amount: "Amount",
    was_reg_account: "registered by",
    fraudAttemptMessage: 'Fraud Attempt! (on 3 consecutive incorrect PINs)',     //duplicate
    sync_block: "Block #",
    transfer_available: 'is available',
    //settings_hideDonations : 'Hide Donations from homescreen Transactions list',  // replaced with wallet.home.hideDonations
    account_name : 'Account name',
    account_name_is_taken: 'Account name is already taken',
    account_not_found: 'Account_not_found',
    enter_valid_account_name : "Please enter valid account name",
    account_premium_name_warn: "This is a premium name. Premium names are more expensive and can't be registered for free by faucet. Try to select another name containing at least one dash, number or no vowels.",
    done: 'Done',
    no_funds: 'No funds',
    account_not_yours: 'Account not yours',
    donation_fee_text: ' (network + 2 BTS donation)',
    account_errors_unknown : 'Unknown account',
    confirm: 'Confirm',
    success_exclaim: 'Success!',
    account_errors_invalid : 'Invalid account',
    account_more : 'More',
    brainkey_backup : 'Backup brainkey',
    wallet_brainkey: 'Wallet brainkey',
    close: 'Close',
    verified: 'verified',
    wallet_created: "Wallet Created",
    import_bts1: "Import from Brainkey",
	import_backup: "Import Backup",
	wallet_name :   "Wallet Name",
	contactDeleteConfirm: 'Are you SURE you want to permanently DELETE this Contact?',
	contactFriendlyName: 'Friendly name',
	contactNotes: 'Notes',
	save: 'Save',
	add: 'Add',
	ok: 'Ok',
	to_slash_from: 'To/From',
	unlock: 'Unlock',
	tran_confirm: 'Confirm transaction',
	email: 'E-mail',
	contact_email_hint : 'To display a photo for this Contact, enter its Gravatar e-mail here',
	contact_does_exist : 'Contact with this name already exists',
	unlock_wallet : 'Unlock Wallet',
	six_digits_pin : '6-digits PIN',
	six_digits_pin_confirm : '6-digits PIN confirm',	
	clipboard: 'Clipboard',
	out_of_balance: 'Insufficient balance',
	create_wallet: "Create Wallet",
	brainkey_imcompatible_ln1: "This BrainKey is not compatible with BTS 1.0",
	brainkey_imcompatible_ln2: "(Use a backup file instead)",
    brainkey: "Brainkey",
	custom_brainkey: "Custom brainkey",
	choose_backup: "Choose backup",
    invalid_format: "Invalid Format",
	to_accept_agreement:  "To accept the agreement",
	agreement: "Agreement",
	acnt_createRegisterOrImport: "ACCOUNT CREATE/REGISTER OR IMPORT",
	create: "Create",
	existing_account: "Existing account",
    create_backup: "Create Backup", // create_backup, reset(-), download, createBackupPrompt - are moved from .backup section
    download: "Download",
    createBackupPrompt: 'Please make backup of your wallet to continue',
	requirePinToOpen: 'Require PIN to open wallet',

home: {
balances: "SALDOT",
contacts: "YHTEYSTIEDOT",
finder: "FINDER",
exchange: "VAIHTO",
receive: "SAAT",
send: "LÄHETÄ",
balances: "Talletukset",
transactions: "Liiketoimet",
date: "Päivämäärä",
all: "Kaikki",
sent: "Lähetetyt",
recd: "Tule teksti VAST.OTTO",
to: "Jotta",
from: "Alkaen",
amount: "Määrä",
asset: "Etu",
name: "Nimi",
account: "Tili",
memo: "Muistio",
donateToDevs: "Lahjoita 2 BTS Tuki Kehittäjien osoitteessa BitShares Munich",
hideDonations: "Piilota lahjoitukset aloitusvalikosta Liiketoimet luettelosta",
requestSpecificAmount: "Pyydätietty määrä (valinnainen)",
sharePaymentRequest: "Jaa tämä maksupyyntö",
inviteFriend: "Kutsu ystävä",
buyLifetimeAnnual: "OstaaLifetime tai Vuositilauksen",
continue: "Jatkaa",
buy: "Ostaa",
sell: "Myydä",
cancel: "Peruuttaa",
back: "Takaisin",
none: "Ei mitään",
please_wait: "Odota",
thank_you: "Kiitos",
balance: "Tasapaino",
publicKey: "Public Key",
privateKey: "Yksityinen Avain",
yes: "Kyllä",
no: "Ei",
remaining_balance: "Jäljelläoleva saldo",
excess_amount: "Ei voi lähettää summa yli laskutuksen määrä",
backup_asset: "Backup Asset",
reward_points : "palkita pistettä"


}, settings: {
bitsharesWalletSettings: "BitShares Lompakon asetukset",
taxableCountry: "Verolliset Maa",
preferredLanguage: "Mieluisin kieli",
displayDtAs: "Näyttö Päivämäärät ja Times",
getPricesFrom: "Hae hinnat",
additionalSettings: "Lisäasetukset",
checkUpdatesStartup: "Tarkista päivitykset käynnistyksen yhteydessä",
autoInstallMajorVer: "Asentaa automaattisesti merkittävä versiojulkaisuja",
requirePinToSend: "Vaadi pin lähettää varoja",
autoCloseWalletAfterInactivity: "Sulkeutuvat automaattisesti BitShares Lompakko jälkeen 3 minuutin toimettomuuden",
searchTransactions: "Etsi Liiketoimet",
exportTransactionsTo: "Suuntautuvan viennin :",
alwaysDonateDevsMunich: "Aina lahjoittaa 2 BTS Tuki Kehittäjien klo BitShares München (bitshares-munich)",
allowUse_GpsToFind: "Salli Finder (v2.0) käyttää GPS löytää lähimmän pankkiautomaatteja, Ihmiset ja kassajärjestelmät kanssa Smartcoins",
allowReportPosition : "Salli Finder (v2.0) ilmoittaa sijaintisi, jotta muut voivat ostaa tai myydä Smartcoins kanssasi",
pinNumber: "PIN-koodi",
createEditPin: "Luo tai muokkaa 6-numeroinen PIN turvata varat ja tilit",
editPin: "Muokkaa 6-numeroinen PIN turvata varat ja tilit",
secureWithPin: "Secure minun koko BitShares Lompakko tämän PIN",
pinFraudNote: "Huomautus: Jos väärä PIN-koodi syötetään 3 kertaa, niin BitShares Lompakko sulkeutuu ja ei voi avata 15 minuuttia.",
backup: "Varmuuskopio",
promprtForMonthlyBackup: "Kysy kuukausittain Backup",
createEditSeed: "Luo tai Muokkaa Master Seed (12 sana aivot lompakko)",
editSeed: "Muokkaa Master Seed (12 sana aivot lompakko)",
coldStorageSpending: "Cold Storage menot",
importPrivateKey: "Tuo yksityinen avain ja sen varojen paperi QR-koodin tai leikepöydälle.",
qa: "Q & A",
q_sharePublicAddress: "K: Miten voin jakaa BTS kuulutusjärjestelmä jonkun kanssa?",
a_sharePublicAddress: ": Aloitusnäytössä napauttamalla QR code, tai kosketa ja pidä BTS ... osoite.",
q_accessPrivateKeys: "K: Miten voin käyttää yksityisiä avaimia?",
a_accessPrivateKeys: ": Aloitusnäytössä, koskettamalla ja pitämällä käyttäjätilin Identicon joka näkyy vasemmalla puolella käyttäjätilin nimi.",
q_switchAccount : "K: Miten vaihdan eri tilille aloitusnäytössä?",
a_switchAccount : ": Valitse pieni musta nuoli, joka näkyy oikealla puolella käyttäjätilin nimi.",
q_searchTransaction: "K: Miten voin etsiä tiettyä tapahtuman?",
a_searchTransaction: ": Klikkaa sarakkeen otsikkoa järjestääksesi sarakkeen (nouseva tai laskeva). Hakukenttään lisätään pian.",
about: "Noin",
bitsharesMunichDonationRequest: "BitShares Munich tuo Smartcoin teknologiaa ja palveluja sijoittajille ja yrityksille maailmanlaajuisesti. Harkitse lahjoittamalla BitShares Lompakko hankkeen joten kehittäjät voivat varaa pitää tämän lompakon turvallinen, virheetön ja jatkuvasti parantamaan. Kiitos!",

privacy: "Yksityisyys",
tcTitle: "Käyttöehdot",
cancelAndExit: "Peruuta ja Poistu",
iAgree: "Olen samaa mieltä",
confirmSendAmount: "Oletko varma, että haluat lähettää nn XX",
confirmSendAmountRecipient: "YY?",
continue: "jatkaa",
cancel: "peruuttaa",

}, dialog: {
enterPin: "Anna PIN-",
incorrectPin: "Väärä PIN-koodi",
protectPinMessage: "Ota Suojaa PIN-koodi",
fraudAttemptMessage: "Väärinkäytöksen yrityksestä ! ( 3 peräkkäisenä virheellinen PIN )",
},

exchange: {
    price: "Vaihtokurssi",
    trade_currency: "kauppavaluutta",
    trade : "KÄYDÄ KAUPPAA",
    trade_msg: "Sinulla ei ole hyödyke, joka kauppias haluaa. Haluatko saada yksi?"
},

trade_warn_msg:{
	select_backup_asset: "Varmuuskopioida hyödyke ei ole valittu asetuksista. Valitse ensin",
	low_balance_backup_asset: "Sinulla ei ole tarpeeksi tasapaino kaupan. Valitse muut varmuuskopio hyödykkeen",
	other_backup_asset: "Vaihtokurssi ei ole käytettävissä. Valitse muut varmuuskopio hyödykkeen",
	cannot_pay: "Et voi maksaa. Sinulla on alhainen saldo"
},



  }
};