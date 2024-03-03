let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ قم بالتنبيه على المستخدم'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ أدخل كمية *العملات* التي تريد إضافتها'
    if (isNaN(txt)) throw '🔢 الرقم فقط'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Mínimum  *1*'
    let users = global.db.data.users
   users[who].credit += dmt

    await m.reply(`≡ *تمت إضافة الذهب*
┌──────────────
▢ *المجموع:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ هل استلمت \n\n *+${dmt}* العملات`, who, m.text)
}

handler.help = ['addgold <@user>']
handler.tags = ['economy']
handler.command = ['اضافه-عملات'] 
handler.rowner = true

export default handler
