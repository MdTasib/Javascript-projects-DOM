// get input value
function getInputValue(inputId) {
	const inputField = document.getElementById(inputId);
	const inputAmountText = inputField.value;
	const amountValue = parseFloat(inputAmountText);
	inputField.value = "";
	return amountValue;
}

function updateTotalField(totalFieldId, amount) {
	const totalElement = document.getElementById(totalFieldId);
	const totalText = totalElement.innerText;
	const previosTotal = parseFloat(totalText);

	const totalDeposit = previosTotal + amount;
	totalElement.innerText = totalDeposit;
}

function getCurrentBalance() {
	const totalBalance = document.getElementById("total-amount");
	const totalBalanceText = totalBalance.innerText;
	const previosTotalBalance = parseFloat(totalBalanceText);
	return previosTotalBalance;
}

function updateTotalBalance(amount, isAdd) {
	const totalBalance = document.getElementById("total-amount");
	const previosTotalBalance = getCurrentBalance();

	if (isAdd) {
		const totalBalanceAmount = previosTotalBalance + amount;
		totalBalance.innerText = totalBalanceAmount;
	} else {
		const totalBalanceAmount = previosTotalBalance - amount;
		totalBalance.innerText = totalBalanceAmount;
	}
}

// deposit amount
document.getElementById("deposit-btn").addEventListener("click", function () {
	// const depositInput = document.getElementById("deposit-input");
	// const depositAmountText = depositInput.value;
	// const depositAmount = parseFloat(depositAmountText);

	// current deposit amount
	// const depositTotal = document.getElementById("deposit-amount");
	// const depositTotalText = depositTotal.innerText;
	// const previosDepositTotal = parseFloat(depositTotalText);

	// // total deposit
	// const totalDeposit = previosDepositTotal + depositAmount;
	// depositTotal.innerText = totalDeposit;

	// update total balance
	// const totalBalance = document.getElementById("total-amount");
	// const totalBalanceText = totalBalance.innerText;
	// const previosTotalBalance = parseFloat(totalBalanceText);

	// const totalBalanceAmount = previosTotalBalance + depositAmount;
	// totalBalance.innerText = totalBalanceAmount;

	const depositAmount = getInputValue("deposit-input");
	if (depositAmount > 0) {
		updateTotalField("deposit-amount", depositAmount);
		updateTotalBalance(depositAmount, true);
	}

	// depositInput.value = "";
});

// withdraw amount
document.getElementById("withdraw-btn").addEventListener("click", function () {
	// const withdrawInput = document.getElementById("withdraw-input");
	// const withdrawAmountText = withdrawInput.value;
	// const withdrawAmount = parseFloat(withdrawAmountText);

	// current withdraw amount
	// const withdrawTotal = document.getElementById("withdraw-amount");
	// const withdrawTotalText = withdrawTotal.innerText;
	// const previosWithdrawTotal = parseFloat(withdrawTotalText);

	// // total withdraw
	// const totalWithdraw = previosWithdrawTotal + withdrawAmount;
	// withdrawTotal.innerText = totalWithdraw;

	// update total balance
	// const totalBalance = document.getElementById("total-amount");
	// const totalBalanceText = totalBalance.innerText;
	// const previosTotalBalance = parseFloat(totalBalanceText);

	// const totalBalanceAmount = previosTotalBalance - withdrawAmount;
	// totalBalance.innerText = totalBalanceAmount;

	const withdrawAmount = getInputValue("withdraw-input");
	const currentBalance = getCurrentBalance();
	if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
		updateTotalField("withdraw-amount", withdrawAmount);
		updateTotalBalance(withdrawAmount, false);
	}
});
