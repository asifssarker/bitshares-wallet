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
balances: "SALDOS",
contacts: "CONTACTOS",
finder: "FINDER",
exchange: "CAMBIO",
receive: "RECIBIR",
send: "ENVIAR",
balances: "Saldos",
transactions: "Transacciones",
date: "Fecha",
all: "Todas",
sent: "Enviado",
recd: "Rec",
to: "A",
from: "De",
amount: "Cantidad",
asset: "Activo",
name: "Nombre",
account: "Cuenta",
memo: "Memo",
donateToDevs: "Donar 2 BTS a los Desarrolladores de soporte en BitShares Munich",
hideDonations: "Ocultar donaciones de lista Transacciones pantalla de inicio",
requestSpecificAmount: "Solicite una cantidad específica (opcional)",
sharePaymentRequest: "Comparte esta Solicitud de Pago",
inviteFriend: "Invita a un amigo",
buyLifetimeAnnual: "Compre una vida o suscripción anual",
continue: "Continuar",
buy: "Compra",
sell: "Vender",
cancel: "Cancelar",
back: "Atrás",
none: "Ninguno",
please_wait: "Por Favor Espera",
thank_you: "Gracias",
balance: "Equilibrio",
publicKey: "Llave pública",
privateKey: "Clave Privada",
yes: "Sí",
no: "Sin",
remaining_balance: "Balance restante",
excess_amount: "No se puede enviar la cantidad más que la cantidad de facturación",
backup_asset: "Activos de copia de seguridad",
reward_points : "Puntos de recompensa"

}, settings: {
bitsharesWalletSettings: "Ajustes del monedero BitShares",
taxableCountry: "Imponible País",
preferredLanguage: "Idioma preferido",
displayDtAs: "Mostrar fechas y horas como",
getPricesFrom: "Obtener precios desde",
additionalSettings: "Ajustes adicionales",
checkUpdatesStartup: "Buscar actualizaciones en el arranque",
autoInstallMajorVer: "Instalar automáticamente las versiones principales de la versión",
requirePinToSend: "Requerir PIN para enviar fondos",
autoCloseWalletAfterInactivity: "Cerrar automáticamente BitShares Wallet después de 3 minutos de inactividad",
searchTransactions: "Buscar Transacciones",
exportTransactionsTo: "Transacciones Exportar a:",
alwaysDonateDevsMunich: "Siempre donar 2 BTS a los Desarrolladores de soporte en BitShares Munich (bitshares-munich)",
allowUse_GpsToFind: "Deje que el Finder (v2.0) para utilizar el GPS para encontrar la más cercana de cajeros automáticos, los humanos y los sistemas de punto de venta con Smartcoins",
allowReportPosition : "Deje que el Finder (v2.0) para informar de su posición para que otros puedan comprar o vender Smartcoins contigo",
pinNumber: "Numero PIN",
createEditPin: "Crear o editar su PIN de 6 dígitos para asegurar sus fondos y cuentas",
editPin: "Edite su PIN de 6 dígitos para asegurar sus fondos y cuentas",
secureWithPin: "Asegure toda mi BitShares Monedero con este PIN",
pinFraudNote: "Nota: Si un PIN incorrecto se introduce 3 veces, luego BitShares Monedero se cierra y no puede ser desbloqueado por 15 minutos.",
backup: "Apoyo",
promprtForMonthlyBackup: "Solicitar mensual de copia de seguridad",
createEditSeed: "Crear o editar su Seed Master (un cerebro cartera 12 palabras)",
editSeed: "Edita tus Seed Master (un cerebro cartera 12 palabras)",
coldStorageSpending: "El gasto de almacenamiento en frío",
importPrivateKey: "Importar una clave privada y sus fondos de un código QR o papel Portapapeles.",
qa: "Q & A",
q_sharePublicAddress: "Q: ¿Cómo puedo compartir mi dirección pública BTS con alguien?",
a_sharePublicAddress: "R: En la pantalla principal, toque en el código QR o toque y mantenga en el BTS ... dirección.",
q_accessPrivateKeys: "Q: ¿Cómo puedo acceder a mis claves privadas?",
a_accessPrivateKeys: "R: En la pantalla de inicio, toque y mantenga en el Identicon cuenta de usuario que aparece a la izquierda del nombre de cuenta de usuario.",
q_switchAccount : "Q: ¿Cómo puedo cambiar a una cuenta diferente en la pantalla de inicio?",
a_switchAccount : "R: Haga clic en la pequeña flecha negro que aparece a la derecha del nombre de cuenta de usuario.",
q_searchTransaction: "Q: ¿Cómo puedo buscar una transacción específica?",
a_searchTransaction: "R: Haga clic en un encabezado de columna para ordenar por esa columna (ascendente o descendente). Un campo de búsqueda se añadirán en breve.",
about: "Acerca de",
bitsharesMunichDonationRequest: "BitShares Munich trae tecnología y servicios Smartcoin a inversores y empresas de todo el mundo. Por favor, considere donar al proyecto BitShares Monedero para que los desarrolladores pueden permitirse mantener esta cartera segura, libre de errores y en constante mejora. ¡Gracias!",

privacy: "Privacidad",
tcTitle: "Términos y Condiciones",
cancelAndExit: "Cancelar y Salir",
iAgree: "Estoy de acuerdo",
confirmSendAmount: "¿Seguro que desea enviar nn XX",
confirmSendAmountRecipient: "YY?",
continue: "Continuar",
cancel: "cancelar",

}, dialog: {
enterPin: "Entrez le code PIN",
incorrectPin: "PIN erroné",
protectPinMessage: "S'il vous plaît Protégez votre code PIN",
fraudAttemptMessage: "Tentative de fraude ! ( sur 3 codes PIN erronés consécutifs )",
},
	
exchange: {
    price: "Tipo de cambio",
    trade_currency: "comercio de divisas",
    trade : "COMERCIO",
    }

    }
};