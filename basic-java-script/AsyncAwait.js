//Async adalah sebuah function yang bekerja secara asynchronous yang menghasilkan implisit promises sebagai return valuenya
//Tapi cara penulisan pada async menggunakan penulisan yang synchronous (standard)

//Sebuha async function dapat memiliki keyword await, keyword ini berfungsi untuk memberhentikan sementara eksekusi fungsinya
//Sambil menunggu promisenya selesai

// const coba = new Promise((resolve, reject) => {

//     setTimeout(() => {resolve('Selesai')}, 2000);

// });

// coba.then(() => console.log(coba));

//Penerapan async dan await

function cobaPromises (){
    return new Promise((resolve, reject) => {
        const time = 10000;
        if (time < 5000){
            setTimeout(() => {resolve('Selesai')}, time);
        }else{
            reject ('Too long');
        }
    });
};

// const coba = cobaPromises();
// coba.then(() => console.log(coba));
// coba.catch(() => console.log(coba));

//Pengunaan try and catch untuk handle error

async function cobaAsync (){
    try {
        const coba = await cobaPromises();
        console.log(coba);
    }catch (err){
        console.log(err);
    }
}