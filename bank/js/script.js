document.getElementById("submit-btn").addEventListener("click", function () {
	let userEmail = document.getElementById("user-email").value;
	let userPass = document.getElementById("user-password").value;

	if (userEmail == "tasib@tasib.com" && userPass == "hello") {
		window.location.href = "bank.html";
	}
});
