import { Calculator } from './calculator.js';

// Initialize the calculator when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

	// Select all buttons and the display element
	const displayElement = document.querySelector('.display');
	const numberButtons = document.querySelectorAll('.number');
	const decimalButton = document.querySelector('.decimal');
	const clearButton = document.querySelector('.clear');
	const equalsButton = document.querySelector('.equals');
	const percentButton = document.querySelector('.percent');
	const toggleSignButton = document.querySelector('.toggle-sign');
	const operationButtons = document.querySelectorAll('.operation');;

	// Creates a new instance of the Calculator class
	const calculator = new Calculator(displayElement, operationButtons);

	// Attach an event handler to each number button
	numberButtons.forEach(button => {
		button.addEventListener('click', () => {
			calculator.appendNumber(button.textContent);
		});
	});

	// Attach event handler to the decimal button
	decimalButton.addEventListener('click', () => {
		calculator.appendDecimal();
	});

	// Attach event handler to the AC button
	clearButton.addEventListener('click', button => {
		calculator.clear();
	});

	// Attach an event handler to each operation button
	operationButtons.forEach(button => {
		button.addEventListener('click', () => {
			calculator.chooseOperation(button.getAttribute('data-operation'));
		});
	});

	// Attach event handler to the percent button
	percentButton.addEventListener('click', () => {
		calculator.applyPercentage();
	});

	// Attach event handler to the toggle sign button
	toggleSignButton.addEventListener('click', () => {
		calculator.applyReverseSign();
	});

	// Attach event handler to the equal button
	equalsButton.addEventListener('click', button => {
		calculator.compute();
		calculator.removeRingOperation();
		calculator.updateDisplay();
	});
});