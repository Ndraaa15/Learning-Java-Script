//Object Literal
//Tidak efektif kalau banyak object
let mahasiswa1 = {
    nama : 'Indra',
    energy : 100,
    makan: function (porsi){
        this.energy = this.energy + 10;
        console.log(`Selamat makan ${this.nama}`);
    }
}

let mahasiswa2 = {
    nama : 'Adi',
    energy : 90,
    makan: function (porsi){
        this.energy = this.energy + 10;
        console.log(`Selamat makan ${this.nama}`);
    }
}
//

//Function Declaration
const mehtodMahasiswa = {
    makan : function (porsi){
        this.energy += porsi;
        console.log(`Selamat makan ${this.nama}`);
    },
    main : function (main){
        this.energy -= main;
        console.log(`Selamat bermain ${this.nama}`);
    },
    tidur: function (tidur){
        this.energy +=  tidur * 2;
        console.log(`Selamat tidur ${this.nama}`);
    }
};


function mahasiswa3 (nama, energy){
    //{} -> object
    //Daripada cara tidak efektif ini lebih baik menggunakan object.create
    let mahasiswa = Object.create(mehtodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    //Harus pakek return
    return mahasiswa;
}

let indra = mahasiswa3('Indra', 95);
//



//Prototype
//Secara default constructor function sudah memiliki parent namanya prototype
function mahasiswa4 (nama, energy){
    this.nama = nama;
    this.energy = energy;
}

mahasiswa4.prototype.makan = function (porsi){
    this.energy += porsi;
    return `Selamat makan ${this.nama}`;
}
mahasiswa4.prototype.main = function (main){
    this.energy -= main;
    return `Selamat main ${this.nama}`;
}
mahasiswa4.prototype.tidur = function (tidur){
    this.energy += 2 * tidur;
    return `Selamat tidur ${this.nama}`;
}

let brata = new mahasiswa4('Brata', 100);
//






//Constructor Function
function mahasiswa5 (nama, energy){
    this.nama = nama;   
    this.energy = energy;

    this.makan = function (porsi){
        this.energy += porsi;
        console.log(`Selamat makan ${this.nama}`);
    }

    this.main = function (waktu){
        this.energy -= waktu;
        console.log(`Selamat bermain ${this.nama}`);
    }
  //Gaperlu pakai return
}

let adi = new mahasiswa5('Adi', 100);
//


//Versi class
class Mahasiswa{
    constructor (nama, energy){
        this.nama = nama;
        this.energy = energy;
    
    }
    makan (porsi){
        this.energy +=porsi;
    }
    main (main){
        this.energy += main;
    }
    tidur (tidur){
        this.energy += tidur;
    }
}

let gede = new Mahasiswa('Gede', 100);



