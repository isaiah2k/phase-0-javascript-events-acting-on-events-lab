dodger.style.backgroundColor = "#FF69B4"
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
  function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left.replace("px", ""));
    const newLeft = left > 0 ? left - 1 : 0;
    dodger.style.left = `${newLeft}px`;
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left.replace("px", ""));
    const newLeft = left < window.innerWidth - dodger.offsetWidth ? left + 1 : left;
    dodger.style.left = `${newLeft}px`;
  }
  