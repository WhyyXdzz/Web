const fs = require('fs');

// Owner
global.owner = "https://wa.me/6281389860142"
global.linkWa = "https://chat.whatsapp.com/HqJ0JCj0Y4fKWSlEd2yYNX"
global.linkTesti = "https://whatsapp.com/channel/0029VaflCiz1SWt6iDvjip2y"

// Github 
global.tokengh = "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"

// Pterodactyl 
global.domain = "reseller.private.ibzz-official.my.id"
global.ptla = "ptla_IvgxVsRuk7GHFOrgHbDwjagrfjBt5gJQX9ZczeTtfg4"
global.ptlc = "ptlc_SrRen4eLrCR4rc1XtpBMu6EwlulMyXyminaOioj4sym"
global.egg = "15"
global.nestid = "5"

// Vps 
global.apido = "dop_v1_141c744f17ed56e05e0938f75d4b5a4e24b9895654ca340c4c0617c38b1b28b5"

// Order Kuota
global.apikey = "-"
global.codeqr = "-"
global.authToken = "-"
global.userOrkut = "-"
global.pwOrkut = "-"

// Email 
global.email = "example@gmail.com"
global.pw = "-"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});