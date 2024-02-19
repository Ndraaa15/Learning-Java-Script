// //Tagged Template => bentuk kompleks dari literal template  yang memungkinkan kita untuk membaca template literal dari sebuah fungsi
// const name = 'Indra';
// const umur = 19;

// function coba (String, ...values){
//     // let output= ''
//     // String.forEach((str , i) => {
//     //     output += `${str}${values[i] || ''}`;
//     // });
//     // return output;
//     return String.reduce((output, str, i) => `${output}${str}${values[i] || ''}`, '');
// }
// //fungsi dari ... values ini untuk menyimpan element yang ada di literal dan disimpan dalam bentuk array
// //Atau di function juga bisa berisi argument dari nama template literal yang ada


// const literal = coba `Nama saya ${name} berumur ${umur}`;
// console.log(literal);



///Highlight
const nama = 'Indra';
const age = 19;

function highlight (String, ...values){
    return String.reduce((output, str, i) => `${output}${str}<span class = "hl">${values[i] || ''}</span>`, '');
}



const latihan = highlight `Nama saya ${nama} berumur ${age}`;
document.body.innerHTML = latihan;

//Internationalization
//Menggunakan library i18n

