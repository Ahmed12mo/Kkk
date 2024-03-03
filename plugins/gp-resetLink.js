
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('✅ تم إعادة تعيين رابط المجموعة بنجاح\n\n📌 الرابط الجديد:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['رستر', 'resetlink', 'anularlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
