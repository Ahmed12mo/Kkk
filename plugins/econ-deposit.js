const xpperbank = 1
let handler = async (m, { conn, command, args }) => {
    let count = command.replace(/^(dep|تحويل)$/i, '')
    count = count ? /حول/i.test(count) ? Math.floor(global.db.data.users[m.sender].credit / xpperbank) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
    count = Math.max(1, count)
    if (global.db.data.users[m.sender].credit >= xpperbank * count) {
      global.db.data.users[m.sender].credit -= xpperbank * count
      global.db.data.users[m.sender].bank += count
      conn.reply(m.chat, `لقد قمت بتحويل 🪙 ${count} من الذهب إلى حسابك في البنك`, m)
    } else conn.reply(m.chat, `🟥 *ليس لديك مبلغ كافٍ من الذهب في محفظتك لإجراء هذه العملية*`, m)
  }
  handler.help = ['deposit']
  handler.tags = ['economy']
  handler.command = ['تحويل', 'dep', 'حول'] 
  
  handler.disabled = false
  
  export default handler
  
