const fs = require('fs');
const chalk require('chalk');



let file = require.resolve(__filename) // fs && chalk
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})