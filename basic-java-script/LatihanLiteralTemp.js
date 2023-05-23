//HTML Fragment
// const mhs = {
//     name :'Gede Indra Adi Brata',
//     umur : 19,
//     NIM  : '225150200111006',
//     email : 'indrabrata66@student.ub.ac.id'
// }

// const el = `<div>
//     <h2>${mhs.name}</h2>
//     <span class = "nrp">${mhs.NIM}</span>
// </div>`;

//Looping
const mhs = [
    {
        name :'Gede Indra Adi Brata',
        umur : 19,
        NIM  : '225150200111006',
        email : 'indrabrata666@student.ub.ac.id'
    },
    {
        name :'Ni Kadek Intan Olivia Italiyana',
        umur : 20,
        NIM  : '225150200111007',
        email : 'intanolivia666@student.ub.ac.id'
        }
];

const el = `<div>
${mhs.map (m => `<ul>
    <li>${m.name}</li>
    <li>${m.umur}</li>
    <li>${m.NIM}</li>
    <li>${m.email}</li>
</ul>`).join("") }
</div>`;
document.body.innerHTML = el;