
let handler = async (m, { conn, text, participants}) => {
	
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    if (!m.quoted) throw `✳️ اعمل ريبلاي للرساله ال عايزها منشن`
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}

handler.help = ['totag']
handler.tags = ['group']
handler.command = /^(لمنشن|tag)$/i

handler.admin = true
handler.group = true

export default handler
