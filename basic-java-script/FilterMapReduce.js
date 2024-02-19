const num = [-1, 8, 0, -2, -6, -5, 7, 10, 15, -10];

// Menggunakan filter
const newNum = num.filter((a) =>  a > 3);
console.log(newNum);

// Looping
const filteredNum = [];
    for(let i = 0; i < num.length;i++){
        if(num[i] >= 3){
            filteredNum.push(num[i]);
        };
    };

//Map
const numBaru = num.map((a) => a*2);
console.log(num);
console.log(numBaru);

//Reduce
//Menambahkan semua element di array
//0 pada dibawah merupakan nilai pertama yang dijumlahkan defaultny adalah o
const angka = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(num);
console.log(angka);

//Chaining (Method berantai)
//Cari angka lebih besar dari 5
//Kalikan 3
//Kemudian jumlahkan

const chain = num.filter((a) => a > 5)
    .map((a) => 3*a)
    .reduce((acc, curr) => acc + curr);
console.log(chain);


//Study Case => Filter, Reduce, Map
//Ambil semua element video menggunakan dom selection
//Array from berfungsi untuk mengubah list node menjadi array
const videos = Array.from(document.querySelectorAll('[data-duration]'));
console.log(videos);


//Pilih yang hanya merupakan bagian dari javascript lanjutan
const js = videos.filter((a) => a.textContent.includes('JAVASCRIPT LANJUTAN'))



//Kita ambil durasi masing masing video dengan menggunakan method dataset kemudian ditambahkan dengan nama atributnya
    .map((item) => item.dataset.duration)

    
//Ubah durasi menjadi integer lalu menit diubah menjadi detik
    .map((time) => {
        const splited = time.split(':').map((part) => parseInt(part));
        return (splited[0] * 60) + (splited[1]);
    })


//Lalu jumlahkan semua detiknya dan dibuat ke jam, menit, detik
    .reduce((acc, curr) => acc + curr);

const jam = Math.floor(js/3600);
const menit = Math.floor((js%3600)/60);
const detik = (js%3600)%60;


//Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `0${jam} : ${menit} : ${detik}`;

const sumVideos = videos.filter((a) => a.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pSumVideos = document.querySelector('.jumlah-video');
pSumVideos.textContent = `${sumVideos} video`;

console.log(js);
console.log(`Total Waktu adalah 0${jam} : ${menit} : ${detik}`);