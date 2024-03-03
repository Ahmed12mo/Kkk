
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ أدخل الرقم الذي تريد إرسال دعوة للانضمام إلى المجموعة\n\n📌 مثال :\n*${usedPrefix + command}*917605902011`
if (text.includes('+')) throw  `أدخل الرقم بدون *+*`
if (isNaN(text)) throw ' 📌 أدخل أرقامًا فقط بدون رمز البلد الخاص بك مع عدم وجود مسافات'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *دعوة للانضمام إلى المجموعة*\n\nقام مستخدم بدعوتك للانضمام إلى هذه المجموعة \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ تم إرسال رابط الدعوة إلى المستخدم`) 

}
handler.help = ['invite <917xxx>']
handler.tags = ['group']
handler.command = ['دعوه','invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
