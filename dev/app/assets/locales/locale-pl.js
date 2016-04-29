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
balances: "SALDA",
contacts: "KONTAKTY",
finder: "FINDER",
exchange: "WYMIANA",
receive: "OTRZYMAJ",
send: "WYŚLIJ",
balances: "Salda",
transactions: "Transakcje",
date: "Data",
all: "Wszystkie",
sent: "Wysłane",
recd: "Otrzymane",
to: "Do",
from: "Od",
amount: "Ilość",
asset: "Waluta",
name: "Nazwa",
account: "Konto",
memo: "Wiadomość",
donateToDevs: "Przekaż 2 BTS na wsparcie deweloperów BitShares Munich",
hideDonations: "Ukryj wpłaty z listy transakcji ekranu głównego",
requestSpecificAmount: "Wymagaj określonej kwoty (opcjonalne)",
sharePaymentRequest: "Udostępnij ten wniosek o płatność",
inviteFriend: "Zaproś przyjaciela / znajomego",
buyLifetimeAnnual: "Wykup roczny lub dożywotni abonament",
continue: "Kontynuuj",
buy: "Kup",
sell: "Sprzedaj",
cancel: "Anuluj",
back: "Cofnij",
none: "Żaden",
please_wait: "Procesowanie transakcji",
thank_you: "Dziękujemy",
balance: "Saldo",
publicKey: "Klucz publiczny",
privateKey: "Klucz prywatny",
yes: "Tak",
no: "Nie",
remaining_balance: "Pozostałe saldo",
excess_amount: "Nie można wysłać kwotę ponad kwotę rozliczeniowego",
backup_asset: "Zaleta backup",
reward_points : "punkty lojalnościowe"


}, settings: {
bitsharesWalletSettings: "Ustawienia Portfela BitShares",
taxableCountry: "Kraj opodatkowania",
preferredLanguage: "Preferowany język",
displayDtAs: "Pokaż daty i godziny jako",
getPricesFrom: "Uzyskaj ceny z",
additionalSettings: "Dodatkowe ustawienia",
checkUpdatesStartup: "Sprawdź aktualizacje przy starcie",
autoInstallMajorVer: "Automatycznie zainstaluj główne aktualizacje",
requirePinToSend: "Wymagaj kodu PIN dla przelewu wychodzącego",
autoCloseWalletAfterInactivity: "Automatycznie zablokuj Portfel BitShares po 3 minutach bezczynności",
searchTransactions: "Przeszukaj transakcje",
exportTransactionsTo: "Wyeksportuj transakcje do:",
alwaysDonateDevsMunich: "Zawsze przekazuj 2 BTS na wsparcie deweloperów BitShares Munich (bitshares-munich)",
allowUse_GpsToFind: "Pozwól aplikacji Finder (v2.0) na korzystanie z GPS, aby znaleźć najbliższy bankomat oraz ludzi i systemy POS oferujące Smartcoins.",
allowReportPosition : "Pozwól aplikacji Finder (v2.0) na upublicznienie twojej lokalizacji, aby inni mogli kupić od ciebie albo sprzedać tobie Smartcoins.",
pinNumber: "Kod PIN",
createEditPin: "Utwórz lub zmodyfikuj twój 6-cyfrowy kod PIN aby zabezpieczyć dostęp do twoich funduszy",
editPin: "Zmodyfikuj twój 6-cyfrowy kod PIN aby zabezpieczyć dostęp do twoich funduszy",
secureWithPin: "Zabezpiecz cały Portfel BitShares tym kodem PIN",
pinFraudNote: "Uwaga: Jeśli nastąpi trzykrotna nieudana próba wprowadzenia kodu PIN, Portfel BitShares zostanie zamknięty i nie będzie mógł być odblokowany przez kolejne 15 minut.",
backup: "Kopia zapasowa",
promprtForMonthlyBackup: "Przypominaj o comiesięcznym wykonaniu kopii zapasowej",
createEditSeed: "Utwórz lub zmodyfikuj swój Master Seed (12-wyrazowe hasło pamięciowe)",
editSeed: "Zmodyfikuj swój Master Seed (12-wyrazowe hasło pamięciowe)",
coldStorageSpending: "Fundusze zabezpieczone poprzez Cold Storage",
importPrivateKey: "Zaimportuj klucz prywatny i fundusze z nim związane poprzez kod QR w formie wydrukowanej lub ze schowka.",
qa: "Pytania i odpowiedzi",
q_sharePublicAddress: "P: Jak udostępnić komuś nazwę mojego konta w BitShares?",
a_sharePublicAddress: "A: Na ekranie głównym, dotknij kodu QR lub dotknij i przytrzymaj adres będący ciągiem znaków zaczynających się od liter BTS...",
q_accessPrivateKeys: "Q: Jak mogę uzyskać dostęp do kluczy prywatnych?",
a_accessPrivateKeys: "A: Na ekranie głównym, dotknij i przytrzymaj ikonę konta użytkownika, która znajduje się po lewej stronie nazwy konta użytkownika.",
q_switchAccount : "Q: Jak mogę przełączyć się na inne konta na ekranie głównym?",
a_switchAccount : "A: Dotknij małą czarną strzałkę, która znajduje się po prawej stronie nazwy konta użytkownika.",
q_searchTransaction: "P: W jaki sposób mogę odszukać konkretną transakcję?",
a_searchTransaction: "A: Dotknij nagłówek kolumny aby posortować według tej kolumny (rosnąco lub malejąco). W przyszłej edycji tej aplikacji zostaną dodane filtry wyszukiwania.",
about: "O nas",
bitsharesMunichDonationRequest: "BitShares Munich pragnie udostępnić technologię BitShares zarówno klientom indywidualnym jak i biznesowym na całym świecie. Jeśli chiałbyś nas wesprzeć, rozważ przesłanie dotacji na dalszy rozwój tego mobilnego portfela, co pozwoli nam nieustannie dbać o jego bezpieczeństwo, uczynić go wolnym od błędów i stale go udoskonalać. Dziękujemy!",

privacy: "Prywatność",
tcTitle: "Zasady i Warunki",
cancelAndExit: "Anuluj i wyjdź",
iAgree: "Zgadzam się",
confirmSendAmount: "Czy na pewno chcesz przesłać nn XX",
confirmSendAmountRecipient: "do yy?",
continue: "Kontynuuj",
cancel: "Anuluj",

}, dialog: {
enterPin: "Wprowadź kod PIN",
incorrectPin: "Nieprawidłowy kod PIN",
protectPinMessage: "Pamiętaj aby dbać o bezpieczeństwo swojego kodu PIN",
fraudAttemptMessage: "Próba nieautoryzowanego dostępu! (3 kolejne błędne kody PIN)",
},

exchange: {
    price: "Kurs wymiany",
    trade_currency: "Targi kantor",
    trade : "HANDEL",
    }



  }
};