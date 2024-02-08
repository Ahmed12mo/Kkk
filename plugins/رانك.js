import { createHash } from 'crypto';
import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : (m.fromMe ? conn.user.jid : m.sender);

  if (!(who in global.db.data.users)) {
    throw '✳️ المستخدم غير موجود في قاعدة البيانات';
  }

  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg');
  let user = global.db.data.users[who];
  let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || '';
  let { name, exp, credit, lastclaim, registered, regTime, age, level, role, wealth, warn } = global.db.data.users[who];
  let { min, xp, max } = xpRange(user.level, global.multiplier);
  let username = conn.getName(who);
  let math = max - xp;
  let prem = global.prems.includes(who.split`@`[0]);
  let sn = createHash('md5').update(who).digest('hex');

  let happyEmoji = '🐉'; // يمكنك تغيير الإيموجي إلى ما تفضله
  let happyMessage = 'اتفضل يحب كل بياناتك⚡';
  // يمكنك تغيير هذه الجملة إلى ما تفضله

  let str = `*${happyEmoji} الاسم:* ${username}${about ? '\n\n ✨ *الوصف:* ' + about : ''}\n\n*📊 المستوى:* ${level}\n*نقاطك💲*: ${exp}\n*التقدم* (${user.exp - min} / ${xp})\n${math <= 0 ? `جاهز للارتقاء بمستواك باستخدام *${usedPrefix}levelup* ${happyEmoji}` : `*انت تحتاج* ${math} *نقطة لرفع مستواك* ${happyEmoji}`}\n*📈 رتبتك:* ${role}\n*💎 الماسك*: ${user.limit}\n*👑 شخص مميز*: ${prem ? 'نعم' : 'لا'}\n*_رمز التحقق✔️_* ${sn}\n«𝙕𝙊𝙍𝙊-𝘽𝙊𝙏»\n\n${happyMessage}`;

  conn.sendFile(m.chat, pp, 'profil.jpg', str, m, false, { mentions: [who] });
};

handler.help = ['profile'];
handler.tags = ['group'];
handler.command = ['رانك'];

export default handler;