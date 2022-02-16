/* document.getElementById("sixteenGB").addEventListener("click", function () {
	const memoryCost = document.getElementById("memory-cost");
	memoryCost.innerText = 200;

	const bestPrice = document.getElementById("best-price").innerText;
	const memoryPrice = document.getElementById("memory-cost").innerText;
	const storagePrice = document.getElementById("storage-cost").innerText;
	const deliveryPrice = document.getElementById("delivery-cost").innerText;

	const totalPrice =
		parseFloat(bestPrice) +
		parseFloat(memoryPrice) +
		parseFloat(storagePrice) +
		parseFloat(deliveryPrice);

	const total = document.getElementById("total-price");
	total.innerText = totalPrice;
}); */

function updatePrice(itemPriceId, price) {
	const memoryCost = document.getElementById(itemPriceId);
	memoryCost.innerText = price;

	const bestPrice = document.getElementById("best-price").innerText;
	const memoryPrice = document.getElementById("memory-cost").innerText;
	const storagePrice = document.getElementById("storage-cost").innerText;
	const deliveryPrice = document.getElementById("delivery-cost").innerText;

	const totalPrice =
		parseFloat(bestPrice) +
		parseFloat(memoryPrice) +
		parseFloat(storagePrice) +
		parseFloat(deliveryPrice);

	const total = document.getElementById("total-price");
	total.innerText = totalPrice;
}

/* document.getElementById("eightGB").addEventListener("click", function () {
	updatePrice("memory-cost", 0);
});
document.getElementById("sixteenGB").addEventListener("click", function () {
	updatePrice("memory-cost", 200);
});
document.getElementById("ssd1").addEventListener("click", function () {
	updatePrice("storage-cost", 0);
});
document.getElementById("ssd2").addEventListener("click", function () {
	updatePrice("storage-cost", 100);
});
document.getElementById("ssd3").addEventListener("click", function () {
	updatePrice("storage-cost", 200);
}); */

function onClickButton(clickId, updateId, price) {
	document.getElementById(clickId).addEventListener("click", function () {
		updatePrice(updateId, price);
		clickId.style.backgroundColor = "red";

		document.getElementById(clickId).style.backgroundColor = "cornflowerblue";
	});
}

onClickButton("eightGB", "memory-cost", 0);
onClickButton("sixteenGB", "memory-cost", 200);
onClickButton("ssd1", "storage-cost", 0);
onClickButton("ssd2", "storage-cost", 100);
onClickButton("ssd3", "storage-cost", 200);
onClickButton("free-delivery", "storage-cost", 0);
onClickButton("paid-delivery", "storage-cost", 20);

// cuppon code
document.getElementById("apply-btn").addEventListener("click", function () {
	let promoCode = document.getElementById("promo-input");

	if (promoCode.value === "pHero") {
		let total = document.getElementById("total-price");
		let totalPrice = parseFloat(total.innerText);
		const discount = (totalPrice * 20) / 100; // 20% discount
		totalPrice -= discount;

		total.innerText = totalPrice;
	} else {
		alert("This is not correct cuppon code");
	}

	promoCode.value = "";
});
