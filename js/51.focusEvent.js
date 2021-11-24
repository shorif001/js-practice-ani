// FocusEvent Object
// <br>, <bead>, <title>, <html>, <iframe>, <meta>,
// <param>, <script>, <style>, <base>, <bdo>,

// uporer element gulote focus event kaj korbena

// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout

var focusEve = document.querySelector(".focusEve");

focusEve.addEventListener("blur", function (e) {
  console.log("blur is occured");
  console.log(e.target.value);
  focusEve.value = e.target.value.toUpperCase();
  //style add
  focusEve.style.backgroundColor = "transparent";
  focusEve.style.padding = "0";
});

focusEve.addEventListener("focus", function () {
  console.log("focus is occured");
  //style add
  focusEve.style.backgroundColor = "orange";
  focusEve.style.padding = "2rem";
});

// focusEve.addEventListener("focusin", function () {
//   console.log("focusin is occured");
// });

// focusEve.addEventListener("focusout", function () {
//   console.log("focusout is occured");
// });
