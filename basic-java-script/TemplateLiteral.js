//Template string adalah string literal yang memungkinkan ada sebuah expression di dalamnya.
//Template liiteral hanya bisa digunakan dengan menggunakan backtick
//Dengan backtick kita bisa menggunakan emmbeded expression, multiline string, hmtml fragments, expression interpolation, tagged template

console.log(`Gede\indra\adi\brata`);
console.log(`Gede
indra 
adi
brata`);


const firstName = 'Gede';
const lastName = 'Brata';

console.log(`My Name is ${firstName} ${lastName}`);


//HTML Fragment
const mhs = {
    name :'Gede Indra Adi Brata',
    umur : 19,
    NIM  : '225150200111006',
    email : 'indrabrata66@student.ub.ac.id'
}

const el = `<div>...</div>`





//Embedded Expresion
const x = 10;
console.log(`${x % 2 == 0 ? 'Genap' : 'Ganjil'} `);