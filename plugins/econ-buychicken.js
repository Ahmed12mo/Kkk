let handler = async (m, { conn, command, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]


   
    
    if (user.chicken > 0) return m.reply('لديك بالفعل ذلك')
    if (user.credit < 500) return m.reply(`🟥 *ليس لديك مبلغ كاف من الذهب في محفظتك لشراء دجاج*`)

    user.credit -= 1000
    user.chicken += 1
    m.reply(`🎉 لقد قمت بشراء دجاج بنجاح للقتال! استخدم أمر  ${usedPrefix}cock-fight <المبلغ>`)
}

handler.help = ['buych']
handler.tags = ['economy']
handler.command = ['buy-chicken', 'دجاج'] 

handler.group = true

export default handler
