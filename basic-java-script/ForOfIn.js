// for .. of => creates a loop iterating over iterable object
// iterable object : String, Array, arguments, Typed Array, Map, set, user defined iterable
const mhs = ['Indra', 'Olivia', 'Kadek'];

for(let i = 0; i < mhs.length; i ++){
    console.log(mhs[i]);
}

mhs.forEach((element, index) => {
    console.log(`${element} adalah mahasiswa ke-${index}`);
});

//Secara default for of tidak memiliki index namun dapat diakali dengan entries.
for (const m of mhs.entries()){
    console.log(m);
}

for (const [i, m] of mhs.entries()){
    console.log(`${m} adalah mahasiswa anak ke-${i}`);
}


//String
const nama = 'Indra';
for(const n of nama){
    console.log(n);
}


//Nodelist
const listNama = document.querySelectorAll('.nama');
listNama.forEach(n => console.log(n.innerHTML));

for (n of listNama){
    console.log(n.innerHTML);
}
console.log(listNama);

//Arguements => array yang menampung param
//Argument tidak bisa digunakan pada reduce, forEach
function sumNum (){
    let sum = 0;
    for (a of arguments){
        sum+=a;
    }
    return sum;
}

console.log(sumNum(1, 2, 3, 4 ,5));


///
//For in creates loop only iterating over enumerable (properti pada object)
const baba = {
    nama  : 'Indra',
    umur  : 19,
    alamat : 'Suhat'
}

for(a in baba){
    console.log(a);
}
//Untuk mengambil value dari properti di object kita menggunakan nama object dan mengisi nama dari element x[element]
for(a in baba){
    console.log(baba[a]);
}


