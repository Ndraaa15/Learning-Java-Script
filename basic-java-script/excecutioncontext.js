// var nama = 'Indra'
// console.log(nama);

//Creation phase pada global contect
//1. Dia mencari variabel yang ada di source code
//Dan membuat nama var menjadi undefined
//Dan membuat nama function = fn ()
//Proses ini disebut hoisting
//Window = global object
//This = window

//Execution phase
//Jadi dia akan mengeksekusi sesuai urutan

//Dalam function juga memerlukan return untuk mengembalikan nilai

//Dalam function sendiri terdapat suatu proses yang sama
//Namun memiliki nama local execution context (hoisting dan execution)
//Window
//Arguments (hal yang diambil di dalam suatu fungsi seperti parameter)
//hoisting

//Scope merupakan suatu proses mencari suatu local variabel terdekat
//Apabila tidak ditemukan maka akan lanjut ke scope yang lebih besar

//Setelah seuatu excecution function maka function tersebut akan menghilang


//Chill bisa kok

function satu (){
    var nama = 'Indra';
    console.log(nama)
}
function dua (){
    console.log(nama);
}

console.log(nama);

satu();
dua('Adi');

var nama = 'Maha';
console.log(nama);
