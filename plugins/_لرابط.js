import fetch from 'node-fetch';

let handler = async (m, { conn, args, text }) => {
  if (!text) throw '*Please provide a URL or link to shorten.*';

  let shortUrl1 = await (await fetch(`https://2shared.com/api-create.php?url=${args[0]}`)).text();
  
  if (!shortUrl1) throw `*Error: Could not generate a short URL.*`;

  let done = `*SHORT URL CREATED!!*\n\n*Original Link:*\n${text}\n*Shortened URL:*\n${shortUrl1}`.trim();
  
  m.reply(done);
};

handler.help = ['tinyurl', 'shorten'].map(v => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(mpu|صوت|mp7|mp6)$/i;
handler.fail = null;

export default handler;
