const button = document.querySelector(".buttons");

const h2 = document.querySelector('h2');

const example = [];

button.addEventListener("click", (event) => {
	const keyValue = event.target.value;

	const displayValue = h2.innerText;

	if (keyValue != undefined &&
		keyValue != "+" &&
		keyValue != "-" &&
		keyValue != "/" &&
		keyValue != "*" &&
		keyValue != "+/-" &&
		keyValue != "=" &&
		keyValue != "CE") {
		if (h2.innerText.length < 10) {
			if (displayValue == 0) {
				h2.innerText = keyValue;
				cislo = h2.innerText;
			} else {
				h2.innerText = displayValue + keyValue;
				cislo = h2.innerText;
			}
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

	if (keyValue == "del") {
		h2.innerText = 0;
	}
});