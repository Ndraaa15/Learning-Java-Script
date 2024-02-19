//Destructuring Assignment merupakan expression pada java script yang memungkinkan kita untuk membongkar nilai array atau properti
//ke dalam nilai yang terpisah.

const num = [1, 2, 3];
const [a, b, c] = num;
// Skipping items
// const [a, , c] = num;
console.log(a);
console.log(b);
console.log(c);

const mhs = {
    nama : 'Gede Indra Adi Brata',
    umur : 19,
    email : 'indrabrata599@gmail.com'
}
//Membuat nama baru di komponen objectnya
//Serta membuat komponen baru yang tidak ada di object sekaligus menambahkan nilai default ke dalamnya
const {nama : o, umur :i, email :u, alamat : f = 'Soehat'} = mhs;
console.log(o);
console.log(i);
console.log(u);
console.log(f);


let x = 1;
let y = 2 ;
//Swapping
[x, y] = [y, x];
console.log(x);
console.log(y);


//membuat function menjadi destructuring assigment
function h (){
    return [1, 2];
}
const [p , q] = h();
console.log(p);
console.log(q);

//Rest parameter "...x"
const [num1, ...nums] = [6, 2, 3, 4, 5, 6, 7];
console.log(num1);
console.log(nums);
console.log(nums[1]);


//Destructuring object

({name, age, mail} = {
    name : 'Gede Indra Adi Brata',
    age : 19,
    mail : 'indrabrata599@gmail.com'
});
console.log(name);
console.log(age);
console.log(mail);



///Implementasi
const mhs3 = {
    nama : 'Gede Indra Adi Brata',
    umur : 19,
    email : 'indrabrata599@gmail.com'
}

function getId({email}){
    return email;
}

const kk = getId(mhs3);
console.log(kk);