import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `✳️ ادخل ما تريد البحث عنه في ويكيبيديا` 
	
    try {
	const link =  await axios.get(`https://es.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`▢ *Wikipedia*

‣ Buscado : ${wik}

${resulw}`)
} catch (e) {
  m.reply('⚠️ لا توجد نتائج ')
}
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['wiki','ويكيبيديا'] 


export default handler
