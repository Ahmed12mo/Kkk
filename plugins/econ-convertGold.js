
const xppercredit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^شراء/i, '')
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xppercredit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xppercredit * count) {
    global.db.data.users[m.sender].exp -= xppercredit * count
    global.db.data.users[m.sender].credit += count
    conn.reply(m.chat, `
┌─「 *ملاحظة الدفع* 」
‣ *الشراء بالاسمية* : + ${count} 
‣ *المصروف* : -${xppercredit * count} XP
└──────────────`, m)
  } else conn.reply(m.chat, `❎ عذرًا، ليس لديك ما يكفي من *XP* لشراء *${count}* ذهب\n\n يمكنك الحصول على *XP* باستخدام أوامر من *قائمة الألعاب والاقتصاد*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['economy']
handler.command = ['شراء', 'buyall'] 

handler.disabled = false

export default handler
