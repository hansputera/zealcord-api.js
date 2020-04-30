const Zealcord = require('../index');
(async() => {
const data = await Zealcord.fetchUser('159985870458322944')
console.log(data)
})();
