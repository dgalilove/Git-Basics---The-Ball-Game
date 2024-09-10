function onBallClick(elBall, maxDiameter) {
  const currentSize = parseInt(elBall.style.height) || 100

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