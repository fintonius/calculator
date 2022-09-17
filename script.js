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
		//calls function & converts strings to integers and string to ...
		solution = operate(+num1, window[operator], +num2);
		numberDisplay.textContent = solution;
		
	} else {
		operator = e.target.id;
		num1 = numberDisplay.textContent;
		numberDisplay.textContent = '';
		// console.log(operator, num1)
	};
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

//adding keyboard function to it. Using Wes Bos' DrumKit tut for this!:
window.addEventListener('keydown', function(e) {
	const numPress = document.querySelector(`button[class~='num-button'][data-key='${e.key}']`);
	const operatorPress = document.querySelector(`button[class~='operator-button'][data-key='${e.key}']`);
	if(!numPress) return; 
	numberDisplay.textContent += numPress.textContent;
});
//NEED TO MATCH KEYCODE TO DATA-KEY??? No: //.which and .keyCode have both been deprecated. 
//Use .key now, which returns a string //that matches the key pressed. 
//Pressing the 'a' key returns 'a', 'B' returns 'B', '1' returns '1', etc. 
//It means there's no need to find a keycode anymore as the .key value
//is literally the same as the key being pressed/listened for!
//Does this mean I can just listen for the textContent of the key pressed? I think
//I'm getting confused here...

//if e !== data-key return
//else input.textContent = e.textContent
//???