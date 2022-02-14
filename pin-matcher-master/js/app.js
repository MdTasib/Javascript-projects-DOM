function getPin() {
	const pin = Math.round(Math.random() * 10000);
	const pinString = pin + "";

	if (pinString.length == 4) {
		return pin;
	} else {
		return getPin();
	}
}

function generatePin() {
	const pin = getPin();
	document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
	const number = event.target.innerText;
	const calcInput = document.getElementById("typed-numbers");

	if (isNaN(number)) {
		if (number == "C") {
			calcInput.value = "";
		}
	} else {
		const previosNumber = calcInput.value;
		const newNumber = previosNumber + number;
		calcInput.value = newNumber;
	}
});

function submitVerify() {
	const pin = document.getElementById("display-pin").value;
	const typePin = document.getElementById("typed-numbers").value;
	const succesMessage = document.getElementById("success");
	const errorMessage = document.getElementById("error");

	if (pin == typePin) {
		succesMessage.style.display = "block";
		errorMessage.style.display = "none";
	} else {
		succesMessage.style.display = "none";
		errorMessage.style.display = "block";
	}
}
