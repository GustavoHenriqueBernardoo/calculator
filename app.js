// Variable declarations
const visorUI = document.getElementById('visor')
const currentValueUI = document.getElementById('current-value')
const previousValueUI = document.getElementById('previous-value')
const numButtons = document.querySelectorAll('.grid-container .number')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const percentageBtn = document.getElementById('percentage')
const decimalBtn = document.getElementById('decimal')
const equalBtn = document.getElementById('equal')
// const operatorsBtn = document.querySelectorAll('#operators')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
let displayValue = 0
let firstValue = 0
let result = 0
let sign = ''

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
function operate(operator, n1, n2) {
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


function clearVisor() {
  visorUI.textContent = 0
  displayValue.textContent = ''
  result = 0
  sign = ''
}
// console.log(operatorsBtn)
// operatorsBtn.forEach(operator => {
//   operator.addEventListener('click', () => {
//     if (operator.innerText === '+') return console.log('+')
//   })
// })

clearBtn.addEventListener('click', clearVisor)
console.log(plusBtn)
plusBtn.addEventListener('click', () => {
  // if (firstValue !== 0 || result > 0) {
  //   console.log('enter here')
  // result = operate('+', firstValue, +visorUI.textContent)
  //   console.log(result)
  //   visorUI.textContent = result
  //   firstValue = result
  //   visorUI.textContent = ''
  // } else {
  // if (result > 0) {
  //   // console.log('result', result)
  //   visorUI.textContent = result
  //   firstValue = result

  // } else {
  //   // console.log('else')
  //   firstValue = +visorUI.textContent
  // }

  // if (visorUI.textContent !== 0 || visorUI.textContent !== '') {
  //   visorUI.textContent = ''

  //   sign = '+'
  //   console.log(firstValue, result)
  //   // console.log(add(firstValue, +visorUI.textContent))
  //   result = firstValue
  // }
  firstValue = +visorUI.textContent
  if (visorUI.textContent !== 0 || visorUI.textContent !== '') visorUI.textContent = ''
  sign = '+'
})

minusBtn.addEventListener('click', () => {
  firstValue = +visorUI.textContent
  if (visorUI.textContent !== 0 || visorUI.textContent !== '') visorUI.textContent = ''
  sign = '-'
})

multiplyBtn.addEventListener('click', () => {
  firstValue = +visorUI.textContent
  if (visorUI.textContent !== 0 || visorUI.textContent !== '') visorUI.textContent = ''
  sign = '*'
})

divideBtn.addEventListener('click', () => {
  firstValue = +visorUI.textContent
  if (visorUI.textContent !== 0 || visorUI.textContent !== '') visorUI.textContent = ''
  sign = '/'
})


equalBtn.addEventListener('click', () => {
  visorUI.textContent = operate(sign, firstValue, +visorUI.textContent)

})


// 12 + 7 - 5 * 3 = should yield 42