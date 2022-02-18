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

function updateTotal(amount, isAdding) {
	const totalAmount = document.getElementById("total-amount");
	const totalAmountText = totalAmount.innerText;
	const previosAmount = parseFloat(totalAmountText);
	let total;
	if (isAdding) {
		total = previosAmount + amount;
	} else {
		total = previosAmount - amount;
	}

	totalAmount.innerText = total;
}

function getInnerTextValue(fieldId) {
	const fieldTag = document.getElementById(fieldId);
	const fieldValue = fieldTag.innerText;
	const value = parseFloat(fieldValue);
	return value;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
	const amount = getInputValue("deposit-input");
	if (amount > 0) {
		calculateAmount("deposit-amount", amount);
		updateTotal(amount, true);
	}
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
	const amount = getInputValue("withdraw-input");
	const totalBalance = getInnerTextValue("total-amount");
	if (amount > 0 && amount <= totalBalance) {
		calculateAmount("withdraw-amount", amount);
		updateTotal(amount, false);
	}
});
