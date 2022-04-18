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

let displayValue = 0

// Variable declarations
const visorUI = document.getElementById('visor')
const numButtons = document.querySelectorAll('.grid-container .number')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const percentageBtn = document.getElementById('percentage')
const decimalBtn = document.getElementById('decimal')
const equalBtn = document.getElementById('equal')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')


// Loop through buttons that are numbers and adding an event Listener to them
numButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (visorUI.textContent === '0') {
      visorUI.textContent = ''
    }
    visorUI.textContent += e.target.value
    displayValue = parseInt(visorUI.textContent)
  })
})

clearBtn.addEventListener('click', clearVisor)



function clearVisor() {
  visorUI.textContent = '0'
  displayValue.textContent = ''
}

let firstValue = 0
// let secondValue = 0
let sign = ''

plusBtn.addEventListener('click', () => {
  firstValue = +visorUI.textContent
  visorUI.textContent !== 0 || visorUI.textContent !== '' ? clearVisor() :
    console.log('+')
  sign = '+'
})


minusBtn.addEventListener('click', () => {
  clearVisor()
  return '-'
})
multiplyBtn.addEventListener('click', () => {
  clearVisor()
  return '*'
})
divideBtn.addEventListener('click', () => {
  clearVisor()
  return '/'
})

equalBtn.addEventListener('click', () => {
  visorUI.textContent = operate(sign, firstValue, +visorUI.textContent)

})

