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
  let kkm2 = 0;
  
  function kkmSuccess(items1) {
    kkm2 = items1.val()[1]['kkm'];
  }
  
  function handleError(error) {
    console.log(error);
  }

//Local Storage
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

function mulai2() {
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
        const dataKuis2 = document.getElementById('dataKuis2');
        dataKuis2.hidden = true;
        
        const latihan2 = document.getElementById('kuis2');
        latihan2.hidden = false;
        
        listsoal2();
    }       
}

function listsoal2() {
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
            
            getSoal('../kuis/kuis2.json', (results) => {
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
            
            }, () => {
            
            });
            
            countDownDate = new Date().getTime();
                        //waktu 30 menit
                        countDownDate += 901000;
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
                            cekKuis2TO();
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



let kuis2_1 = "";
let kuis2_2 = "";
let kuis2_3 = "";
let kuis2_4 = "";
let kuis2_5 = "";
let kuis1_6 = "";
let kuis1_7 = "";
let kuis1_8 = "";
let kuis1_9 = "";
let kuis1_10 = "";
let nilai = 0;
function cek1(pilih){
    kuis2_1 = pilih;
    document.getElementById("soal1").classList.add('active','btn-primary');
    document.getElementById("soal1").classList.remove('btn-light');
}
function cek2(pilih){
    kuis2_2 = pilih;
    document.getElementById("soal2").classList.add('active','btn-primary');
    document.getElementById("soal2").classList.remove('btn-light');
}
function cek3(pilih){
    kuis2_3 = pilih;
    document.getElementById("soal3").classList.add('active','btn-primary');
    document.getElementById("soal3").classList.remove('btn-light');
}
function cek4(pilih){
    kuis2_4 = pilih;
    document.getElementById("soal4").classList.add('active','btn-primary');
    document.getElementById("soal4").classList.remove('btn-light');
}
function cek5(pilih){
    kuis2_5 = pilih;
    document.getElementById("soal5").classList.add('active','btn-primary');
    document.getElementById("soal5").classList.remove('btn-light');
}
function cek6(pilih){
    kuis2_6 = pilih;
    document.getElementById("soal6").classList.add('active','btn-primary');
    document.getElementById("soal6").classList.remove('btn-light');
}
function cek7(pilih){
    kuis2_7 = pilih;
    document.getElementById("soal7").classList.add('active','btn-primary');
    document.getElementById("soal7").classList.remove('btn-light');
}
function cek8(pilih){
    kuis2_8 = pilih;
    document.getElementById("soal8").classList.add('active','btn-primary');
    document.getElementById("soal8").classList.remove('btn-light');
}
function cek9(pilih){
    kuis2_9 = pilih;
    document.getElementById("soal9").classList.add('active','btn-primary');
    document.getElementById("soal9").classList.remove('btn-light');
}
function cek10(pilih){
    kuis2_10 = pilih;
    document.getElementById("soal10").classList.add('active','btn-primary');
    document.getElementById("soal10").classList.remove('btn-light');
}
$(function(){
    setInterval(cek, 1000);
});

let kuis2=[];
function cek(){
    kuis2=[kuis2_1,kuis2_2,kuis2_3,kuis2_4,kuis2_5,kuis2_6,kuis2_7,kuis2_8,kuis2_9,kuis2_10];
}
        
function cekKuis2(){
    if ((kuis2_1 == "") || (kuis2_2 == "") || (kuis2_3 == "") || (kuis2_4 == "") || (kuis2_5 == "") ||
    (kuis2_6 == "") || (kuis2_7 == "") || (kuis2_8 == "") || (kuis2_9 == "") || (kuis2_10 == "")) {
        $('#ModalKuisKosong').modal('show')
        $('#ModalSubmit2').modal('hide')
    } else {
        $('#ModalSubmit2').modal('hide')
        for (let a = 0; a < jawabB.length; a++) {
            if (kuis2[a] == jawabB[a]){
                const latihan2 = document.getElementById('kuis2');
                latihan2.hidden = true;
                const hasil2 = document.getElementById('hasilKuis2');
                hasil2.hidden = false;
                nilai = nilai + 10;
            }  
        }
        localStorage.setItem("nkuis2", nilai);

        if (nilai < kkm2) {
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

function cekKuis2TO() {
    const latihan2 = document.getElementById('kuis2');
    latihan2.hidden = true;
    const hasil2 = document.getElementById('hasilKuis2');
    hasil2.hidden = false;
    for (let a = 0; a < jawabB.length; a++) {
        if (kuis2[a] == jawabB[a]){
            nilai = nilai + 10;
        }  
    }
    localStorage.setItem("nkuis2", nilai);

    if (nilai < kkm2) {
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
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal8();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal10();" );
}
function soal10(){
    indeks.innerHTML = 10;
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
    document.getElementById("id10").hidden = false;
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal9();" );
}