var gBall1 = document.querySelector(".ball1")
var gBall2 = document.querySelector(".ball2")

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
	const innerText1 = gBall1.innerText
	const innerText2 = gBall2.innerText
	const color1 = gBall1.style.backgroundColor
	const color2 = gBall2.style.backgroundColor
	const height1 = parseInt(gBall1.style.height) || 100
	const height2 = parseInt(gBall2.style.height) || 100

	gBall1.style.height = gBall1.style.width = height2 + "px"
	gBall2.style.height = gBall2.style.width = height1 + "px"
	gBall1.innerText = innerText2
	gBall2.innerText = innerText1
	gBall1.style.backgroundColor = color2 || "lightblue"
	gBall2.style.backgroundColor = color1 || "lightsalmon"
}

function reduceDiameter() {
	var heightBall1 = parseInt(gBall1.style.height) || 100
	var heightBall2 = parseInt(gBall2.style.height) || 100
	const random = getRandomIntInclusive(20, 60)

	heightBall1 = heightBall1 - random
	heightBall2 = heightBall2 - random

	heightBall1 = heightBall1 < 100 ? 100 : heightBall1
	heightBall2 = heightBall2 < 100 ? 100 : heightBall2

	gBall1.style.height = gBall1.style.width = heightBall1 + "px"
	gBall2.style.height = gBall2.style.width = heightBall2 + "px"

	gBall1.innerText = heightBall1
	gBall2.innerText = heightBall2
}

function changeBackground() {
	const elBody = document.querySelector("body")
	elBody.style.backgroundColor = getRandomColor()
}

function reset() {
	gBall1.style.height = gBall1.style.width = "100px"
	gBall2.style.height = gBall2.style.width = "100px"

	gBall1.innerText = "100"
	gBall2.innerText = "100"

	gBall1.style.backgroundColor = "lightsalmon"
	gBall2.style.backgroundColor = "lightblue"
}
