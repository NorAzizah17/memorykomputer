
const dbkuis2 = db.ref('db_kuis2/').on('value', kuis2Success, handleError)
let pk2 = 0;
var counter = 0;
function kuis2Success(items1) {
    pk2 = items1.val().length;
    counter = pk2;
}

function handleError(error) {
    console.log(error);
}


// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}


function createTask(sekolah, nama, kelas, nilai, waktunya, hari) {
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        nilai: nilai,        
        waktu: waktunya,
        hari: hari,
    }

    let database = firebase.database().ref("db_kuis2/" + counter);
    database.set(task);
}