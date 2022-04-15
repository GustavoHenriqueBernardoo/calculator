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



// Creating a new function that takes a operator and 2 numbers and call any of the above functions
const operate = (operator, n1, n2) => {
  if (operator == '+') return add(n1, n2)
  else if (operator == '-') return subtract(n1, n2)
  else if (operator == '*') return multiply(n1, n2)
  else if (operator == '/') return divide(n1, n2)
  else return 'Please enter a valid symbol'
}
console.log(operate('*', 2, 5))




// I will use this later on

// function operator(...num) {
//   return operator(num)
// }
// function operate(operator) {
//   return operator
// }
// console.log(operate(divide(10, 5)))
