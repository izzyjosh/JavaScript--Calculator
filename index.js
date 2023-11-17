let displayValue = "";
let displayContent = document.querySelector(".display")

function display(value) {
  displayValue += value;
  displayContent.innerHTML = displayValue;
}

function clearDisplay() {
  displayValue = "";
  displayContent.innerHTML = displayValue;
}

function calculate() {
  let result = eval(displayContent.innerHTML);
  displayContent.innerHTML = result;
  displayValue = "";
}
