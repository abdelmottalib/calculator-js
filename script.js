const numbers = document.querySelectorAll(".numbers");
const screen = document.querySelector(".para");
const toShow = document.querySelectorAll(".show");
const operators = document.querySelectorAll(".operator");
const upper = document.querySelector(".upper");
const lower = document.querySelector(".lower");
const equal = document.getElementById('equal');
const block = document.querySelector(".block");
const main = document.querySelector(".main");
const aboveOper = document.createElement('div');
const theme = document.querySelector(".theme-div");
const del = document.getElementById('del');
const blue = document.querySelectorAll(".blue");
const reset = document.getElementById('reset');
const calc = document.querySelector(".calc");
aboveOper.classList.add('aboveOper');
let flag = 1;
let string = "";
let trigger = 0;
let value = 0;
let trigger2 = 1;

toShow.forEach(item => item.addEventListener('click', (e)=> {
	string += e.target.innerHTML;
	screen.textContent = string;
}))


operators.forEach(operator => operator.addEventListener('click', (e)=> {
	aboveOper.innerHTML = string + ' ' + operator.innerHTML;
	if (trigger) {
		aboveOper.innerHTML = value + ' ' + operator.innerHTML;
		trigger = 0;
	}
	if(flag) {
		upper.insertBefore(aboveOper, upper.firstChild);
		string = "";
	}
	trigger2 = 1;
}))

function calculate(operator, left, right) {
	if (operator == '+')
		value = left + right;
	if (operator == '-')
		value = left - right;
	if (operator == 'x')
		value = left * right;
	if (operator == '/')
		value = left / right;
	aboveOper.innerHTML = left + ' ' + operator + ' ' + right;
	screen.innerHTML = value;
	trigger = 1;
	trigger2 = 0;
}

equal.addEventListener('click', ()=> {
	let stringAbove = aboveOper.innerHTML;
	let operatorString = stringAbove.substring(stringAbove.length - 1, stringAbove.length);
	let leftOper = parseFloat(stringAbove.substring(0, stringAbove.length - 2));
	let rightOper = parseFloat(screen.textContent);
	if (trigger2) {
		calculate(operatorString, leftOper, rightOper);
	}
})


function resett() {
	string = "";
	screen.innerHTML = "0";
	aboveOper.innerHTML = "";
}
reset.addEventListener('click', ()=> {
	resett();
})

del.addEventListener('click', ()=> {
	string = string.slice(0, -1);
	screen.innerHTML = string;
})

let flag2 = 1;
theme.addEventListener('click', (e)=> {
	if (flag2) {
		lightMode();
		flag2 = 0;
	}
	else if (!flag2) {
		darkMode();
		flag2 = 1;
	}

})
function lightMode() {
	document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
	main.style.backgroundColor = "hsl(0, 0%, 90%)"
	lower.style.backgroundColor = "hsl(0, 5%, 81%)";
	upper.style.backgroundColor = "hsl(0, 0%, 93%)"
	upper.style.color = "black";
	block.style.backgroundColor = "hsl(45, 7%, 89%)"
	equal.style.backgroundColor = "hsl(25, 98%, 40%)";
	blue.forEach(bluee => {
		bluee.style.backgroundColor = "hsl(185, 42%, 37%)";
	})
	calc.style.color = "black";
	theme.innerHTML = "LIGHT";
	theme.style.backgroundColor = "hsl(185, 42%, 37%)";
}

function darkMode() {
	document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
	main.style.backgroundColor = "hsl(222, 26%, 31%)"
	lower.style.backgroundColor = "hsl(223, 31%, 20%)";
	upper.style.backgroundColor = "hsl(224, 36%, 15%)"
	upper.style.color = "white";
	block.style.backgroundColor = "hsl(30, 25%, 89%)"
	equal.style.backgroundColor = "hsl(25, 98%, 40%)";
	blue.forEach(bluee => {
		bluee.style.backgroundColor = "hsl(225, 58%, 67%)";
	})
	calc.style.color = "white";
	theme.innerHTML = "DARK";
	theme.style.backgroundColor = "hsl(225, 58%, 67%)";
}
