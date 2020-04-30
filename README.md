# Instalasi
- `npm install zealcord-api.js`
# Cara Penggunaan
## Pakai `await`
```js
const Zealcord = require('zealcord-api.js');

(async() => {
const data = await Zealcord.getBot('ID BOT');
data
})();
```
## Pake `.then([Promise])`
```js
const Zealcord = require('zealcord-api.js');

Zealcord.getBot('ID BOT').then(data => {
data
});
```

**Buat ngecek data nya ada atau kagak di `console.log(data)` aja yak:)**
**Kode nya bisa di aplikasikan sendiri di kode anda!**
- FlockNet#7343
