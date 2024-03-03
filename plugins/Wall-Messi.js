import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*عمك يلااااا*`, m);
};
// conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['messi'];
handler.tags = ['internet'];
handler.command = /^(ميسي|معزه)$/i;
export default handler;
