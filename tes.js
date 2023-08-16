case 'play':  case 'song': case 'ytmp3': {
    if (!text) return replygc(`Example : ${prefix + command} anime whatsapp status`)
    replygc (mess.wait)
    
    let yetedl = require('./lib/ytdl2')
    let yts = require("youtube-yts")
    let { fetchBuffer } = require("./lib/myfunc2")
    // Ekspresi Reguler untuk mendeteksi link YouTube
    let youtubeRegex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com|\.be)\/(?:watch\?v=|embed\/|v\/)?([^\s&?\/]+)/i;
    
    // Cek apakah input mengandung link YouTube menggunakan test() pada ekspresi reguler
    if (youtubeRegex.test(text)) {
      console.log("yt terdeteksi");
      hasilmp3 = await yetedl.mp3(text)
    } else {
      console.log("Tidak ada link YouTube");
      search = await yts(text)
      searchValue = search.videos[0]
      hasilmp3 = await yetedl.mp3(searchValue.url)
    }
    const empeTri = await OctopusBotzz.sendMessage(m.chat,{
        audio: fs.readFileSync(hasilmp3.path),
        fileName: searchValue.title + '.mp3',
        mimetype: 'audio/mp4', ptt: true,
        contextInfo:{
            externalAdReply:{
                title:searchValue.title,
                body: botname,
                thumbnail: await fetchBuffer(hasilmp3.meta.image),
                mediaType:2,
                mediaUrl:searchValue.url,
            }
    
        },
    },{quoted:m})
    fs.unlinkSync(hasilmp3.path)
    }
    break
    case 'ytmp4': case 'ytvideo': {
    if (!text) replygc(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
    const yete = {
    link1: 'youtube.com',
    link2: 'youtu.be'
    }
    if (args[0].includes(yete.link1 && yete.link2)) {
    const downVid = require('./lib/ytdl2')
    const vid = await downVid.mp4(text)
    const capt = `
    *${themeemoji}Tittle:* ${vid.title}
    *${themeemoji}Date:* ${vid.date}
    *${themeemoji}Duration:* ${vid.duration}
    *${themeemoji}Quality:* ${vid.quality}`
    reply(mess.wait)
    await OctopusBotzz.sendMessage(m.chat,{
        video: {url:vid.videoUrl},
        caption: capt
    },{quoted:m})
    fs.unlinkSync(vid)
    } else {
    reply(`Terjadi kesalahan!\nMohon cek kembali & sertakan link youtube yang valid!`)
    }
    }
    break