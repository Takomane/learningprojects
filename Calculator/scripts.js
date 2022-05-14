//gives a way to set the text inside the Calculator class
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) { //sets variables for class
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() { //clears the calculator
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
}

    delete() { //deletes the last number in the calculator

    }

    appendNumber(number) { //appends a number to the calculator
        this.currentOperand = number
    }

    chooseOperation(operation) { //chooses an operation

    }

    compute() { //computes the result

    }

    updateDisplay() { //updates the display
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

//defines the calculator Numbers & Functions
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButtons = document.querySelectorAll('[data-equals]');
const allclearButtons = document.querySelectorAll('[data-all-clear]');
const deleteButtons = document.querySelectorAll('[data-delete]');
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]');
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText) //allows the button to show up in the result
        calculator.updateDisplay() //updates the display with the numbers when clicked
        })
    })