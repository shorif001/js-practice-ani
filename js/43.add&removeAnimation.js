//animation add removed not working

for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".animatBtn")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);
      audioPlay(text);
      playAnimation(text);
    });
}

function audioPlay(text) {
  switch (text) {
    case "A": // "A" ta button name ja thakbe tai dite hobe.
      var audio = new Audio("./audio/1.mp3");
      audio.play();
      break;
    case "B":
      var audio = new Audio("./audio/2.mp3");
      audio.play();
      break;
    case "C":
      var audio = new Audio("./audio/3.mp3");
      audio.play();
      break;
  }
}

// function playAnimation(text) {
//   var selectedButton = document.querySelector("." + text);
//   selectedButton.classList.add(".anim");

//   setTimeout(function () {
//     selectedButton.classList.remove(".anim");
//   }, 2000);
// }
