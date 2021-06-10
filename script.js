/*
  Falha crítica (100)
  Falha (número maior que o atributo)
  Normal (número do dado que fica entre o valor do Bom e do atributo (no caso de 30 = 30-16)
  Bom (Metade do atributo, fica entre o extremo e o normal, no caso do 30 = 15 - 7)
  Extremo (Quinto do atributo, que que vai ficar entre o quinto e o 2, já que 1 é crítico)
*/

const resultElement = document.querySelector(".result");
const attributeInput = document.querySelector("#attribute");
const diceInput = document.querySelector("#dice");

attributeInput.addEventListener("input", refreshResultElement);
diceInput.addEventListener("input", refreshResultElement);

function refreshResultElement() {
  const diceValue = diceInput.value;
  const attributeValue = attributeInput.value;

  const result = getResult(diceValue, attributeValue);

  resultElement.innerHTML = result;
}

function getResult(dice, attribute) {
  if (!dice || !attribute) {
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
// const attr = 40;
// string += `Atributo: ${attr}\n`;
// for (let i = 1; i <= 100; i++) {
//   string += getResult(i, attr);
// }
// console.log(string);
