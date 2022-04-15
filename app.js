function add(...num) {
  return num.reduce((a, b) => a += b)
}

function subtract(...num) {
  return num.reduce((a, b) => a -= b)
}

function multiply(...num) {
  return num.reduce((a, b) => a * b)
}

function divide(...num) {
  return num.reduce((a, b) => a / b)
}


console.log(divide(100, 50))