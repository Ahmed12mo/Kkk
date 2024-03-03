import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw '✳️ ما الذي تريدني أن أبحث عنه على يوتيوب؟';

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(`https://weeb-api.vercel.app/ytsearch?query=${query}`);
    const results = response.data;

    if (results.length === 0) {
      throw 'لم يتم العثور على نتائج للبحث المعطى.';
    }

    const firstResult = results[0];

    const message = `
乂 ${firstResult.title}
乂 *الرابط* : ${firstResult.url}
乂 *المدة الزمنية* : ${firstResult.timestamp}
乂 *تاريخ النشر :* ${firstResult.ago}
乂 *المشاهدات:* ${firstResult.views}

    `;

    conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m);
  } catch (error) {
    console.error(error);
    throw 'حدث خطأ أثناء البحث عن مقاطع الفيديو على يوتيوب.';
  }
};

handler.help = ['ytsearch'];
handler.tags = ['downloader'];
handler.command = ['بحث-يوتيوب', 'yts'];

export default handler;
