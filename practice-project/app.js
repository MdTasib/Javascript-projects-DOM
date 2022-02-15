function calculateInput(product, price, isIncres) {
	const productInput = document.getElementById(product + "-number");
	let productInputNumber = parseInt(productInput.value);

	if (isIncres) {
		productInputNumber += 1;
	} else if (productInputNumber > 0) {
		productInputNumber -= 1;
	}

	productInput.value = productInputNumber;

	const productTotal = document.getElementById(product + "-total");
	productTotal.innerText = productInputNumber * price;

	getTotal();
}

function getInputNumber(product) {
	const productInput = document.getElementById(product + "-number");
	const productNumber = parseInt(productInput.value);
	return productNumber;
}

function getTotal() {
	const phonePrice = getInputNumber("phone") * 1210;
	const casePrice = getInputNumber("case") * 59;
	const productTotal = phonePrice + casePrice;
	const taxAmount = productTotal / 10;
	const total = productTotal + taxAmount;

	document.getElementById("sub-total").innerText = productTotal;
	document.getElementById("tax-amount").innerText = taxAmount;
	document.getElementById("total-price").innerText = total;
}

document.getElementById("phone-plus").addEventListener("click", function () {
	calculateInput("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
	calculateInput("phone", 1219, false);
});

document.getElementById("case-plus").addEventListener("click", function () {
	calculateInput("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
	calculateInput("case", 59, false);
});
