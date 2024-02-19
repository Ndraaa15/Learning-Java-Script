// fetch('http://www.omdbapi.com/?apikey=1e0d877f&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// Promises
// Sebuah object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang async di masa yang akan datang
// janji bisa dipenuhi atau diingkari
// States (fullfilled, rejected, pending(waktu tunggu sebelum janjinya terpenuhi atau tidak))
// fungsi callback (resolve (berhasil), reject(ditolak), finally(waktu tunggu selesai))
// aksi (then (terpenuhi), catch (tidak terpenuhi))

// contoh1
let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati){
        resolve('Janji ditepati :D');
    }else{
        reject('tidak ditepati D:')
    }
})

console.log(janji1);
janji1
 .then(response => {
    console.log('Wow ' + response);
})
 .catch(response => {
    console.log('Yah ' + response);
 })

 //Contoh 2
 let ditepati2 = true;
 const janji2 = new Promise((resolve, reject) => {
    if (ditepati){
        setTimeout(() => {
            resolve('Yeay, ditepati')
        }, 2000);
    }else{
        setTimeout(() => {
            resolve('Yeay, ditepati')
        }, 2000);
    }
 });

 //proses di bawah menunjukkan bahwa proses terjadi secara async dimana terjadi pending selama 2 detik kemudian perintah then dilakukan.
 console.log('Mulai');
//  console.log(janji2.then(() => console.log(janji2)));
 janji2
 //Finally berguna untuk menunjukkan apabila proses pending telah selesai biasanya digunakan dalam proses loading
 .finally(() => {
    console.log('Selesai Menunggu');
 })
 .then(response => {
    console.log('Wow ' + response);
})
 .catch(response => {
    console.log('Yah ' + response);
})
 console.log('Selesai');


 //Promise.all()

 const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judul : 'Naruto',
            Writter : 'Masashi Kisimoto',
            Actor : 'Naruto, Sasuke, Sakura'
        }])
    }, 1000);
 });

 const weather = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'Bali',
            suhu : '28',
            keterangan : 'Cerah'
        }])
    }, 500)
 });

 film
  .then(response => console.log(response));
weather
 .then(response => console.log(response));

 Promise.all([film, weather])
    // Contoh dibawah akan menjadi 1 array yaitu array di dalam array
    .then(response => console.log(response))

    .then((response) => {
        const [film, weather] = response;
        console.log(film);
        console.log(weather);
    })