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
	const typeInput = document.getElementById("typed-numbers");
	const number = event.target.innerText;

	if (isNaN(number)) {
		if (number == "C") {
			typeInput.value = "";
		}
	} else {
		const previosNumber = typeInput.value;
		const newNumber = previosNumber + number;
		typeInput.value = newNumber;
	}
});

function submitVerify() {
	const pin = document.getElementById("display-pin").value;
	const typePin = document.getElementById("typed-numbers").value;
	const success = document.getElementById("success");
	const error = document.getElementById("error");

	if (pin == typePin) {
		success.style.display = "block";
		error.style.display = "none";
	} else {
		success.style.display = "none";
		error.style.display = "block";
	}
}
