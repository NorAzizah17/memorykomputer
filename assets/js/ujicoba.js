function ujicoba(dblink) {
    const dbujicoba = db.ref(dblink).on('value', handleSuccess, handleError);
    let pk1 = 0;
    let counter = 0;

    function handleSuccess(items1) {
        pk1 = items1.val().length;
        counter = pk1;

        let nama1 = document.getElementById('nama').value;
        let kelas1 = document.getElementById('kelas').value;
        let sekolah1 = document.getElementById('sekolah').value;
        let link = document.getElementById('link').value;

        validasi(counter, nama1, kelas1, sekolah1, link, dblink)
    }
}

function validasi(counter, nama1, kelas1, sekolah1, link, dblink){
    const errNama = document.getElementById('errNama');
    const errKelas = document.getElementById('errKelas');
    const errSekolah = document.getElementById('errSekolah');
    const errLink = document.getElementById('errLink');
    if ((nama1 == "") && (kelas1 == "") && (sekolah1 == "") && (link == "")) {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
        errLink.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Link harus diisi terlebih dahulu!
                            </div>`;
    } else if ((nama1 == "") && (kelas1 == "") && (sekolah1 == "")) {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
        errLink.innerHTML = '';
    } else if ((nama1 == "") && (kelas1 == "") && (link == "")) {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errLink.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Link harus diisi terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = '';
    } else if ((nama1 == "") && (sekolah1 == "") && (link == "")) {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
        errLink.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Link harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
    } else if ((kelas1 == "") && (sekolah1 == "") && (link == "")) {
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
        errLink.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Link harus diisi terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
    } else if((nama1 == "")&&(kelas1 == "")){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = '';
    } else if((nama1 == "")&&(sekolah1 == "")){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
        errLink.innerHTML = '';
    } else if((nama1 == "")&&(link == "")){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errLink.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Link harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
        errSekolah.innerHTML = '';
    } else if((kelas1 == "")&&(link == "")){
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errLink.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Link harus diisi terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errSekolah.innerHTML = '';
    } else if((sekolah1 == "")&&(kelas1 == "")){
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errLink.innerHTML = '';
    } else if((sekolah1 == "")&&(link == "")){
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errLink.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Link harus diisi terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errKelas.innerHTML = '';
    } else if(nama1 == ""){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
        errSekolah.innerHTML = '';
        errLink.innerHTML = '';
    }else if(kelas1 == ""){
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errSekolah.innerHTML = '';
        errLink.innerHTML = '';
    }else if (sekolah1 == ""){
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errKelas.innerHTML = '';
        errLink.innerHTML = '';
    } else if (link == ""){
        errLink.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Link harus diisi terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errKelas.innerHTML = '';
        errSekolah.innerHTML = '';
    } else{  
        let harinya = hari();
        let waktunya = waktu();

        createUjiCoba(counter, sekolah1, nama1, kelas1, link, waktunya, harinya, dblink);
        $('#modalSubmit').modal('hide');
    }
}

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

function createUjiCoba(counter, sekolah, nama, kelas, link, waktunya, hari, namalink) {
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        link: link,
        nilai: 0,
        waktu: waktunya,
        hari: hari
    }
    let database = firebase.database().ref(namalink + counter);
    database.set(task);
}