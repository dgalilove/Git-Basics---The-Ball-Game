function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function onBallClick(elBall) {
  const currentSize = parseInt(elBall.style.height) || 100
  const random = getRandomIntInclusive(20, 60)
  const newSize = currentSize + random

  if (newSize > 400) {
    elBall.style.height = elBall.style.width = "100px"
    elBall.innerText = "100"
  } else {
    elBall.style.height = elBall.style.width = newSize + "px"
    elBall.innerText = newSize
  }
}