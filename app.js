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



// 4 Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

let displayValue = 0

const visorUI = document.getElementById('visor')
const numButtons = document.querySelectorAll('.buttons button.number')
const clearBtn = document.getElementById('clear')
console.log(visorUI, numButtons)

numButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    visorUI.textContent += e.target.value
    displayValue = parseInt(visorUI.textContent)
  })
})

clearBtn.addEventListener('click', clearVisor)



function clearVisor() {
  visorUI.textContent = ''
}