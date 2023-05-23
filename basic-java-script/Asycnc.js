// Asynchronous Javascript
// 1) Callback
// 2) Promises
// 3) Ajax
// 4) Async & await

// Java Script => Single Threaded, Non Blocking, Asynchronous, Concurrent language
// Single Threaded => Java script hanya bisa melakukan 1 tugas pada 1 waktu
// Non Blocking => Ketika mengerjakan suatu task apabila task tersebut belum selesai maka kita tetap bisa lanjut mengerjakan hal lain
// Asynchronous => Bisa mengerjakan suatu tugas yang lain terlebih dahulu karena threadnya berpindah pindah jadi meskipun tugasnya belum selesai
// Thread dapat berpindah ke proses lain hingga akhrinya test yang pertama selesai hingga akhir.
// Asynchronous + Single Threaded => Concurrent 
// Asynchronous + Multi Threaded => Parelism

// V8 Engine adalah mesin yang menajalankan java script
// Heap dan Stack
// Heap digunakan untuk alokasi memori
// Stack pemanggilan function  dan execution call

// Event Loop
// Ketika kita menggunakan function set time out maka fungsi yang ada di dalam function time out akan dipindahkan ke dalam WEB API
// WEB API ini mengelola event listener, ajax, DOM, setInterval => callback asychronous
// Apapun yang berkaitan dengan callback asynchronous akan dimasukan terlebih dahulu ke WEB API
// Setelah proses di WEB API selesai maka akan dipindahkan ke dalam callback queue
// Apabila di dalam stack sudah tidak ada perintah lagi maka event loop akan mengambil perintah yang ada di dalam callback queue