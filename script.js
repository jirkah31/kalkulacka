const button = document.querySelector(".buttons");

const display = document.querySelector("#screen");

const h2 = document.querySelector('h2');

const example = [];

button.addEventListener("click", (event) => {
	const keyValue = event.target.value;

	const displayValue = h2.innerText;
	//když mačkám čísla
	if (keyValue != undefined &&
		keyValue != "+" &&
		keyValue != "-" &&
		keyValue != "/" &&
		keyValue != "*" &&
		keyValue != "+/-" &&
		keyValue != "=" &&
		keyValue != "CE") 
		{
		if (displayValue == 0) { 			//když je hodnota 0, tak aby to přepsalo display
			h2.innerText = keyValue;
			cislo = h2.innerText;
		} else {							//pokračování zapisování do displaye
			h2.innerText = displayValue + keyValue;
			cislo = h2.innerText;
		}
	}

	if (keyValue == "+" ||
		keyValue == "-" ||
		keyValue == "/" ||
		keyValue == "*") {
		cislo = h2.innerText;
		example.push(cislo);
		mark = event.target.value;
		example.push(mark);
		h2.innerText = 0;
	}

	if (keyValue == "=") {
		cislo = h2.innerText;
		example.push(cislo);
		var result = eval(example.join(''));
		h2.innerText = result;

		for (var i = example.length; 0 < i; i--) {
			example.pop();
		}
	}

	if (keyValue == "CE") {
		for (var i = example.length; 0 < i; i--) {
			example.pop();
		}
		h2.innerText = 0;
	}
	
	if (keyValue == "+/-") {
		cislo = h2.innerText * (-1);
		h2.innerText = cislo;
	}
});
