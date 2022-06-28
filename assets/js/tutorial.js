// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//   apiKey: "AIzaSyDnNS-JVEEibV8uiAcMRoG_I-hISV6oAY4",
//   authDomain: "kemagnetan-ac738.firebaseapp.com",
//   projectId: "kemagnetan-ac738",
//   storageBucket: "kemagnetan-ac738.appspot.com",
//   messagingSenderId: "430277922401",
//   appId: "1:430277922401:web:45fa0234279c7194922420",
//   measurementId: "G-ZSQFR474K6"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const db = firebase.database();
// const dbkkm = db.ref('db_kkm/').on('value', kkmSuccess, handleError);

let loop1;

let kkm1 = 0;
let kkm2 = 0;
let kkm3 = 0;
let kkm4 = 0;
let kkm5 = 0;

function kkmSuccess(items1) {

  kkm1 = items1.val()[0]['kkm'];
  kkm2 = items1.val()[1]['kkm'];
  kkm3 = items1.val()[2]['kkm'];
  kkm4 = items1.val()[3]['kkm'];
  kkm5 = items1.val()[4]['kkm'];

}

function handleError(error) {
  console.log(error);
}

/*subbab 2*/
function index2(){
  //let skor = localStorage.getItem("nkuis1");
  let skor = 100;
  if (skor >= 0){
    window.location.href='../materi/index2.html';
  } else{
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}
function sub2_1(){
  // let skor = localStorage.getItem("nkuis1");
  let skor = 100;
  if (skor >= 0){
    window.location.href='../materi/sub2_1.html';
  } else{
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}
function sub2_2(){
  // let skor = localStorage.getItem("nkuis1");
  let skor = 100;
  if (skor >= 0){
    window.location.href='../materi/sub2_2.html';
  } else{
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}
function sub2_3(){
  // let skor = localStorage.getItem("nkuis1");
  let skor = 100;
  if (skor >= 0){
    window.location.href='../materi/sub2_3.html';
  } else{
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}
function sub2_4(){
  // let skor = localStorage.getItem("nkuis1");
  let skor = 100;
  if (skor >= 0){
    window.location.href='../materi/sub2_4.html';
  } else{
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}
function kuis2(){
    // let skor = localStorage.getItem("nkuis1");
  let skor = 100;
    if (skor >= 0){
      window.location.href='../materi/kuis2.html';
    } else{
      isiTutor.innerHTML = 'Kuis';
      $('#tutorialModal').modal('show');
    }
}


/*rangkuman*/
function rangkuman(){
  // let skor = localStorage.getItem("nkuis2");
  let skor = 100;
  if (skor >= 0){
    window.location.href='../materi/rangkuman.html';
  } else{
    isiTutor.innerHTML = 'Rangkuman';
    $('#tutorialModal').modal('show');
  }
}

/*evaluasi*/
function evaluasi(){
  // let skor = localStorage.getItem("nkuis2");
  let skor = 100;
  if (skor >= 0){
    window.location.href='../materi/evaluasi.html';
  } else{
    isiTutor.innerHTML = 'Evaluasi';
    $('#tutorialModal').modal('show');
  }
}