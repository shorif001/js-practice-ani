// MouseEvent - <html>, <head>, <meta>, <title>,
// <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>
// uprer event gulor shathe nicher mouse event gulo kaj korbena.

// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmousedup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover

// const mouseEvent = document.querySelector(".mouse-event");

// mouseEvent.addEventListener("click", function (e) {
// //   console.log("click");

// // console.log(e.target); ////div er id janar jonno
// // console.log(e.target.id); ////div er id janar jonno
// // console.log(e.target.className); ////div er class janar jonno
// // console.log(e.target.innerHTML);// div er element janar jonno
// // console.log(e.target.innerText);// div er text valu return korbe.
// // console.log(e.target.textContent);// div er text valu return korbe.

// });

// mouseEvent.addEventListener("dblclick", function () {
//   console.log("dblclick");
// });
// mouseEvent.addEventListener("mousedown", function () {
//   console.log("mousedown");
// });
// mouseEvent.addEventListener("mouseup", function () {
//   console.log("mouseup");
// });
// mouseEvent.addEventListener("mouseenter", function () {
//   console.log("mouseenter");
// });
// mouseEvent.addEventListener("mouseleave", function () {
//   console.log("mouseleave");
// });
// mouseEvent.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });
// mouseEvent.addEventListener("mouseover", function () {
//   console.log("mouseover");
// });





const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

Array.from(buttons).map((button) => {
  button.addEventListener("click", function (e) {
    // console.log("clicked");
    // console.log(e.target);
    console.log(e.target.innerText);
  });
});
