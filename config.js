const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'ZEROTWO=rYdShJ5B#rfgbkXFl6cajU9ZAaMUjR2pOqs-KTItzv4c1Pkr2j7E' : process.env.SESSION_ID,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
ANTI_BAD: process.env.ANTI_BAD === undefined ? 'true' : process.env.ANTI_BAD,
MAX_SIZE: 100,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true' : process.env.ONLY_GROUP,
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK,
ANTI_BOT: process.env.ANTI_BOT === undefined ? 'true' : process.env.ANTI_BOT,
ALIVE: process.env.ALIVE === undefined ? `default` : process.env.ALIVE,
FOOTER: process.env.FOOTER === undefined ? '©𝚉𝙴𝚁𝙾-𝚃𝚆𝙾 𝙼𝙳' : process.env.FOOTER,
LOGO: process.env.LOGO === undefined ? `https://i.ibb.co/rxcD0gP/3058.jpg` : process.env.LOGO
};
