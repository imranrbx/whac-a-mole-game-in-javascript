const boxes = document.querySelectorAll(".box");
const time = document.querySelector("#time span");
const mole = document.createElement("img");
let score = 0;
let timeCount = 30;
let interval;
let timeInterval;
boxes.forEach((box) => {
	box.addEventListener("click", (el) => {
		console.log(el.target.type);
		if (el.target.type === "mole") {
			score += 1;
			mole.style.display = "none";
		}
	});
});
interval = setInterval(() => {
	mole.type = "mole";
	mole.src = "./mole2.png";
	mole.height = 100;
	mole.style.display = "block";
	const box = Math.floor(Math.random() * boxes.length);
	boxes[box].appendChild(mole);
	setTimeout(() => (mole.style.display = "none"), 500);
}, 1000);
timeInterval = setInterval(() => {
	timeCount -= 1;
	time.innerText = timeCount;
	if (timeCount === 0) {
		clearInterval(interval);
		clearInterval(timeInterval);
		alert(`Your Score is:  ${score}`);
	}
}, 1000);
