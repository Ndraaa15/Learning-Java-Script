//Function yang beroperasi pada function lain baik digunakan sebagai argument atau return value
//Javascript memberlakukan function sebagai objek
//Function yang disimpan sebagai argument disebut callback

function kerjakanTugas (mataKuliah, selesai){
    console.log(`Sedang mengerjakan ${mataKuliah}`);
    selesai();
}

function selesai (){
    alert(`Selamat anda telah menyelesaikan tugas!`);
}

kerjakanTugas('Pemrograman Dasar', selesai);