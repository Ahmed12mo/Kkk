let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
    const vn = './media/استغفر الله';
    const caption =`*┅┅┅┅┅┅┅༻معلومات البوت༺┅┅┅┅┅┅┅*
*📆 التاريخ:* ${date}
 *⏳ وقت التشغيل:* ${uptime}
 *🧑 المستخدمين المسجلين:* ${rtotalreg}
 *👥 إجمالي المستخدمين:* ${rtotal}
 *🤖 نوع البوت:* ${(conn.user.jid == global.conn.user.jid ? '' : `Sub-bot de:\n+${global.conn.user.jid.split`@`[0]}`) || 'No es sub-bot'}

*┅┅┅┅┅┅┅༻معلومات المستخدم༺┅┅┅┅┅┅┅*

 *📈 المستوى:* ${level}
 *🧰 الخبرة:* ${exp}
 *⚓ الرتبة:* ${role}
 *💎 الماس:* ${limit}
 *🪙 زورو كوينز:* ${money}
 *🎟️ الرموز:* ${joincount}
 *🎫 مميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
*༺❁━━═════⊱𓆩☁️𓆪⊰═════━━❁༻*
*مرحبا بكم في بوت  اليونكو  شانكس  الخاص بمملكة كلاود العريقة اليك لائحة اوامر البوت:* ```https://www.instagram.com/shanks__an?igsh=MWFmc2dmdTllaTE1NA==```
*┅┅┅┅┅┅༻اوامر البوت༺┅┅┅┅┅┅*
*┇⚡❯ .العاب*
*❐↞لطلب اوامر الألعاب مثل:*
*احزر,عين,كوره,دين...*

*┇🔰❯.التحويلات*
*❐↞لطلب اوامر التحويلات مثل:*
*ملصق,سرقه,لفيديو,جيف...*

*┇🧭❯.التنزيلات*
*❐↞لطلب اوامر التنزيلات مثل:*
*اغنيه,فيديو,انستا,فايس,تيك,بينترس...*

*┇🔖❯.جروبات*
*❐↞لطلب اوامر المجموعات مثل:*
*ترقيه,إعفاء,لينك,جروب_فتح/غلق...*

*┇🛡️❯.الدعم*
*❐↞لطلب قائمة المساعدة مثل:*
*المطور,جروب الدعم,سكريبت,كود...*

*┇🃏❯.المستقبل*
*❐↞لطلب اوامر الذكاء الاصطناعي مثل:*
*بينغ,شاتgpt,شانكس...*

*┇♻️❯.لوغو*
*❐↞لطلب قائمة تصميم اللوجوهات بواسطة الذكاء الاصطناعي🌩️*
*༺❁━━═════⊱𓆩☁️𓆪⊰═════━━❁༻*
*✠ ~تــ✍︎ــوقــيــع ↯:~*
*『𝐂𝐋𝐎𝐔𝐃𓆩☁️𓆪𝐊𝐈𝐍𝐆𝐃𝐎𝐌』*`


await conn.sendMessage( m.chat, {
        video: {
          url: 'https://telegra.ph/file/a2a1de6434ce22177b26b.mp4'
        },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['اوامر'] 
export default handler
