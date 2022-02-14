const products = [
	"hp core i3 laptop new",
	"windows 10 Laptop new",
	"redmi 7 pro phone",
	"appple Phone 1s",
	"dell laptop, core i3",
	"realme phone cemera 30mp",
];

const searching = "laptop";

// indexOf
/* const output = [];

for (const product of products) {
	if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
		output.push(product);
	}
}

console.log(output); */

// includes
/* const output = [];

for (const product of products) {
	if (product.toLowerCase().includes(searching.toLowerCase())) {
		output.push(product);
	}
}

console.log(output); */

// startWith
/* const items = [
	"Dell core i3 laptop new",
	"Dell windows 10 Laptop new",
	"redmi 7 pro phone",
	"appple Phone 1s",
	"laptop, core i3 Dell",
	"realme phone cemera 30mp",
];

const finding = "dell";

const output = [];
for (const item of items) {
	if (item.toLowerCase().startsWith(finding.toLowerCase())) {
		output.push(item);
	}
}
console.log(output); */
