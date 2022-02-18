function getInputValue(inputId) {
	const input = document.getElementById(inputId);
	const inputText = input.value;
	const inputAmount = parseFloat(inputText);
	input.value = "";
	return inputAmount;
}

function calculateAmount(amountId, amount) {
	const amountField = document.getElementById(amountId);
	const amountFieldText = amountField.innerText;
	const previosAmount = parseFloat(amountFieldText);
	const newAmount = previosAmount + amount;
	amountField.innerText = newAmount;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
	const amount = getInputValue("deposit-input");
	calculateAmount("deposit-amount", amount);
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
	const amount = getInputValue("withdraw-input");
	calculateAmount("withdraw-amount", amount);
});
