const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

function nextPage() {
	window.location.href = "yes.html";
}

function moveButton() {
	const container = document.querySelector(".container");
	const containerRect = container.getBoundingClientRect();
	const noBtnRect = noBtn.getBoundingClientRect();

	const maxX = containerRect.width - noBtnRect.width;
	const maxY = containerRect.height - noBtnRect.height;

	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);

	noBtn.style.position = "absolute";
	noBtn.style.left = randomX + "px";
	noBtn.style.top = randomY + "px";
}