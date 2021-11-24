//dom EventSource
// 1. Event Object
// - event type: change, submit, load, unload, open, play canplay, pause, playing,
//    progress, ended, resize, scroll, toggle etc.
//  - properties: type, target, preentDefault()

//2. MouseEvent Object
// - mouseup, mousedown, mouseout, click
// 3. KeyboardEvent Object
// 4. FocusEvent Object
// 5. ClipboardEvent Object
// 6. DragEvent Object



//finding the elements
//user name email password value get
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();

  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);
  name.value = "";
  email.value = "";
  password.value = "";
}
