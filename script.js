function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/avatar-light.png")
    } else {
      img.setAttribute("src", "./assets/avatar.png")
    }
  }

  function animateBoxPulse() {
    const boxPulse = document.getElementById("boxPulse")
    boxPulse.classList.add("pulse-animation")

    setTimeout(() => {
      boxPulse.classList.remove("pulse-animation")
    }, 1000)
  }
