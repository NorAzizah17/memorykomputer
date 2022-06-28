let mouse = 0;

var t=setInterval(tes,1000);
function mouseTes() {
   t=setInterval(tes,1000);
}
function tes() {
   if (mouse < 300000) {
      mouse += 1000;
   } else {
      clearInterval(t);
      $('#mouseModal').modal('show')
   }
}

document.addEventListener('mouseout', async function(e){
   if (!e) {
      console.log("Bergerak");
   } else {
      mouse = 0;
   }
});