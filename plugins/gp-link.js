import { areJidsSameUser } from '@whiskeysockets/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw '⚠️ يمكن استخدام هذا الأمر فقط في المجموعات'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'معلومات المجموعة غير معرفة :\\'
    if (!('participants' in groupMetadata)) throw 'المشاركين غير معرفون :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '✳️ لست في تلك المجموعة :('
    if (!me.admin) throw '✳️ لست مسؤولًا'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['link']
handler.tags = ['group']
handler.command = ['لينك', 'linkgroup'] 

export default handler
