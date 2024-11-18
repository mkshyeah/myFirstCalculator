const resultElement = document.getElementById("result");
const num1 = document.getElementById("input1");
const num2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplicationBtn = document.getElementById("multiplication");
const divisionBtn = document.getElementById("division");
const submitBtn = document.getElementById("submit");

let action = "+"; // Хранит текущую операцию

plusBtn.onclick = function () {
  action = "+"; // Устанавливает операцию сложения
};

minusBtn.onclick = function () {
  action = "-"; // Устанавливает операцию вычитания
};

multiplicationBtn.onclick = function () {
  action = "*"; // Устанавливает операцию вычитания
};

divisionBtn.onclick = function () {
  action = "/"; // Устанавливает операцию вычитания
};

function resultColor(sum) {
  if (sum > 0) {
    resultElement.style.color = "green";
  } else if (sum < 0) {
    resultElement.style.color = "red";
  }
}

function computeNumbersWithAction(val1, val2, actionSymbol) {
  if (actionSymbol === "+") {
    return val1 + val2;
  } else if (actionSymbol === "-") {
    return val1 - val2;
  } else if (actionSymbol === "*") {
    return val1 * val2;
  } else if (actionSymbol === "/") {
    return val1 / val2;
  }
}

submitBtn.onclick = function () {
  const number1 = Number(num1.value) || 0;
  const number2 = Number(num2.value) || 0;

  let result = computeNumbersWithAction(number1, number2, action);

  resultColor(result);

  resultElement.textContent = result; // Отображает результат
};
