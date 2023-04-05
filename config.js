const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'default' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://te.legra.ph/file/aad04e0221e224bfcf908.png' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? '🐼⃝⃦🍃ᴛᴏxͥɪᴄ〲ᴘᴀɴͣᴅͫᴀ👨🏻‍💻᭄' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*🐼⃝⃦🍃ᴛᴏxͥɪᴄ〲ᴘᴀɴͣᴅͫᴀ👨🏻‍💻᭄*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*Inbox not allowed' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? '-' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID
};
