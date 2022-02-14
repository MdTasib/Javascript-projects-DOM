document.getElementById("deposit-btn").addEventListener("click", function () {
	const depositInput = document.getElementById("deposit-input");
	const depositAmountText = depositInput.value;
	const depositAmount = parseFloat(depositAmountText);

	depositInput.value = "";
});
