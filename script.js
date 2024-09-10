function onBallClick(elBall, maxDiameter) {
	const currentSize = parseInt(elBall.style.height) || 100
	elBall.style.backgroundColor = getRandomColor()
	const random = getRandomIntInclusive(20, 60)
	const newSize = currentSize + random

	if (newSize > maxDiameter) {
		elBall.style.height = elBall.style.width = "100px"
		elBall.innerText = "100"
	} else {
		elBall.style.height = elBall.style.width = newSize + "px"
		elBall.innerText = newSize
	}
}

function swapColorAndSize() {
	const elBall1 = document.querySelector(".ball1")
	const elBall2 = document.querySelector(".ball2")

	const height1 = parseInt(elBall1.style.height) || 100
	const height2 = parseInt(elBall2.style.height) || 100
	const innerText1 = elBall1.innerText
	const innerText2 = elBall2.innerText
	const color1 = elBall1.style.backgroundColor
	const color2 = elBall2.style.backgroundColor

	elBall1.style.height = elBall1.style.width = height2 + "px"
	elBall2.style.height = elBall2.style.width = height1 + "px"

	elBall1.innerText = innerText2
	elBall2.innerText = innerText1

	elBall1.style.backgroundColor = color2 || "lightblue"
	elBall2.style.backgroundColor = color1 || "lightsalmon"
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reduceDiameter() {
  var elBall1 = document.querySelector(".ball1");
  var elBall2 = document.querySelector(".ball2");

  var heightBall1 = parseInt(elBall1.style.height) || 100;
  var heightBall2 = parseInt(elBall2.style.height) || 100;

  const random = getRandomIntInclusive(20, 60);

  heightBall1 = heightBall1 - random;
  heightBall2 = heightBall2 - random;

  heightBall1 = heightBall1 < 100 ? 100 : heightBall1;
  heightBall2 = heightBall2 < 100 ? 100 : heightBall2;

  elBall1.style.height = elBall1.style.width = heightBall1 + "px";
  elBall2.style.height = elBall2.style.width = heightBall2 + "px";

  elBall1.innerText = heightBall1;
  elBall2.innerText = heightBall2;
}
