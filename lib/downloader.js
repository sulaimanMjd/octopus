const axios = require("axios") // Mediafire, Tiktok, Insta
const vm = require('node:vm') // Insta
const cheerio = require("cheerio") // Mediafire, Tiktok, Insta
const chalk = require("chalk") 
const fs = require("fs") // Insta
const path = require('path') // Insta
/* =============================================== */
/* Mediafire Downloader */
const mediafireDl = async (url) => {
const res = await axios.get(url)
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}

/* =============================================== */
/* Tiktok Downloader */
const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};
async function shortener(url) {
  return url;
}
const tiktokDl = async(query) => {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });
  result = {};
  result.creator = "Sulaiman Majid";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}


/* =============================================== */
/* Instagram Downloader */
// variable igDl
const {
	spawn
} = require('child_process')	
let BodyForm = require('form-data')
let {
	fromBuffer
} = require('file-type')
let fetch = require('node-fetch')
//function igDl
const instaDl = async(match) => {
const result = []
				const form = {
					url: match,
					submit: '',
				}
				const { data } = await axios(`https://downloadgram.org/`, {
					method: 'POST',
					data: form
				})
				const $ = cheerio.load(data)
                $('#downloadhere > a').each(function (a,b) {
				const url = $(b).attr('href')
				if (url) result.push(url)
			})
            return result
}


module.exports = { mediafireDl, tiktokDl, instaDl }

let file = require.resolve(__filename) // fs && chalk
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})