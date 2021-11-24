// keyboardEvent Object
// 1. keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers)
// 3. keyup
// some properties - key, keyCode, code, shiftKey, ctlKey, repeat

const tArea = document.querySelector(".tArea");

// tArea.addEventListener("keydown", function () {
//   console.log("keydown");
// });

tArea.addEventListener("keydown", function (e) {
//   console.log("keydown");
if(e.repeat){ //button press kore dhore rakhle kaj korbena
    alert("do not repeat");
}
});

// tArea.addEventListener("keypress", function () {
//   console.log("keypress");
// });

// tArea.addEventListener("keyup", function () {
//   console.log("keyup");
// });

// tArea.addEventListener("keyup", function (e) {
// //   console.log(e.key);
// //   console.log(e.keyCode);
// //   console.log(e.code);
// //   console.log(e.shiftKey);
// //   if(e.shiftKey){
// //       console.log('shift+' + e.key);
// //   }
// });
