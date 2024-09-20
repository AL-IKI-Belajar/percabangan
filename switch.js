let nama = 'kevin';
var datang = 7;
var umur = 26;

switch(true){
    case datang < 7:
        console.log('kamu datang lebih awal')
        break;
    case datang > 7:
        console.log('kamu datang terlambat, besok lebih cepat ya')
        break;
    case datang == 7:
        console.log('kamu datang tepat waktu')
        break;
    case umur != 26:
        console.log('anda tidak dikenali')
        break;
    default : 
        console.log('kondisi tidak dikenali')
        break;
}