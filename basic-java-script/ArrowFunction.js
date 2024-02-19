//Bentuk lain yang lebih ringkas dari function expression
let panggilNama = function (nama){
    console.log (`Hallo ${nama}`);
}
panggilNama('Indra');

//Can be simplified
let panggilNama1 = (nama, waktu) => {
    console.log (`Hallo ${nama}, selamat ${waktu}`);
}
panggilNama1('Indra', 'malam');

//Kalau 1 parameter boleh tidak menggunakan dalam kurung dan tidak menggunakan kurung kurawal apabila hanya 1 return dan kata return

let mahasiswa = ['Indra', 'Bayu', 'Robert'];
//map berfungsi untuk mengambil atau memetakan semua property yang ada di dalam array.
let jumlahHuruf = mahasiswa.map(function (name){
    return name.length;
})
console.log(jumlahHuruf);

//Lebih ringkas
let jumlahHuruf1 = mahasiswa.map(name => name.length);
console.log(jumlahHuruf1);

//Apabila ingin membuat objek
//Kalau ingin membuat object memerlukan ( { } )
let jumlahHuruf2 = mahasiswa.map(name => ({namaMahasiswa : name, jummlahHurufNama : name.length}));
console.table(jumlahHuruf2);


//Konsep This pada arrow function
//Function constructor
//Membuat objek biasakan diawali dengan huruf besar
//Keyword this ini mengaju pada property yang ada di object Mahasiswa
//Function pada object tidak bisa menggunakan arrow function
const Mahasiswa = function (){
    this.name = 'Indra';
    this.age = 19;
    this.sayHello = () => {
        console.log (`Saya ${this.name}, berusia ${this.age} tahun`);
    }
}
const indra = new Mahasiswa();

//Object Literal
//This pada literal objek akan berfungsi untuk mencari variabel di dalam lexical scope apabila menggunakan function biasa.
const mhsw1 = {
    name : 'Indra',
    age : 19,
    sayHello : function(){
        console.log(`Saya ${this.name}, berusia ${this.age} tahun`);
    }
}

///
const mhsw2 = {
    name : 'Indra',
    age : 19,
    sayHello : () => {
        // console.log(`Saya ${this.name}, berusia ${this.age} tahun`);
        // Apabila menggunakan this maka akan undefined karena dalam object tersebut tidak ada keyword this
        // Secara langsung tidak ada apabila menggunakan arrow func maka akan dilanjutkan ke window bukan ke lexical scope
        //Singkatnya Arrow function tidak memiliki konsep this
        console.log(`Saya ${name}, berusia ${age} tahun`);
    }
}



const MahasiswaK = function (){
    this.name = 'Indra';
    this.age = 19;
    this.sayHello = () => {
        console.log (`Saya ${this.name}, berusia ${this.age} tahun`);
    }
    setInterval(function (){
        console.log(this.age++);
    })
    //Function expression tidak memerlukan hoisting
    //Kalau function declaration memerlukan hoisting
    //Hoisting -> Global scope
    //Karena proses di atas tidak menggunakan function expression maka akan terkena hoisting
    //Dan secara langsung akan mencari variabel age ke global scope tidak di lexical scopenya terlebih dahulu
    //Function declaration punya konsep this
}
const indraK = new Mahasiswa();

//Cara untuk mengatasi masalah di atas dengan menggunaan arrow function karena arrow function tidak memiliki function this

const MahasiswaL = function (){
    this.name = 'Indra';
    this.age = 19;
    this.sayHello = () => {
        console.log (`Saya ${this.name}, berusia ${this.age} tahun`);
    }
    setInterval(()=>{
        console.log(this.age++);
    })
    //Karena arrow function tidak memiliki konsep this maka dia akan pindah ke lexical scope
}
const indraL = new Mahasiswa();


//
const box = document.querySelector('.box');
box.addEventListener('click', function (){
    let satu = 'size';
    let dua = 'caption';
    

    if (this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
     
        //Function untuk merubah posisi
    }

    this.classList.toggle(satu);
    setTimeout(() =>{
        this.classList.toggle(dua);
    }, 600)
});

