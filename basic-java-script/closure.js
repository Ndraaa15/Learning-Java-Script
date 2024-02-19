//Sebuah function yang memiliki akses ke parent scopenya meskipun parent scopenya telah dieksekusi
//Sebuah function yang sebelumnya memiliki data, hasil dari function lain

//Local Variabel = Variabel yang dibuat di dalam function

//Inner function adalah function yang ada di dalam function dan memerlukan variabel di dalam scope (closure)
//Inget!!! -> Setelah manggil function dihoisting dulu semua baru di assign nilai variabelnya


function init (){
    let nama  = 'Indra';
    function tampilNama (){
        console.log (nama);
    }
    tampilNama();
}
init();

//Pada proses di bawah ini hanya terjadi sebagian proses saja bukan proses keseluruhan
//Oleh karena itu kita memerlukan suatu variabel untuk menyimpan function
function init (){
    let nama  = 'Indra';
    function tampilNama (){
        console.log (nama);
    }
    return tampilNama;
}
let nameCalled = init();
nameCalled();
//Jadi fungsi tampil nama ini dimasukkan kedalam variabel name called.
//Inget prosesnya terjadi 1 1 -> Hoisting - Execution

function init (){
    let nama  = 'Indra';
    //Function anonymous
    return function (){
        console.log (nama);
    }
}
let nameCalled1 = init();
nameCalled1();


//Cara membuat variabel factory -> Penerapan closure
//Inti dari penerapan closure ini adalah bagaimana nilai dari variabel itu diambil berdasarkan scopenya/
function salam (waktu){
    return function (nama){
        return (`Halo selamat ${waktu} ${nama} semoga harimu menyenangkan!`)
    }
}

let selamatPagi = salam('Pagi');
let selamatSing = salam('Siang');
let selamatMalam = salam('Malam');
selamatPagi('Indra');


//Cara membuat sebuah variabe menjadi private
//Code dibawah tidak berfungsi apabila variabel counter diubah suatu saat nanti
// let counter = 0;
// let add = function (){
//     return ++counter;
// }

// console.log(add());


let add = (function (){
    let counter = 0;
    return function () {
        return ++counter;
    }
}) ();
//Penulisan di atas disebut IIFE = Imediately Invoked Function Expression
//Nilai dari counter tidak dapat diakses dari luar karena menjadi closure
// let a = add();
console.log(add());
console.log(add());
console.log(add()); 


for (var i = 0; i < 3; i++){
    const log = ()=>{
        console.log(i);
    }
    setTimeout(log, 100);
}
//It will be return 3 3 3 because using var

