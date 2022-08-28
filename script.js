const container = document.getElementsByTagName("body");
const clickEl = document.getElementsByClassName("click");
const hoverEl = document.getElementsByClassName("hover");

for (let i = 0; i < clickEl.length; i++) {
	clickEl[i].addEventListener("click", function () {
		const currentColor = clickEl[i].id;
		container[0].style.backgroundColor = currentColor;
	});
}

for (let i = 0; i < hoverEl.length; i++) {
	hoverEl[i].addEventListener("mouseenter", function () {
		const currentColor = hoverEl[i].id;
		container[0].style.backgroundColor = currentColor;
	});
}

const inputEl = document.getElementById("color");
const buttonEl = document.getElementsByTagName("button");

buttonEl[0].addEventListener("click", function () {
	container[0].style.backgroundColor = inputEl.value;
});

buttonEl[1].addEventListener("click", function () {
	container[0].style.backgroundColor = "white";
});
