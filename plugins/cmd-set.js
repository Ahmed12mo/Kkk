//import db from '../lib/database.js'

let handler = async (m, { text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) throw `✳️ رد على رسالة باستخدام *${usedPrefix + command}*`
    if (!m.quoted.fileSha256) throw '⚠️ قم بذكر الرسالة'
    if (!text) throw `✳️ الأمر مفقود`
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '⚠️ ليس لديك الإذن لتغيير هذا الأمر'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`✅ الأمر تم حفظه`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <txt>')
handler.tags = ['cmd']
handler.command = ['setcmd']
handler.owner = true

export default handler
