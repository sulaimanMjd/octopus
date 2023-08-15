const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owner v card
global.owner = ['6281359391296'] //ur owner number
global.ownernomer = "6281359391296" //ur owner number2
global.ownername = "Sulaiman Majid" //ur owner name
global.ytname = "YT: -" //ur yt chanel name
global.email = "sulaimanmajid77@gmail.com"
global.socialm = "GitHub: Sulaiman0851" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = "Octopus MD V2.1.1"
global.ownernumber = '6281359391296'
global.ownername = 'Sulaiman Majid'
global.ownerNumber = ["6281359391296@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@DGXeon"
global.websitex = "https://youtu.be/dRjLBzuSsN4"
global.wagc = "https://chat.whatsapp.com/H5pTRObSv3sAcihLxO0mDF"
global.themeemoji = '👨🏻‍💻'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD7' //script link
global.packname = "Sticker By"
global.author = "Octopus Bot | https://bit.ly/m/octopus-bot"
global.creator = "6281359391296@s.whatsapp.net"
global.prefa = ['!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./assets/theme/oct.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./assets/theme/oct.jpg") //ur logo pic
global.err4r = fs.readFileSync("./assets/theme/oct.jpg") //ur error pic
global.thumb = fs.readFileSync("./assets/theme/oct.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

// limited feature
if (global.limit === undefined) {
  console.log("Peringatan: Nilai global.limit belum ditentukan.");
  global.limit = 10; // Nilai default jika belum ditentukan
}

// messages
global.mess = {
    success: 'Suksess kak...',
    admin: 'Fitur ini hanya dapat digunakan oleh admin!',
    botAdmin: 'Bot Harus Jadi Admin Dulu!',
    premime: 'Fitur ini khusus pengguna Premium Jika ingin mendaftar, ketik .owner!',
    owner: 'Fitur ini hanya dapat digunakan oleh pemilik bot!',
    group: 'Fitur ini hanya digunakan untuk grup!',
    private: 'Fitur yang digunakan hanya untuk obrolan pribadi!',
    bot: 'Fitur ini hanya dapat digunakan oleh bot!',
    wait: 'Ditunggu kak, masih proses...',
    linkm: 'Masukkan linknya dulu ya kak...',
    endLimit: 'Upss.. Batas/Limit Harian Anda Telah Habis, Batas Akan Direset Setiap 12 Jam.\n\nJika Kamu Ingin Memiliki Unlimited Batas Harian, Kamu Perlu Mendaftar Paket Premium',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})