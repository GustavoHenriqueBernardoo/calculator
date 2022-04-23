// Variable declarations
const displayCalculator = document.getElementById('visor')
// const displayPrevious = document.getElementById('previous-value')
const numButtons = document.querySelectorAll('.grid-container .number')
const operatorButtons = document.querySelectorAll('.operator')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const decimalBtn = document.getElementById('decimal')
const equalBtn = document.getElementById('equal')

displayCalculator.textContent = '0'
let firstValue = 0
let operatorValue = ''
let nextValue = false


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
  else if (operator == '/') {
    if (n1 === 0 | n2 === 0) {
      alert('Sorry! I am going to prevent you from crash my calculator LOL')
      clearFunc()
    } else {
      return divide(n1, n2)

    }
  }

  // else return 'Please enter a valid symbol'
}
// console.log(operate('*', 2, 5))


// Function which update the display
function updateDisplay(number) {

  // Replace display content if first value was assigned
  if (nextValue) {
    displayCalculator.textContent = number
    nextValue = false
  } else {
    // if display value is 0, replace with the number entered
    const displayValue = displayCalculator.textContent
    displayCalculator.textContent = displayValue === '0' ? number : displayValue + number

  }
}


function updateOperate(operator) {

  // Setting the first value to a variable
  const currentValue = parseFloat(displayCalculator.textContent)

  if (operator === 'delete') {
    displayCalculator.textContent = displayCalculator.textContent.substring(0, displayCalculator.textContent.length - 1)
    return
  }

  // Prevent enter multiple operators
  if (operatorValue && nextValue) {
    operatorValue = operator
    return
  }
  // Checking if firstValue is 0 to assign the first value to current value
  if (!firstValue) {
    firstValue = currentValue
  }
  else {
    console.log(firstValue, operatorValue, currentValue)
    const result = operate(operatorValue, firstValue, currentValue)
    displayCalculator.textContent = result
    firstValue = result
    console.log(result)
  }
  if (operator === '=') {
    displayCalculator.textContent = firstValue
  }

  // Ready to store the next value
  nextValue = true
  operatorValue = operator


  // console.log('first value', firstValue)
  // console.log('Operator value', operatorValue)
}

function decimalNum() {
  if (nextValue) return

  // if no decimalBtn, add one
  if (!displayCalculator.textContent.includes('.')) {
    displayCalculator.textContent = `${displayCalculator.textContent}.`
  }
}

// Clear all the variable values
function clearFunc() {
  displayCalculator.textContent = '0'
  firstValue = 0
  operatorValue = ''
  nextValue = false
}

numButtons.forEach(numButton =>
  numButton.addEventListener('click', () => updateDisplay(numButton.value)))

// Operator buttons loop 
operatorButtons.forEach(operatorButton => {
  // checking if the operator button contains a specific class
  if (operatorButton.classList.contains('operator')) {
    operatorButton.addEventListener('click', () => updateOperate(operatorButton.value)
    )
  }
})


// Buttons event Listener
clearBtn.addEventListener('click', () => clearFunc())
decimalBtn.addEventListener('click', () => decimalNum())
equalBtn.addEventListener('click', (e) => updateOperate(e.target.value))
deleteBtn.addEventListener('click', () => { updateOperate('delete') })