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
balances: "SALDI",
contacts: "CONTATTI",
finder: "FINDER",
exchange: "SCAMBIO",
receive: "RICEVERE",
send: "INVIA",
balances: "Bilance",
transactions: "Operazioni",
date: "data",
all: "Tutti",
sent: "Sent",
recd: "Ho ricevuto la",
to: "a",
from: "da",
amount: "Importo",
asset: "bene",
name: "nome",
account: "conto",
memo: "promemoria",
donateToDevs: "Donare 2 BTS agli sviluppatori supporto a BitShares Munich",
hideDonations: "Hide donazioni da lista Operazioni homescreen",
requestSpecificAmount: "Richiedere un importo specifico (opzionale)",
sharePaymentRequest: "Condividi questo Payment Request",
inviteFriend: "Invita un amico",
buyLifetimeAnnual: "Acquistare una vita o Abbonamento Annuale",
continue: "continuare",
buy: "acquistare",
sell: "vendere",
cancel: "annullare",
back: "Indietro",
none: "nessuno",
please_wait: "attendere prego",
thank_you: "grazie",
balance: "equilibrio",
publicKey: "chiave pubblica",
privateKey: "chiave privata",
yes: "sì",
no: "No",
remaining_balance: "Equilibrio restante",
excess_amount: "Non è possibile inviare importo superiore all'importo di fatturazione",
backup_asset: "Asset Backup",
reward_points : "Punti premio"

}, settings: {
bitsharesWalletSettings: "Impostazioni Wallet BitShares",
taxableCountry: "Imponibile Paese",
preferredLanguage: "Lingua preferita",
displayDtAs: "Mostra date e orari come",
getPricesFrom: "Ottenere prezzi da",
additionalSettings: "Impostazioni aggiuntive",
checkUpdatesStartup: "Cerca aggiornamenti all'avvio",
autoInstallMajorVer: "Installa automaticamente major release di versione",
requirePinToSend: "Richiedi PIN per inviare fondi",
autoCloseWalletAfterInactivity: "Chiudi automaticamente BitShares Portafoglio dopo 3 minuti di inattività",
searchTransactions: "Cerca transazioni",
exportTransactionsTo: "Operazioni di esportazione :",
alwaysDonateDevsMunich: "Sempre donare 2 BTS agli sviluppatori supporto all'indirizzo BitShares Monaco (bitshares-munich)",
allowUse_GpsToFind: "Lasciare che il Finder (v2.0) per utilizzare il GPS per trovare più vicino ATM, gli esseri umani e sistemi POS con Smartcoins",
allowReportPosition : "Lasciare che il Finder (v2.0) per segnalare la vostra posizione in modo che gli altri possono acquistare o vendere Smartcoins con te",
pinNumber: "Codice PIN",
createEditPin: "Creare o modificare il PIN a 6 cifre per garantire i fondi e conti",
editPin: "Modificare il PIN a 6 cifre per garantire i fondi e conti",
secureWithPin: "Fissare la mia intera BitShares Portafoglio con questo PIN",
pinFraudNote: "Nota: se un PIN errato viene inserito per 3 volte, quindi BitShares Wallet si chiuderà e non può essere sbloccato per 15 minuti.",
backup: "Di riserva",
promprtForMonthlyBackup: "Richiedi backup mensile",
createEditSeed: "Creare o modificare il tuo Master Seed (un cervello portafoglio 12 parole)",
editSeed: "Modifica il tuo Master Seed (un cervello portafoglio 12 parole)",
coldStorageSpending: "Freddo spesa bagagli",
importPrivateKey: "Importare una chiave privata e suoi fondi da un codice QR o carta Appunti.",
qa: "Q & A",
q_sharePublicAddress: "D: Come posso condividere la mia BTS indirizzo pubblico con qualcuno?",
a_sharePublicAddress: "A: Nella schermata iniziale, toccare il codice QR, oppure toccare e tenere premuto il BTS ... indirizzo.",
q_accessPrivateKeys: "D: Come faccio ad accedere le mie chiavi private?",
a_accessPrivateKeys: "A: Nella schermata iniziale, toccare e tenere premuto l'account Identicon utente che appare a sinistra del nome dell'account utente.",
q_switchAccount : "D: Come faccio a passare a un account diverso nella schermata iniziale?",
a_switchAccount : "R: Fare clic sulla piccola freccia nera che appare a destra del nome dell'account utente.",
q_searchTransaction: "D: Come faccio a cercare uno specifico affare?",
a_searchTransaction: "R: Clicca su di una colonna per ordinare in base a quella colonna (ascendente o discendente). Un campo di ricerca si aggiungerà presto.",
about: "Di",
bitsharesMunichDonationRequest: "BitShares Munich porta la tecnologia e servizi Smartcoin agli investitori e aziende in tutto il mondo. Si prega di considerare la donazione al progetto BitShares Wallet modo gli sviluppatori possono permettersi di mantenere questo portafoglio sicuro, privo di bug e migliorare costantemente. Grazie!",

privacy: "vita privata",
tcTitle: "Termini & Condizioni",
cancelAndExit: "Annulla e uscita",
iAgree: "Sono d'accordo",
confirmSendAmount: "Sei sicuro che si desidera inviare nn XX",
confirmSendAmountRecipient: "YY?",
continue: "continuare",
cancel: "annullare",

}, dialog: {
enterPin: "Inserire il PIN",
incorrectPin: "PIN errato",
protectPinMessage: "Si prega di proteggere il codice PIN",
fraudAttemptMessage: "Frode Tentativo ! ( su 3 PIN consecutivi errati )",
},
exchange: {
    price: "Tasso di cambio",
    trade_currency: "commercio di valuta",
    trade : "COMMERCIO",
 }




  }
};