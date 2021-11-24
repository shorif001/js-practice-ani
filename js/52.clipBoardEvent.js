// DOM events
// 1. Event Object
// event type: change, submit, reset, load, unload, open, play, canplay, pause, playing, progress, ended,
// volumechange, resize, scroll, toggle (works with details), beforeprint, afterprint etc.
// properties: type, target, preventDefault()
//2. MouseEvent Object
// 3. KeyboardEvent Object
// 4. FocusEvent Object
// 5. ClipboardEvent Object
// 6. DragEvent Object



//ClipboardEvent Object
// oncopy
// oncute
//onpaste

const clipBoard = document.querySelector('.clipBoard');
const clipBoardP = document.querySelector('.clipBoardP');

clipBoard.addEventListener('copy', function(){
    clipBoardP.innerHTML = "you have copy";
    console.log("you have copy");
});
clipBoard.addEventListener('cut', function(){
    clipBoardP.innerHTML = "you have cut";
    console.log("you have cut");
});
clipBoard.addEventListener('paste', function(){
    clipBoardP.innerHTML = "you have paste";
    console.log("you have paste");
});