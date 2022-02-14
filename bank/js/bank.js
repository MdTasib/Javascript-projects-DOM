// get deposit handler
document.getElementById("deposit-btn").addEventListener("click", function () {
	const depositInput = document.getElementById("deposit-input");
	// const newDepositAmountText = depositInput.value;
	const newDepositAmount = parseFloat(depositInput.value);

	// update deposit amount
	const depositAmount = document.getElementById("deposit-amount");
	const previosDepositText = depositAmount.innerText;
	const previosDepositAmount = parseFloat(previosDepositText);

	const newDepositTotal = newDepositAmount + previosDepositAmount;
	depositAmount.innerText = newDepositTotal;

	// update total amount
	const totalAmount = document.getElementById("total-amount");
	const previosTotalAmount = parseFloat(totalAmount.innerText);

	const newTotalAmount = newDepositAmount + previosTotalAmount;
	totalAmount.innerText = newTotalAmount;

	depositInput.value = "";
});

// withdraw button handler
document.getElementById("withdraw-btn").addEventListener("click", function () {
	const withdrawInput = document.getElementById("withdraw-input");
	// const newWithdrawAmountText = withdrawInput.value;
	const newWithdrawAmount = parseFloat(withdrawInput.value);

	// update withdraw amount
	const withdrawAmount = document.getElementById("withdraw-amount");
	const previosWithdrawText = withdrawAmount.innerText;
	const previosWithdrawAmount = parseFloat(previosWithdrawText);

	const newWithdrawTotal = newWithdrawAmount + previosWithdrawAmount;
	withdrawAmount.innerText = newWithdrawTotal;

	// update total amount
	const totalAmount = document.getElementById("total-amount");
	const previosTotalAmount = parseFloat(totalAmount.innerText);

	const newTotalAmount = previosTotalAmount - newWithdrawTotal;
	totalAmount.innerText = newTotalAmount;

	withdrawInput.value = "";
});
