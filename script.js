const btnEl = document.querySelectorAll("button");

const resultInputEl = document.getElementById("result");

for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", () => {
    const inputNum = btnEl[i].textContent;

    if (inputNum === "C") {
      clearResult();
    } else if (inputNum === "=") {
      resultEl();
    } else {
      appendEl(inputNum);
    }
  });
}

function clearResult() {
  resultInputEl.value = "";
}

function resultEl() {
  resultInputEl.value = eval(resultInputEl.value);
}
function appendEl(inputNum) {
  resultInputEl.value = resultInputEl.value + inputNum;
}
