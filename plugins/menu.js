let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`


  ‎‎الذكاء الاصطناعي ومشتقاته
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁🤖

*.bardai*
*.bingcreate*
*.chawnyma*
*.ai*
*.ai2*
*.dalle2*
*.resvimg*
*.chatgbt*
*.drawing*
*.bard*
*.bard2*
*.wordle*
*.zombie*
*.nobg*
*.mic*
*.gemini*

 ‎‎ التحميلات ومشتقاتها
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁🔥

*.apk*
*.apk2*
*.apkmirror*
*.ytv*
*.yts*
*.ytmp4*
*.ytvideo*
*.ytdoc*
*.storyset*
*.spotifysearch*
*.spotify3*
*.play2*
*.play3*
*.pinterest*
*.mediafire2*
*.manga*
*.gateanime*
*.bookslib*



‎‎‎أدوات اخرى 
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁💡

*.toanime*
*.translate*
*.wasted*
*.topdf*
*.textpdf*
*.tomp3*
*.tweet*
*.tts*
*.sticker*
*.wm*‎‎
*.attp*
*.quotlyv2*
*.quotlyv3*
*.quotly*
*.naruto*
*.logo1*
*.lg3*
*.lg4*
*.lg5*
*.get*
*.hd*
*.dehaze*
*.recolor*
*.qr*
*.jadibot*


🛡️‎‎صاحب البوت ‎‎
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁🏃

*.tagall*
*.setpp*
*.owner*
*.cleartmp*

  البوت فيه ميزة التحميل التلقائي من انستغرام وفيسبوك ويوتوب ♥
  ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 info sc owner :
 -----------------------------
  ⌬ | *𝚈𝙾𝚄𝚃𝚄𝙱𝙴*:\nyoutube.com/@noureddineouafy2
  ⌬ | *𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼*:\ninstagram.com/noureddine_ouafy
⌬ | *𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺*:\nfacebook.com/profile.php?id=100063533185520
  ----------------------------- 
`


await conn.sendMessage( m.chat, {
        video: {
          url: 'https://telegra.ph/file/bba27bc6b305ac6a5229d.mp4'
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
handler.command = ['menu'] 
export default handler
