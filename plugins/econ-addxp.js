//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ قم بمنشنه على المستخدم'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ أدخل كمية *الخبرة* التي تريد إضافتها'
  if (isNaN(txt)) throw ' 🔢 الرقم فقط'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ الحد الأدنى *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *تمت إضافة الخبرة*
┌──────────────
▢  *المجموع:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Did you recieve \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['economy']
handler.command = ['خبره'] 
handler.rowner = true

export default handler

