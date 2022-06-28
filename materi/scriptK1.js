document.addEventListener("DOMContentLoaded", () => {
  const check = document.querySelector(".check");
  let answerUser = document.querySelectorAll(".answer");
  const answer = [
    "flashdisk",
    "hard disk",
    "ram",
  ];
  const message = document.querySelector("#message");

  check.addEventListener("click", () => {
    wrong = 0;

    answer.forEach((item, index) => {
      if (answerUser[index].value.toLowerCase() !== item) {
        answerUser[index].style.border = "2px solid red";
        answerUser[index].style.backgroundColor = "red";
        answerUser[index].style.color = "white";
        wrong++;
      } else {
        answerUser[index].style.border = "2px solid green";
        answerUser[index].style.backgroundColor = "green";
        answerUser[index].style.color = "white";
      }
    });

    if (wrong > 0) {
      message.innerHTML = `
      <div class="card">
        <div class="card-body">
          <span class="text-danger">ada jawaban yang salah</span>
        </div>
      </div>`;
    } else if (wrong === 6) {
      message.innerHTML = `
      <div class="card">
        <div class="card-body">
          <span class="text-danger">jawaban salah semua</span>
        </div>
      </div>`;
    } else {
      message.innerHTML = `
      <div class="card">
        <div class="card-body">
          <span class="text-success">Jawaban benar semua</span>
        </div>
      </div>`;
    }
  });
});
