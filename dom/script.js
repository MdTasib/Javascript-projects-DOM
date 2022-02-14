////////////////////// number 01 example
/* // button green make function
function btnGreen() {
	document.body.style.backgroundColor = "green";
}

// button blue make function
const btnBlue = document.getElementById("btnBlue");
btnBlue.onclick = makeBtnBlue;

function makeBtnBlue() {
	document.body.style.backgroundColor = "blue";
}

// btn yellow
const btnYellow = document.getElementById("btnYellow");
btnYellow.addEventListener("click", function () {
	document.body.style.backgroundColor = "yellow";
});
 */

////////////////////// number 02 example
/* document.getElementById("updateBtn").addEventListener("click", function () {
	const textBox = document.getElementById("textBox");
	let inputText = document.getElementById("inputText").value;

	textBox.innerText = inputText;
	inputText = "";
}); */

///////////////////////// number 03 example
/* const commentContainer = document.getElementById("comment-container");
const postBtn = document.getElementById("postBtn");
let commentBox = document.getElementById("comment-box");

postBtn.addEventListener("click", function () {
	const commentTextElement = document.createElement("p");
	commentTextElement.innerText = commentBox.value;

	commentContainer.appendChild(commentTextElement);

	commentBox.value = "";
});
 */
