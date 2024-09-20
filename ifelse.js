let nama = 'kevin';
let sedekah = true;
let infaq = false;

if (nama) {
    if (sedekah) {
        console.log(nama + 'barakallah fii umrik, semoga sedekah anda diterima oleh Allah')
    } else {
        console.log (nama + 'alhamdulillah, terima kasih atas infaq saudara')
    }
}else {
    console.log(nama + 'maaf nama kamu belum terdaftar')
}