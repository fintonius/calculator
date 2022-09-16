let numberDisplay = document.getElementById('number-display');
numberDisplay.textContent = '';

const numButtons = document.querySelectorAll('.num-button');
numButtons.forEach(num => {
	num.addEventListener('click', () => {numberDisplay.textContent += num.textContent});
});

const operatorButtons = document.querySelectorAll('.operator-button');

function operatorPressed(e) {
	
	if(e.target.id === 'equals') {
		num2 = numberDisplay.textContent;
		numberDisplay.textContent = '';
		console.log(typeof(operator));
		solution = operate(+num2, operator, +num1);
		alert(solution);
		
	} else {
		operator = e.target.id;
		num1 = numberDisplay.textContent;
		numberDisplay.textContent = '';
		console.log(operator, num1)};
}

for (let opBtn of operatorButtons) {
	opBtn.addEventListener('click', operatorPressed);
}

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
	return a * b;
};

function divide(a, b) {
	return a / b;
};

function operate(num1, operator, num2) {
	console.log(num1, operator, num2)
	let answer = '';
	switch(operator) {
		case add:
			answer = add(num1, num2);
			break;
		case subtract:
			answer = subtract(num1, num2);
			break;
		case multiply:
			answer = multiply(num1, num2)
			break;
		case divide:
			answer = divide(num1, num2);
			break;
		default:
			answer = `Something's wrong`;		
	}
	return answer;
}