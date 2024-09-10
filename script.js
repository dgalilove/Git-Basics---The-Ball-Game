var gBody = document.querySelector("body")
var gBall1 = document.querySelector(".ball1")
var gBall2 = document.querySelector(".ball2")
var gBall3 = document.querySelector(".ball3")
var gBall4 = document.querySelector(".ball4")
var gBall5 = document.querySelector(".ball5")
var gBall6 = document.querySelector(".ball6")

var gUndo = []
var gRedo = []
var gInterval = null
var gCycleCount = 0
var gHover = null

function onBallClick(elBall, maxDiameter) {
	save()
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
	save()
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
	save()
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
	save()
	gBody.style.backgroundColor = getRandomColor()
}

function reset() {
	save()
	gBall1.style.height = gBall1.style.width = "100px"
	gBall2.style.height = gBall2.style.width = "100px"

	gBall1.innerText = "100"
	gBall2.innerText = "100"

	gBall1.style.backgroundColor = "lightsalmon"
	gBall2.style.backgroundColor = "lightblue"
	gBody.style.backgroundColor = "black"
}
function clickAll() {
	onBallClick(gBall1, 200)
	onBallClick(gBall2, 300)
	swapColorAndSize()
	reduceDiameter()
	changeBackground()
	gCycleCount++
	if (gCycleCount >= 10) {
		clearInterval(gInterval)
	}
}

function startClickInterval() {
	gInterval = setInterval(clickAll, 2000)
}

gBall6.onmouseover = function () {
	gHover = setTimeout(() => {
		gCycleCount = 0
		startClickInterval()
	}, 2000)
}

gBall6.onmouseout = function () {
	clearTimeout(gHover)
	clearInterval(gInterval)
}

// function save() {             not working , dont know why , fso bodit harasho ya eta znayo , peace out good night
// 	const state = {
// 		ball1: {
// 			size: gBall1.style.height,
// 			color: gBall1.style.backgroundColor,
// 			text: gBall1.innerText,
// 		},
// 		ball2: {
// 			size: gBall2.style.height,
// 			color: gBall2.style.backgroundColor,
// 			text: gBall2.innerText,
// 		},
// 		ball3: { size: gBall3.style.height, color: gBall3.style.backgroundColor },
// 		ball4: { size: gBall4.style.height, color: gBall4.style.backgroundColor },
// 		ball5: { size: gBall5.style.height, color: gBall5.style.backgroundColor },
// 		ball6: { size: gBall6.style.height, color: gBall6.style.backgroundColor },
// 	}
// 	gUndo.push(state)
// 	gRedo = []
// }

// function restore(state) {
// 	gBall1.style.height = gBall1.style.width = state.ball1.size
// 	gBall1.style.backgroundColor = state.ball1.color
// 	gBall1.innerText = state.ball1.text

// 	gBall2.style.height = gBall2.style.width = state.ball2.size
// 	gBall2.style.backgroundColor = state.ball2.color
// 	gBall2.innerText = state.ball2.text

// 	gBall3.style.height = gBall3.style.width = state.ball3.size
// 	gBall3.style.backgroundColor = state.ball3.color

// 	gBall4.style.height = gBall4.style.width = state.ball4.size
// 	gBall4.style.backgroundColor = state.ball4.color

// 	gBall5.style.height = gBall5.style.width = state.ball5.size
// 	gBall5.style.backgroundColor = state.ball5.color

// 	gBall6.style.height = gBall6.style.width = state.ball6.size
// 	gBall6.style.backgroundColor = state.ball6.color
// }

// function undo() {
// 	if (gUndo.length > 1) {
// 			const current = gUndo.pop() 
// 			gRedo.push(current) 
// 			var last = gUndo[gUndo.length - 1]
// 			restore(last)
// 	}
// }

// function redo() {
// 	if (gRedo.length > 0) {
// 			const next = gRedo.pop() 
// 			gUndo.push(next) 
// 			restore(next)
// 			console.log("Redo action")
// 	}
// }
// window.onload = function() {  // window.onload : saving the loading window on the start
// 	save() 
// }