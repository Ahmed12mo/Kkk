
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/c6e93e154336db7585c98.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'فيديو', description: 'دعم الجروب', title: packname, body: 'دعم الجروب', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'فيديو', description: 'يتبرع', title: 'يوتيوب', body: 'إبقاء الروبوت يعمل ', thumbnailUrl: pp, sourceUrl: fgyt }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'الفيديو', description: 'اشتراك : ' + fgyt, title: 'YouTube', body: 'تعلم كيفية إنشاء الروبوتات الخاصة بك', thumbnailUrl: pp, sourceUrl: fgyt }}}

	global.fcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `ZORO-BOT`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'GURU-BOT'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

} 
export default handler
