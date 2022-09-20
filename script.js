let numberDisplay = document.getElementById('number-display');
numberDisplay.textContent = '';
let equals = false;

const numButtons = document.querySelectorAll('.num-button');
numButtons.forEach(num => {
	num.addEventListener('click', () => {
		if (equals) {
			numberDisplay.textContent = '';
			numberDisplay.textContent += num.textContent;
			equals = false;
		} else {
			numberDisplay.textContent += num.textContent
		}
	});
});

const operatorButtons = document.querySelectorAll('.operator-button');

function operatorPressed(e) {
	//checks if it was click or keydown event which called function
		if (e.which) {
			if(e.target.id == 'equals') {
				num2 = numberDisplay.textContent;
				numberDisplay.textContent = '';
				//calls function & converts strings to integers and string to ...
				solution = operate(+num1, window[operator], +num2);
				numberDisplay.textContent = solution;
				equals = true;
				
			} else {
				operator = e.target.id;
				num1 = numberDisplay.textContent;
				numberDisplay.textContent = '';
			};
	} else {
		if(e.id == 'equals') {
			num2 = numberDisplay.textContent;
			numberDisplay.textContent = '';
			solution = operate(+num1, window[operator], +num2);
			numberDisplay.textContent = solution;
			equals = true;
			
		} else {
			operator = e.id;
			num1 = numberDisplay.textContent;
			numberDisplay.textContent = '';
		};
	};
	// console.log(equals);
};

for (let opBtn of operatorButtons) {
	opBtn.addEventListener('click', operatorPressed);
}
//adding keyboard function to it. Using Wes Bos' DrumKit tut for this!:
window.addEventListener('keydown', function(e) {
	
	const numPress = document.querySelector(`button[class~='num-button'][data-key='${e.key}']`);
	const operatorPress = document.querySelector(`button[class~='operator-button'][data-key='${e.key}']`);	
	if(numPress) {
		if (equals) {
			equals = false;
			numberDisplay.textContent = '';
			numberDisplay.textContent += numPress.textContent;
			
		} else {
			numberDisplay.textContent += numPress.textContent
		};
		
	} else if(operatorPress) {
		operatorPressed(operatorPress);
	} else {return;
	};
});

//need to reset display to no content after answer calculated before next 
//calculation entered.

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
	// console.log(num1, operator, num2)
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