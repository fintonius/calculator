let numberDisplay = document.getElementById('number-display');
numberDisplay.textContent = '';
let equals = '';

const numButtons = document.querySelectorAll('.num-button');
numButtons.forEach(num => {
	num.addEventListener('click', () => {
		if (equals == 'pressed') {
			numberDisplay.textContent = '';
			numberDisplay.textContent += num.textContent;
			equals = '';
		} else {
			numberDisplay.textContent += num.textContent
		}
	});
});

const operatorButtons = document.querySelectorAll('.operator-button');

//so, the problem is using the same function on a click and a keydown event doesn't
//seem to work as they require different ways to check the relevant id: either with
//'e.id' or 'e.target.id' and each doesn't work on the other. Find a way to combine the 
//two or a single chaeck type that will look for both?
function operatorPressed(e) {
	console.log(e.id);
	if(e.id == 'equals') {
		num2 = numberDisplay.textContent;
		numberDisplay.textContent = '';
		//calls function & converts strings to integers and string to ...
		solution = operate(+num1, window[operator], +num2);
		numberDisplay.textContent = solution;
		equals = 'pressed';
		
	} else {
		operator = e.id;
		num1 = numberDisplay.textContent;
		numberDisplay.textContent = '';
		// console.log(operator, num1)
	};
}

for (let opBtn of operatorButtons) {
	opBtn.addEventListener('click', operatorPressed);
}
//adding keyboard function to it. Using Wes Bos' DrumKit tut for this!:
window.addEventListener('keydown', function(e) {
	// console.log(e.key);
	const numPress = document.querySelector(`button[class~='num-button'][data-key='${e.key}']`);
	const operatorPress = document.querySelector(`button[class~='operator-button'][data-key='${e.key}']`);
	
	if(numPress) {
		numberDisplay.textContent += numPress.textContent;
	} else if(operatorPress) {
		operatorPressed(operatorPress);
	} else {return;
	}
});

//use the keycode rather than text or symbols for the operators
//NEED TO MATCH KEYCODE TO DATA-KEY??? No: .which and .keyCode have both been deprecated. 
//Use .key now, which returns a string that matches the key pressed. 
//Pressing the 'a' key returns 'a', 'B' returns 'B', '1' returns '1', etc. 
//It means there's no need to find a keycode anymore as the .key value
//is literally the same as the key being pressed/listened for!
//Does this mean I can just listen for the textContent of the key pressed? I think
//I'm getting confused here...

//if e !== data-key return
//else input.textContent = e.textContent
//???

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