const dodger = document.getElementById("dodger")
//turn dodger pink
dodger.style.backgroundColor = "#FF69B4"

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10)
  // Ensures dodger doesn't go out of boundary to the right 400px - 40px
  if (left < 360) { 
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  } else if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})