// //Callback sebuah function yang dikirimkan pada function lain sebagai parameter
// //Function lain setelah suatu function lains selesai dilaksanakan

// function halo (nama){
//     alert(`hallo ${nama}!`);
// }
// function tampilkanPesan (callback){
//     const nama = prompt('Masukkan nama : ');
//     callback(nama);
// }

// tampilkanPesan(halo);
// // pada pemanggilan function halo tidak perlu diberi () apabila diberi maka akan langsung dieksekusi
// // apabila tidak berisi () maka function akan menjalankan function tampilkan pesan terlebih dahulu dan menunggu function halo dipanggil
// // Proses di atas sycnchronous callback namun yang sering akan digunakan adalah Asynchronous

// tampilkanPesan( nama => alert(`Hallo ${nama}`));
// //Penulisannya juga bisa dilakukan seperti perintah di atas.


// const mhs = [
//     {
//      name : 'Gede Indra Adi Brata',
//      NIM : '225150200111006',
//      age : 19
//     },
//     {
//      name : 'Rafiqi Ahmad Nasution',
//      NIM : '225150200111005',
//      age : 19
//     },
//     {
//      name : 'Javier Aahmes Reansyah',
//      NIM : '225150200111004',
//      age : 20
//     }
// ];

//Asynchronous Callback
function getDataMahasiswa (url, succes, error){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                succes(xhr.response);
            }else if (xhr.status === 404){
                error();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}

// function succes (){

// }
// function error(){

// }
// apabila tidak ingin membuat callback function bisa membuat function sendiri
//JSON.parse berfungsi untuk mengubah data berbentuk json menjadi obejct.
getDataMahasiswa('JavaScript/Mahasiswa.json', (result) => {
const mahasiswa = JSON.parse(result);
mahasiswa.forEach(element => {
   console.log(element.name); 
});
}, () => {
    console.log('Maaf data tidak ditemukan');
});


//Jquery
console.log('Mulai');
$.ajax({
    url: 'JavaScript/Mahasiswa.json',
    succes : (mhs) => {
        mhs.forEach((m) => console.log(m.name));    
    
    },
    error : console.log('Maaf data tidak ditemukan')
})

console.log('Selesai');

