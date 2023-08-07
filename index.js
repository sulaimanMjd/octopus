const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: OctopusBotzzConnect, useSingleFileAuthState, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, jidDecode, proto } = require("@adiwajshing/baileys")
const {
	default: makeWASocket,
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const { uncache, nocache } = require('./lib/loader')
//const { start } = require('./lib/spinner')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const me = 

function title() {
      console.clear()
      console.log(chalk.yellow(`\n\n               ${chalk.bold.yellow(`[
${botname} ]`)}\n\n`))
      console.log(color(`< ================================================== >`, 'cyan'))
console.log(color(`\n${themeemoji} YT CHANNEL: -`,'magenta'))
console.log(color(`${themeemoji} GITHUB: Sulaiman0851 `,'magenta'))
console.log(color(`${themeemoji} WA NUMBER: ${owner}`,'magenta'))
console.log(color(`${themeemoji} CREDIT: ${wm}\n`,'magenta'))
}

async function OctopusBotzzBot() {
    	const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys')
        const OctopusBotzz = OctopusBotzzConnect({
            printQRInTerminal: true,
            logger: pino({ level: 'fatal' }),
            auth: state,
            browser: [`OctopusBotzz`, "Safari", "3.0"],
	    getMessage: async key => {
              return {
                
              }
          }
        })
        store.bind(OctopusBotzz.ev)

console.log(color(figlet.textSync(`Cheems`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'green'))

OctopusBotzz.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

OctopusBotzz.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!OctopusBotzz.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(OctopusBotzz, kay, store)
require('./OctopusBotzz')(OctopusBotzz, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

	// detect group update
		OctopusBotzz.ev.on("groups.update", async (json) => {
			try {
ppgroup = await OctopusBotzz.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0];
			if (res.announce == true) {
				await sleep(2000)
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\nGrup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan!`,
				});
			} else if (res.announce == false) {
				await sleep(2000)
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\nThe group has been opened by admin, Now participants can send messages !`,
				});
			} else if (res.restrict == true) {
				await sleep(2000)
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\nInfo grup telah dibatasi, Sekarang hanya admin yang dapat mengedit info grup!`,
				});
			} else if (res.restrict == false) {
				await sleep(2000)
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\nInfo grup telah dibuka, Sekarang peserta dapat mengedit info grup!`,
				});
			} else if(!res.desc == ''){
				await sleep(2000)
				OctopusBotzz.sendMessage(res.id, { 
					text: `「 Perubahan Setelan Grup 」\n\n*Deskripsi grup telah diubah menjadi*\n\n${res.desc}`,
				});
      } else {
				await sleep(2000)
				OctopusBotzz.sendMessage(res.id, {
					text: `「 Perubahan Setelan Grup 」\n\n*Nama grup telah diubah menjadi*\n\n*${res.subject}*`,
				});
			} 
			
		});

require('./OctopusBotzz.js')
nocache('../OctopusBotzz.js', module => OctopusBotzz.sendMessage(6281359391296 + "@s.whatsapp.net", { text: `[ CHANGE ] ${module} Updated` }) && console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated')
)
require('./index.js')
nocache('../index.js', module => OctopusBotzz.sendMessage(6281359391296 + "@s.whatsapp.net", { text: `[ CHANGE ] ${module} Updated` }) && console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated')
)
require('./settings.js')
nocache('../settings.js', module => OctopusBotzz.sendMessage(6281359391296 + "@s.whatsapp.net", { text: `[ CHANGE ] ${module} Updated` }) && console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated')
)

    //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

/*document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
*/

OctopusBotzz.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await OctopusBotzz.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await OctopusBotzz.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await OctopusBotzz.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}

                //welcome\\
pepeUsr = await getBuffer(ppuser)
memSek = metadata.participants.length
if (anu.action == 'add') {
  let xeonName = num
  const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
  messInfo = `┌─❖=> *INFO*
│Tag Nama : @${xeonName.split("@")[0]}
│Nomor : ${xeonName.split("@")[0]}
│Bergabung di : ${metadata.subject}
│Waktu Bergabung : ${xtime} ${xdate}
│Total Member Sekarang : ${memSek}
└───────────────┈ ⳹`
reply(`@${xeonName.split("@")[0]} masuk di grup ini`)
/*
OctopusBotzz.sendMessage(anu.id,
  {
  text: messInfo,
    contextInfo:{
      mentionedJid:[num],
      "externalAdReply": {
        "showAdAttribution": true,
        "containsAutoReply": true,
        "title": ` ${botname}`,
        "body": `${ownername}`,
        "previewType": "PHOTO",
        "thumbnailUrl": ``,
        "thumbnail": pepeUsr,
        "sourceUrl": `${wagc}`
      }
    }
  }
)
*/
} else if (anu.action == 'remove') {
  const xeontime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  const xeondate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
  let xeonName = num
  messInfo = `┌─❖=> *INFO*
│Tag Nama : @${xeonName.split("@")[0]}
│Nomor : ${xeonName.split("@")[0]}
│Keluar Dari ${metadata.subject}
│Waktu Keluar : ${xeontime} ${xeondate}
│Total Member Sekarang : ${memSek}
└───────────────┈ ⳹`
} else if (anu.action == 'promote') {
const xeontime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
let xeonName = num
messInfo = ` 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @${xeonName.split("@")[0]}, Anda telah *dipromosikan* menjadi *admin* 🥳`
reply(`@${xeonName.split("@")[0]} keluar dari grup ini`)
/*
OctopusBotzz.sendMessage(anu.id,
  {
  text: messInfo,
    contextInfo:{
      mentionedJid:[num],
      "externalAdReply": {
        "showAdAttribution": true,
        "containsAutoReply": true,
        "title": ` ${botname}`,
        "body": `${ownername}`,
        "previewType": "PHOTO",
        "thumbnailUrl": ``,
        "thumbnail": pepeUsr,
        "sourceUrl": `${wagc}`
      }
    }
  }
)
*/
} else if (anu.action == 'demote') {
const xeontime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
let xeonName = num
messInfo = `𝗢𝗼𝗽𝘀‼️ @${xeonName.split("@")[0]}, kamu telah *diturunkan* dari *admin* 😬`
OctopusBotzz.sendMessage(anu.id,
 { text: messInfo,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": pepeUsr,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
})

OctopusBotzz.sendTextWithMentions = async (jid, text, quoted, options = {}) => OctopusBotzz.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

OctopusBotzz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

OctopusBotzz.ev.on('contacts.update', update => {
for (let contact of update) {
let id = OctopusBotzz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

OctopusBotzz.getName = (jid, withoutContact  = false) => {
id = OctopusBotzz.decodeJid(jid)
withoutContact = OctopusBotzz.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = OctopusBotzz.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === OctopusBotzz.decodeJid(OctopusBotzz.user.id) ?
OctopusBotzz.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

OctopusBotzz.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

OctopusBotzz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await OctopusBotzz.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await OctopusBotzz.getName(i + '@s.whatsapp.net')}\nFN:${ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat my owner\nitem2.EMAIL;type=EMAIL:${global.ytname}\nitem2.X-ABLabel:Email\nitem3.URL:${global.socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Location\nEND:VCARD`
	    })
	}
	OctopusBotzz.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

OctopusBotzz.setStatus = (status) => {
OctopusBotzz.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

OctopusBotzz.public = true

OctopusBotzz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await OctopusBotzz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

OctopusBotzz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await OctopusBotzz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

OctopusBotzz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await OctopusBotzz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

OctopusBotzz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await OctopusBotzz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

OctopusBotzz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

OctopusBotzz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

OctopusBotzz.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

OctopusBotzz.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await OctopusBotzz.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await OctopusBotzz.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

OctopusBotzz.sendText = (jid, text, quoted = '', options) => OctopusBotzz.sendMessage(jid, { text: text, ...options }, { quoted })

OctopusBotzz.serializeM = (m) => smsg(OctopusBotzz, m, store)

OctopusBotzz.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); OctopusBotzz.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); OctopusBotzzBot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); OctopusBotzzBot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); OctopusBotzz.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); OctopusBotzz.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); OctopusBotzzBot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); OctopusBotzzBot(); }
else OctopusBotzz.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} else if (connection === "open") { OctopusBotzz.sendMessage(6281359391296 + "@s.whatsapp.net", { text: `*Bot started!*\n\n\n_*Thanks to*_\n_*Allah*_\n_*Myself*_\n_*Family*_\n_*Friends who helped me assemble this script*_` }); }
console.log('Connected...', update)
})

OctopusBotzz.ev.on('creds.update', await saveCreds)

//start('2',colors.bold.white('\nWaiting for New Messages..'))

return OctopusBotzz

}

OctopusBotzzBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})