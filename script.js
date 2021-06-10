const resultElement = document.querySelector(".result");
const attributeInput = document.querySelector("#attribute");
const diceInput = document.querySelector("#dice");

attributeInput.addEventListener("input", refreshResultElement);
diceInput.addEventListener("input", refreshResultElement);

function refreshResultElement() {
  const diceValue = parseInt(diceInput.value);
  const attributeValue = parseInt(attributeInput.value);

  const result = getResult(diceValue, attributeValue);

  resultElement.innerHTML = result;
}

function getResult(dice, attribute) {
  if (isNaN(dice) || isNaN(attribute)) {
    return "...";
  }

  let result = "";
  const total = attribute;
  const metade = attribute / 2;
  const quinto = attribute / 5;

  if (dice == 100) {
    // FALHA CRÍTICA
    result = `FALHA CRÍTICA`;
  } else if (dice > total || total == 0) {
    // FALHA
    result = `FALHA`;
  } else if (dice == 1) {
    // CRÍTICO
    result = `CRÍTICO`;
  } else if (dice > metade && dice <= total) {
    // NORMAL
    result = `NORMAL`;
  } else if (dice > quinto && dice <= metade) {
    // BOM
    result = `BOM`;
  } else if (dice <= quinto && dice > 1) {
    // EXTREMO
    result = `EXTREMO`;
  }

  return result;
}

// let string = "";
// const attr = 10;
// string += `Atributo: ${attr}\n`;
// for (let i = 1; i <= 100; i++) {
//   string += getResult(i, attr) + " - Dado: " + i + "\n";
// }
// console.log(string);
