function onBallClick(elBall) {
	if (!elBall.style.height) { //because its falsy 
		elBall.style.height = "100px"
	}
	if (!elBall.style.width) { //because its falsy 
		elBall.style.width = "100px"
	}

	elBall.style.height = parseInt(elBall.style.height) + 50 + "px"
	elBall.style.width = parseInt(elBall.style.width) + 50 + "px"
	elBall.innerText = parseInt(elBall.style.height)
}
