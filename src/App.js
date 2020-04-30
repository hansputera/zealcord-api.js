const req = require('node-superfetch');
let URL = 'https://app.zealcord.xyz';

this.getBot = async (id) => {
 if (!id) return console.log('[getBot] Masukan ID bot');
 if (isNaN(id)) return console.log('[getBot] ID bot tidak valid');
 if (typeof id !== 'string') return console.log('[getBot] ID nya harus dibalut string\nContoh:"123456"');
 if (id.length < 18 || id.length > 18) return console.log('[getBot] ID bot harus 18 karakter!');
 let res;
  
let { body: result } = await req.get(`${URL}/api/bots`);
 if (!result[id]) return res = { hasil: 'Tidak dapat ditemukan!', data: null };
 let owner = await this.fetchUser(result.ownerID),
     botUser = await this.fetchUser(result.botID);
  res = {
   owner: {
    username: owner.username,
    discriminator: owner.discriminator,
    tag: owner.tag,
    avatar: owner.avatar,
    avatarURL: owner.avatarURL,
    displayAvatarURL: owner.displayAvatarURL,
    bot: owner.bot,
    createdAt: new Date(owner.createdTimestamp),
    createdTimestamp: owner.createdTimestamp,
    bots: owner.bots
   },
    bot: {
      id: botUser.id,
      username: botUser.username,
      discriminator: botUser.discriminator,
      tag: botUser.tag,
      avatar: botUser.avatar,
      avatarURL: botUser.avatarURL,
      displayAvatarURL: botUser.displayAvatarURL,
      bot: botUser.bot,
      createdAt: new Date(botUser.createdTimestamp),
      createdTimestamp: botUser.createdTimestamp,
      ownedBy: botUser.ownedBy
    },
    prefix: result.prefix,
    accept: result.accepted ? 'Ya':'Tidak',
    claim: result.claimed ? 'Ya':'Tidak'
 }
return res;
}


this.fetchUser = async (id) => {
  if (!id) return console.log('[fetchUser] Masukan ID');
  let { body: result } = await req.get(`https://app.zealcord.xyz/api/fetchUser?id=${id}`);
  if (result.error === 'unknown_user') return console.log(`[fetchUser] id tersebut tidak ada!`);
  
  let user = {
    id: result.id,
    username: result.username,
    discriminator: result.discriminator,
    tag: result.tag,
    avatar: result.avatar,
    avatarURL: result.avatarURL,
    displayAvatarURL: result.displayAvatarURL,
    bot: result.bot
  };
  if (user.bot === true || result.bot === true) {
    user.ownedBy = result.ownedBy
  } else {
    user.bots = result.bots
  };
  return user;
};
/* -------------------------------------- */
/* Struktur Data diambil dari zealcord.js */
/* Module ini dibuat karena saya bosan:v */
/* Jadi Module ini tidak membutuhkan token */
/* Token tidak butuhkan seperti di package zealcord.js */
/* DAHLAH, ~ FlockNet#7343 */
/* ---------------------------------------*/
