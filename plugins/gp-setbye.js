//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('✅ تم تعيين رسالة الوداع بنجاح')
  } else throw `✳️ الرجاء إدخال الرسالة\n@شخص (منشن)`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['تغيرالمغادره'] 
handler.admin = true
handler.owner = false

export default handler
