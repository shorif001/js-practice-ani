// for (var i = 0; i < 3; i++) {
//   document
//     .querySelectorAll(".animatBtn")
//     [i].addEventListener("click", function () {
//       var text = this.innerHTML;
//       console.log(text);
//       audioPlay(text);
//     });
// }

// function audioPlay(text) {
//   switch (text) {
//     case "A": // "A" ta button name ja thakbe tai dite hobe.
//       var audio = new Audio("./audio/1.mp3");
//       audio.play();
//       break;
//     case "B":
//       var audio = new Audio("./audio/2.mp3");
//       audio.play();
//       break;
//     case "C":
//       var audio = new Audio("./audio/3.mp3");
//       audio.play();
//       break;
//   }
// }

// //   keypress event
// document.addEventListener("keypress", function (event) {
//   var text = event.key;
//   audioPlay(text);
// });







// document.addEventListener("keypress", function (event) {
//   var text = event.key;

//   document.querySelector(".keyP").innerHTML = "You have pressed " + text;
// });




var keyCount = 0;
document.querySelector("#keyPressCount").addEventListener("keypress", function (event) {
  var text = event.key;
  keyCount++;

  document.querySelector(".keyP").innerHTML = "You have pressed " + keyCount;
});
