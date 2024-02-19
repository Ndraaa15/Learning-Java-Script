//Merepresentasikan arguments pada function dalam bentuk array dengan jumlah tidak terbatas
//Rest parameter hanya digunakan dalam akhir argument
function myFunc(a, ...b){
    return `nilai a = ${a}, nilai b = ${b[0]}`;
    // Mengubah argument menjadi array karena yang awalnya bukan array
    // const x = Array.from(arguments);
}

console.log(myFunc(1, 2, 3, 4, 5,));

function sum (...nums){
    let ans = 0;
    for(y of nums){
        ans+=y;
    }
    return ans;
}
console.log(sum(2,3,4,5,6,7,8,9));

//Array Destructuring
const kelompok1 = ['indra', 'bayu', 'iman', 'sabda', 'jerome'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

//Object Destructuring
const project = { 
    pm : 'Gede',
    be : 'Indra',
    fe : 'Adi',
    pd : 'Brata'
}
//Ingat kalau object makek kurung kurawal
const {pm, ...team} = project;
console.log(pm)
console.log(team)
//Filtering
function filterBy(type, ...data){
    return data.filter(a => typeof a === type);
}
console.log(filterBy('number', 1, 2, 'Sayaplayer',  false, 1000, true, 'Doddy'));
console.log(filterBy('string', 1, 2, 'Sayaplayer',  false, 1000, true, 'Doddy'));
console.log(filterBy('boolean', 1, 2, 'Sayaplayer',  false, 1000, true, 'Doddy'));