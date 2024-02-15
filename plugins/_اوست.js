const { Client, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');

const client = new Client();
const mediaFolder = './media/';

client.on('qr', qr => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    const { body } = msg;
    
    // قائمة الكلمات المفتاحية والملفات الصوتية المرتبطة بها
    const audioFiles = {
        'دز': 'welcome.mp3',
        'منور': 'agree.mp3',
        'خرا': 'thanks.mp3'
        // يمكنك إضافة المزيد هنا حسب الحاجة
    };
    
    // التحقق مما إذا كانت الرسالة تحتوي على كلمة مفتاحية
    if (body.toLowerCase() in audioFiles) {
        const audioFileName = audioFiles[body.toLowerCase()];
        const audioPath = mediaFolder + audioFileName;
        
        if (fs.existsSync(audioPath)) {
            // إرسال رسالة صوتية
            const media = MessageMedia.fromFilePath(audioPath);
            await client.sendMessage(msg.from, media, { sendAudioAsVoice: true });
        }
    }
});

client.initialize();
