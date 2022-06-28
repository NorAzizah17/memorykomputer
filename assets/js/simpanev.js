const dbhasil = db.ref('db_hasil/').on('value', hasilSuccess, handleError)
let pev = 0;
var counter = 0;
function hasilSuccess(items1) {
    pev = items1.val().length;
    counter = pev;
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

    let database = firebase.database().ref("db_hasil/" + counter);
    database.set(task);

}