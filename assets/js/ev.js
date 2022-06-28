// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_DEj9oe9eCK7JeQeJFI91PnqNmX2OkaM",
    authDomain: "sistem-memori-komputer-619d3.firebaseapp.com",
    projectId: "sistem-memori-komputer-619d3",
    storageBucket: "sistem-memori-komputer-619d3.appspot.com",
    messagingSenderId: "423134820886",
    appId: "1:423134820886:web:691f1b867302dbeece1337",
    measurementId: "G-WQMSVHL85G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.database();
  const dbkkm = db.ref('db_kkm/').on('value', kkmSuccess, handleError)
  
  let loop1;
  let kkm5 = 0;
  
  function kkmSuccess(items1) {
    kkm5 = items1.val()[4]['kkm'];
  }
  
  function handleError(error) {
    console.log(error);
  }

var namaS = localStorage.getItem('nama');
var kelasS = localStorage.getItem('kelas');
var sekolahS = localStorage.getItem('sekolah');

const namaD = document.getElementById('namaD');
namaD.innerHTML = namaS;

const kelasD = document.getElementById('kelasD');
kelasD.innerHTML = kelasS;

const sekolahD = document.getElementById('sekolahD');
sekolahD.innerHTML = sekolahS;

let jawabB=[];

function mulai5() {
    if ((namaD == "") && (kelasD == "") && (sekolahD == "")) {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
    } else if((namaD == "")&&(kelasD == "")){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = '';
    } else if((namaD == "")&&(sekolahD == "")){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
    } else if((sekolahD == "")&&(kelasD == "")){
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
    } else if(namaD == ""){
        errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Nama harus diisi terlebih dahulu!
                            </div>`;
        errKelas.innerHTML = '';
        errSekolah.innerHTML = '';
    }else if(kelasD == ""){
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih kelas terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errSekolah.innerHTML = '';
    }else if (sekolahD == ""){
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Silahkan pilih sekolah terlebih dahulu!
                            </div>`;
        errNama.innerHTML = '';
        errKelas.innerHTML = '';
    } else{
        const dataEvaluasi = document.getElementById('dataEvaluasi');
        dataEvaluasi.hidden = true;
        
        const evaluasi = document.getElementById('evaluasi');
        evaluasi.hidden = false;
        
        listsoalev();
    }       
}

function listsoalev() {
    let noSoal = 1;
        function getSoal(url, success, error){
            let xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        success(xhr.response);
                    }else if(XPathEvaluator.status === 404){
                        error();
                    }
                }
            }
            xhr.open('get', url);
            xhr.send();
            }
            
            getSoal('../kuis/ev.json', (results) => {
            const listSoalJson = JSON.parse(results);
            let soal = '';
            let soalRand = [];
            let soalRandom = [];
            let i = 0;
            
            while (i < listSoalJson.length) {
                let rand = Math.floor(Math.random() * listSoalJson.length);
                soalRand[i] = listSoalJson[rand];
                soalRandom = Array.from(new Set(soalRand));
                i = soalRandom.length;
            }

            soalRandom.forEach(s => {
                soal += tampilSoal(s);
            });
            
            const listSoal = document.querySelector('.list-soal');
            listSoal.innerHTML = soal;
            
            document.getElementById("id1").hidden = false;
            document.getElementById("id2").hidden = true;
            document.getElementById("id3").hidden = true;
            document.getElementById("id4").hidden = true;
            document.getElementById("id5").hidden = true;
            document.getElementById("id6").hidden = true;
            document.getElementById("id7").hidden = true;
            document.getElementById("id8").hidden = true;
            document.getElementById("id9").hidden = true;
            document.getElementById("id10").hidden = true;
            document.getElementById("id11").hidden = true;
            document.getElementById("id12").hidden = true;
            document.getElementById("id13").hidden = true;
            document.getElementById("id14").hidden = true;
            document.getElementById("id15").hidden = true;
            document.getElementById("id16").hidden = true;
            document.getElementById("id17").hidden = true;
            document.getElementById("id18").hidden = true;
            document.getElementById("id19").hidden = true;
            document.getElementById("id20").hidden = true;
            
            }, () => {
            
            });
            
            countDownDate = new Date().getTime();
                        //waktu 30 menit
                        countDownDate += 1801000;
                        //waktu 45 menit
                        // countDownDate += 2700000;
                        // countDownDate += 12000;
                        //15 detik
                        // countDownDate += 17000;
                        var x = setInterval(function() {
                        var now = new Date().getTime();
                        var distance = countDownDate - now;
                            
                        // Perhitungan waktu untuk menit dan detik
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            
                        document.getElementById("waktu").innerHTML = minutes + ":" + seconds;
                            
                        if (distance < 0) {
                            clearInterval(x);
                            document.getElementById("waktu").innerHTML = "Waktu Selesai";
                            nilaiwktu=1;
                            cekEvaluasiTO();
                        }
                        }, 1000);
            
            let idx = 0;
            function tampilSoal(s){
                jawabB[idx++]=s.jawaban;
                return `<div id="id${idx}">
                    <form>
                    <p>${noSoal++}. ${s.soal}</p>
                    <input type="radio" id="jA${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="A">
                    <label for="A">${s.a}</label><br>
                    <input type="radio" id="jB${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="B">
                    <label for="B">${s.b}</label><br>
                    <input type="radio" id="jC${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="C">
                    <label for="C">${s.c}</label><br>
                    <input type="radio" id="jD${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="D">
                    <label for="D">${s.d}</label><br>
                    <input type="radio" id="jD${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="E">
                     <label for="E">${s.e}</label><br>
                    </form>
                    </div>`
            }
}


let evaluasi_1 = "";
let evaluasi_2 = "";
let evaluasi_3 = "";
let evaluasi_4 = "";
let evaluasi_5 = "";
let evaluasi_6 = "";
let evaluasi_7 = "";
let evaluasi_8 = "";
let evaluasi_9 = "";
let evaluasi_10 = "";
let evaluasi_11 = "";
let evaluasi_12 = "";
let evaluasi_13 = "";
let evaluasi_14 = "";
let evaluasi_15 = "";
let evaluasi_16 = "";
let evaluasi_17 = "";
let evaluasi_18 = "";
let evaluasi_19 = "";
let evaluasi_20 = "";
let nilai = 0;
function cek1(pilih){
    evaluasi_1 = pilih;
    document.getElementById("soal1").classList.add('active','btn-primary');
    document.getElementById("soal1").classList.remove('btn-light');
}
function cek2(pilih){
    evaluasi_2 = pilih;
    document.getElementById("soal2").classList.add('active','btn-primary');
    document.getElementById("soal2").classList.remove('btn-light');
}
function cek3(pilih){
    evaluasi_3 = pilih;
    document.getElementById("soal3").classList.add('active','btn-primary');
    document.getElementById("soal3").classList.remove('btn-light');
}
function cek4(pilih){
    evaluasi_4 = pilih;
    document.getElementById("soal4").classList.add('active','btn-primary');
    document.getElementById("soal4").classList.remove('btn-light');
}
function cek5(pilih){
    evaluasi_5 = pilih;
    document.getElementById("soal5").classList.add('active','btn-primary');
    document.getElementById("soal5").classList.remove('btn-light');
}
function cek6(pilih){
    evaluasi_6 = pilih;
    document.getElementById("soal6").classList.add('active','btn-primary');
    document.getElementById("soal6").classList.remove('btn-light');
}
function cek7(pilih){
    evaluasi_7 = pilih;
    document.getElementById("soal7").classList.add('active','btn-primary');
    document.getElementById("soal7").classList.remove('btn-light');
}
function cek8(pilih){
    evaluasi_8 = pilih;
    document.getElementById("soal8").classList.add('active','btn-primary');
    document.getElementById("soal8").classList.remove('btn-light');
}
function cek9(pilih){
    evaluasi_9 = pilih;
    document.getElementById("soal9").classList.add('active','btn-primary');
    document.getElementById("soal9").classList.remove('btn-light');
}
function cek10(pilih){
    evaluasi_10 = pilih;
    document.getElementById("soal10").classList.add('active','btn-primary');
    document.getElementById("soal10").classList.remove('btn-light');
}
function cek11(pilih){
    evaluasi_11 = pilih;
    document.getElementById("soal11").classList.add('active','btn-primary');
    document.getElementById("soal11").classList.remove('btn-light');
}
function cek12(pilih){
    evaluasi_12 = pilih;
    document.getElementById("soal12").classList.add('active','btn-primary');
    document.getElementById("soal12").classList.remove('btn-light');
}
function cek13(pilih){
    evaluasi_13 = pilih;
    document.getElementById("soal13").classList.add('active','btn-primary');
    document.getElementById("soal13").classList.remove('btn-light');
}
function cek14(pilih){
    evaluasi_14 = pilih;
    document.getElementById("soal14").classList.add('active','btn-primary');
    document.getElementById("soal14").classList.remove('btn-light');
}
function cek15(pilih){
    evaluasi_15 = pilih;
    document.getElementById("soal15").classList.add('active','btn-primary');
    document.getElementById("soal15").classList.remove('btn-light');
}
function cek16(pilih){
    evaluasi_16 = pilih;
    document.getElementById("soal16").classList.add('active','btn-primary');
    document.getElementById("soal16").classList.remove('btn-light');
}
function cek17(pilih){
    evaluasi_17 = pilih;
    document.getElementById("soal17").classList.add('active','btn-primary');
    document.getElementById("soal17").classList.remove('btn-light');
}
function cek18(pilih){
    evaluasi_18 = pilih;
    document.getElementById("soal18").classList.add('active','btn-primary');
    document.getElementById("soal18").classList.remove('btn-light');
}
function cek19(pilih){
    evaluasi_19 = pilih;
    document.getElementById("soal19").classList.add('active','btn-primary');
    document.getElementById("soal19").classList.remove('btn-light');
}
function cek20(pilih){
    evaluasi_20 = pilih;
    document.getElementById("soal20").classList.add('active','btn-primary');
    document.getElementById("soal20").classList.remove('btn-light');
}
$(function(){
    setInterval(cek, 1000);
});

let evaluasi=[];
function cek(){
    evaluasi=[evaluasi_1,evaluasi_2,evaluasi_3,evaluasi_4,evaluasi_5,evaluasi_6,evaluasi_7,evaluasi_8,evaluasi_9,evaluasi_10,evaluasi_11,evaluasi_12,evaluasi_13,evaluasi_14,evaluasi_15,evaluasi_16,evaluasi_17,evaluasi_18,evaluasi_19,evaluasi_20];
}
        
function cekEvaluasi(){
    if ((evaluasi_1 == "") || (evaluasi_2 == "") || (evaluasi_3 == "") || (evaluasi_4 == "") || (evaluasi_5 == "") || (evaluasi_6 == "") || (evaluasi_7 == "") || (evaluasi_8 == "") || (evaluasi_9 == "") || (evaluasi_10 == "") || (evaluasi_11 == "") || (evaluasi_12 == "") || (evaluasi_13 == "") || (evaluasi_14 == "") || (evaluasi_15 == "") || (evaluasi_16 == "") || (evaluasi_17 == "") || (evaluasi_18 == "") || (evaluasi_19 == "") || (evaluasi_20 == "")) {
        $('#ModalKuisKosong').modal('show')
        $('#ModalEvaluasi').modal('hide')
    } else {
        $('#ModalEvaluasi').modal('hide')
        for (let a = 0; a < jawabB.length; a++) {
            if (evaluasi[a] == jawabB[a]){
                const evaluasi = document.getElementById('evaluasi');
                evaluasi.hidden = true;
                const hasil2 = document.getElementById('hasilEvaluasi');
                hasil2.hidden = false;
                nilai = nilai + 5;
            }  
        }

        localStorage.setItem("nev", nilai);
        
        if (nilai < kkm5) {
            const namaHTL = document.getElementById('namaHTL');
            namaHTL.innerHTML = namaS;
            const kelasHTL = document.getElementById('kelasHTL');
            kelasHTL.innerHTML = kelasS;
            const sekolahHTL = document.getElementById('sekolahHTL');
            sekolahHTL.innerHTML = sekolahS;
            const nilaiHTL = document.getElementById('nilaiHTL');
            nilaiHTL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = false;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = true;
        } else {
            const namaHL = document.getElementById('namaHL');
            namaHL.innerHTML = namaS;
            const kelasHL = document.getElementById('kelasHL');
            kelasHL.innerHTML = kelasS;
            const sekolahHL = document.getElementById('sekolahHL');
            sekolahHL.innerHTML = sekolahS;
            const nilaiHL = document.getElementById('nilaiHL');
            nilaiHL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = true;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = false;
        }

        let harinya = hari();
        let waktunya = waktu();

        createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
    }
}

function cekEvaluasiTO() {
    const evaluasi = document.getElementById('evaluasi');
    evaluasi.hidden = true;
    const hasil2 = document.getElementById('hasilEvaluasi');
    hasil2.hidden = false;
    for (let a = 0; a < jawabB.length; a++) {
        if (evaluasi[a] == jawabB[a]){
            nilai = nilai + 5;
        }  
    }

    localStorage.setItem("nev", nilai);
    
    if (nilai < kkm5) {
        const namaHTL = document.getElementById('namaHTL');
        namaHTL.innerHTML = namaS;
        const kelasHTL = document.getElementById('kelasHTL');
        kelasHTL.innerHTML = kelasS;
        const sekolahHTL = document.getElementById('sekolahHTL');
        sekolahHTL.innerHTML = sekolahS;
        const nilaiHTL = document.getElementById('nilaiHTL');
        nilaiHTL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = false;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = true;
    } else {
        const namaHL = document.getElementById('namaHL');
        namaHL.innerHTML = namaS;
        const kelasHL = document.getElementById('kelasHL');
        kelasHL.innerHTML = kelasS;
        const sekolahHL = document.getElementById('sekolahHL');
        sekolahHL.innerHTML = sekolahS;
        const nilaiHL = document.getElementById('nilaiHL');
        nilaiHL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = true;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = false;
    }

    let harinya = hari();
    let waktunya = waktu();

    createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
}

let indeks = document.getElementById("indeks");
indeks.innerHTML = 1;

function soal1(){
    indeks.innerHTML = 1;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("soalPrev").hidden = true;
    document.getElementById("id1").hidden = false;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal2();" );
}

function soal2(){
    indeks.innerHTML = 2;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = false;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal1();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal3();" );
}

function soal3(){
    indeks.innerHTML = 3;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = false;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal2();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal4();" );
}

function soal4(){
    indeks.innerHTML = 4;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = false;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal3();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal5();" );
}

function soal5(){
    indeks.innerHTML = 5;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = false;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal4();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal6();" );
}

function soal6(){
    indeks.innerHTML = 6;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = false;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal5();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal7();" );
}

function soal7(){
    indeks.innerHTML = 7;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = false;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal6();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal8();" );
}

function soal8(){
    indeks.innerHTML = 8;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = false;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal7();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal9();" );
}

function soal9(){
    indeks.innerHTML = 9;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = false;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal8();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal10();" );
}

function soal10(){
    indeks.innerHTML = 10;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = false;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal9();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal11();" );
}

function soal11(){
    indeks.innerHTML = 11;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = false;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal10();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal12();" );
}

function soal12(){
    indeks.innerHTML = 12;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = false;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal11();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal13();" );
}

function soal13(){
    indeks.innerHTML = 13;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = false;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal12();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal14();" );
}

function soal14(){
    indeks.innerHTML = 14;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = false;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal13();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal15();" );
}

function soal15(){
    indeks.innerHTML = 15;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = false;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal14();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal16();" );
}

function soal16(){
    indeks.innerHTML = 16;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = false;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal15();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal17();" );
}

function soal17(){
    indeks.innerHTML = 17;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = false;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal16();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal18();" );
}

function soal18(){
    indeks.innerHTML = 18;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = false;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal17();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal19();" );
}

function soal19(){
    indeks.innerHTML = 19;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = false;
    document.getElementById("id20").hidden = true;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal18();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal20();" );
}

function soal20(){
    indeks.innerHTML = 20;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = true;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("id16").hidden = true;
    document.getElementById("id17").hidden = true;
    document.getElementById("id18").hidden = true;
    document.getElementById("id19").hidden = true;
    document.getElementById("id20").hidden = false;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal19();" );
}