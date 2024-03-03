//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
┌──「 *معلومات المجموعة* 」
▢ *♻️ID:*
   • ${groupMetadata.id}
▢ *🔖الاسم* : 
• ${groupMetadata.subject}
▢ *👥الأعضاء* :
• ${participants.length}
▢ *🤿مالك المجموعة:*
• @${owner.split('@')[0]}
▢ *🕵🏻‍♂️المشرفين:*
 ${listAdmin}
▢ *🪢 إعدادات المجموعة:*
• ${isBanned ? '✅' : '❎'} تم حظره
• ${welcome ? '✅' : '❎'} الترحيب
• ${detect ? '✅' : '❎'} الكشف
• ${del ? '❎' : '✅'} مكافحة الحذف
• ${antiLink ? '✅' : '❎'} مكافحة الروابط الواتساب

*▢  📬 إعدادات الرسالة:*
• الترحيب: ${sWelcome}
• وداعاً: ${sBye}
• ترقية: ${sPromote}
• تخفيض: ${sDemote}

▢ *📌 الوصف* :
   • ${groupMetadata.desc?.toString() || 'غير معروف'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['الجروب', 'groupinfo', 'infogp'] 
handler.group = true

export default handler
