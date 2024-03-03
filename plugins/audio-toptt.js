import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ رد على الصوت الذي تريد تحويله إلى رسالة صوتية بالأمر:\n *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ فشل تحميل الوسائط'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '❎ حدث خطأ أثناء التحويل'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['toav']
handler.tags = ['fun']

handler.command = ['رساله-صوتيه', 'tovn'] 

export default handler
