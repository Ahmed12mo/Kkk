import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `قول اي حاجه!`;

  try {
    m.react('⚡');
    var apii = await fetch(`https://aemt.me/bard?text=${text}`);
    var res = await apii.json();

    await conn.sendFile(m.chat, 'https://telegra.ph/file/c6e93e154336db7585c98.jpg', 'image.png', res.result, m);

  } catch (error) {
    console.error(error);
    throw '*احا ايرور*';
  }
};

handler.command = ['تست'];
handler.help = ['bard'];
handler.tags = ['herramientas'];
handler.premium = false;

export default handler;
