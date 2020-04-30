const apasi = require('../index');
(async() => {
const data = await apasi.fetchUser('159985870458322944')
console.log(data)
})();