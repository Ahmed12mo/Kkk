let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://gist.githubusercontent.com/Kyutaka101/070c0e6e7d944b70e6267f9743e35e4d/raw/e487f87c4bb63d5c5ca95650d3103995cb7ae6b2/%25D8%25A7%25D8%25AD%25D8%25B2%25D8%25B1.js')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*· • • ━━ ⌝🐉⌞ ━━ • • ·*
*${command.toUpperCase()}*
*🜋↫╎السـؤال ✍🏻⇜『من في الصورة』*
  *🜋↫╎الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)} ┇*
  *استخدم .انسحب للأنسحاب*
  *🜋↫╎الـجـائزة💰↞ ${poin} نقاط┇*
∞┇━━━ •🐉• ━━━┇∞
*✠ ~تــ✍︎ــوقــيــع ↯:~*
『𝙕𝙊𝙍𝙊-𝘽𝙊𝙏』
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ *${json.name}* ┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^فعاليه/i

export default handler 
