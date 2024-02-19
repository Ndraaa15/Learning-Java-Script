//Var ini masuk di global scope

// var i = 10;
// console.log(i);

function tes (){
    for (var i = 0; i < 10; i ++){
    console.log(i);
    }
}
tes();

// for (var i = 0; i < 10; i ++){
//     console.log(i);
// }
// console.log(i);
//Code di atas membuktikan bahwa var ini global scope

//Let ini menggunakan function scope jadi scopenyanya itu lebih kecil dari var
//Const sendiri tidak bisa diubah nilainya --> Meminimalisis perubahan state

const indra = {
    umur : 19,
    hobby : 'Valorant'
}

indra.hobby = 'Futsal';
//Perubahan di atas bisa untuk mengubah propertynya

indra = {
    jurusan : 'Teknik Informatika'
}
//Perubahan di atas tidak bisa karena merubah isi objek

const i = [1,2,3];
i = [1, 2, 3, 4];
//Perubahan di atas tidak bisa

i.push(4);
//Perubahan di atas bisa