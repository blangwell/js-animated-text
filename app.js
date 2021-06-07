const animationButton = document.querySelector("button");
const animatedMessage = document.createElement("p");
const mainContainer = document.querySelector("main");
let animationActive = false;
let animationOpacity = 0.0;

animationButton.addEventListener("click", () => {
	if (!animationActive) {
		animationActive = true;
		animationButton.innerText = "Click Again to Stop Animating";

		animatedMessage.style.fontSize = "40px";
		animatedMessage.innerText = "Animation with Javascript!";
		mainContainer.appendChild(animatedMessage);
	
		animationInterval = setInterval(() => {
			const colorList = ['blue', 'royalblue', 'darkgreen', 'purple'];
			const randomColorListIndex = Math.floor(Math.random() * colorList.length);
			if (animationOpacity < 1.0) {
				animationOpacity += 0.1;
				animatedMessage.style.opacity = animationOpacity;
			} else {
				animationOpacity = 0.0;
			}
			animatedMessage.style.color = colorList[randomColorListIndex];
		}, 120);

	} else {
		animationActive = false;
		clearInterval(animationInterval);
		mainContainer.removeChild(animatedMessage);
		animationButton.innerText = "Click Me For Animation";
	}
});