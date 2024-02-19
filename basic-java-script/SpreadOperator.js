//Spread operator adalah operator yang berfungsi untuk memeceah iterables object menjadi single element (unpack)

const mahasiswa = ['indra', 'adi', 'brata'];
console.log(...mahasiswa);
console.log(...mahasiswa[0]);

//Menggabungkan 2 array
const dokter = ['indra', 'wulan', 'yahya'];
const engineer = ['wena', 'bayu', 'bara'];
const pekerjaan = [...dokter, 'bari', ...engineer];
//Spread di atas bisa diganti menjadi concat tapi dengan concat kita tidaak bisa menambah suatu object di dalam array yang digabung
const job = dokter.concat(engineer);

console.log(pekerjaan);
console.log(job);

//Mengcopy pada array
const mhs = ['Bayu', 'Izat', 'Candra'];
// const mhs1 = mhs; => kalau seperti ini apabila ingin merubah suatu nilai dari salah satu index maka index parentnya akan berubah
//Caranya :
const mhs1 = [...mhs];


// const name = document.querySelectorAll('li');
// const namaMhs = [];
// for(let i = 0; i < name.length; i++){
//     namaMhs.push(name[i].textContent);
// }
// console.log(namaMhs);
// //Spread juga berfungsi untuk mengubah nodelist menjadi array
// const names = [...name].map(m => m.textContent);
// console.log(names);

const hi = document.querySelector('.hi');
const huruf = [...hi.textContent].map(m => `<span>${m}</span>`).join('');
hi.innerHTML = huruf;