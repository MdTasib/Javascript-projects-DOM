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

/* // How to split, slice, substr, concat, join
const name = "Mohammad Ohidul Alam Tasib";

// split
const splitName = name.split(" ");
console.log("split : ", splitName);

// slice
const sliceName = name.slice(9, 16);
console.log("slice : ", sliceName);

// substr
const substrName = name.substr(16);
console.log("substr : ", substrName);

// concat
const firstName = "Ohidul";
const lastName = "Alam";
const space = " ";
// const fullName = firstName.concat(lastName);
const fullName = firstName.concat(space).concat(lastName);
console.log("concat : ", fullName);

// join
const brothers = ["Rafi", "Rakib", "Tasib"];
// const joinBrother = brothers.join(" ");
const joinBrother = brothers.join(",");
console.log(joinBrother);
 */

/* // Check an Array using isArray
function bigFriend(friends) {
	if (Array.isArray(friends) == false) {
		return "Is not an array";
	}

	let bigFriend = friends[0];

	for (const friend of friends) {
		if (friend.length > bigFriend.length) {
			bigFriend = friend;
		}
	}

	return bigFriend;
}

const friends = ["Rafi", "Rakib", "Tawrat", "Tasib"];
// const findBigFriend = bigFriend("hello");
const findBigFriend = bigFriend(friends);
console.log(findBigFriend); */

/* // Have fun with sort and reverse a javascript array

const numbers = [1, 2, 4, 3, 6, 5];
console.log(numbers.sort());

const numbers2 = [11, 1, 2, 3, 22, -1];
console.log(numbers2.sort());

const sortFunction = numbers2.sort(function (a, b) {
	return a - b;
});

console.log(sortFunction);

const letter = ["b", "c", "a"];
console.log(letter.sort());

// reverse
const str = ["a", "b", "c"];
console.log(str);
console.log(str.reverse()); */

// Unlimited parameters to a function using arguments
/* function sum() {
	let sum = 0;

	for (const number of arguments) {
		sum += number;
	}

	return sum;
}

const sumNumber = sum(1, 2, 3, 4, 5);
console.log(sumNumber); */
