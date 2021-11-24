//https://www.youtube.com/watch?v=o8coXTZ9YMY&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&index=42&ab_channel=AnisulIslam

// //method 1

// for(var i=0; i<3; i++){
//     document.querySelectorAll(".btnAudio")[i].addEventListener("click", function(){

//         var text = this.innerHTML;
//         console.log(text);

//         switch(text){
//             case "A": // "A" ta button name ja thakbe tai dite hobe.
//                 var audio = new Audio('./audio/1.mp3');
//                 audio.play();
//                 break;
//             case "B":
//                 var audio = new Audio('./audio/2.mp3');
//                 audio.play();
//                 break;
//             case "C":
//                 var audio = new Audio('./audio/3.mp3');
//                 audio.play();
//                 break;
//         }
//     });
// }

//method 2

for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".btnAudio")[i].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);
      audioPlay(text);
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
