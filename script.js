const button = document.querySelector(".buttons");

const display = document.querySelector("#screen");

button.addEventListener("click", (event) => {
	const keyValue = event.target.value;
	console.log(keyValue);

	const displayValue = display.textContent;
	console.log(displayValue);

	if (displayValue == 0) {
		display.textContent = keyValue;
	} else {
		display.textContent = displayValue + keyValue;
	}
});


	// document.addEventListener("click", (udalost) => {
	// 	const one1 = one.value; //vrací mi číslo, které jsem zmáčknul
	// 	console.log(one1);
	// });

	// two.addEventListener("click", (udalost) => {
	// 	const two2 = two.value;
	// 	console.log(two2);
	// });

	// const screen = document.getElementById("screen");
	// screen.innerText = "cislo";
