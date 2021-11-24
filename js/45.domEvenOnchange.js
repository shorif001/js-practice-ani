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

// event nicher element gulor shathe kaj kore:  change event

//<input />> - text, number, password, email, color, radio, checkbox, search, time,
// date, datetime, week, month, url, tell, file,
// <select>,
// <textarea>

// //input element

// const input = document.querySelector("input[name=name]");
// input.addEventListener('change', changeHandler)

// function changeHandler(e){
//     // console.log(e);
//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     // console.log(e.target.id);
//     console.log(e.target.value);
// }



// //checkbox element
// const programs = document.querySelectorAll("input[name=program]");
// // console.log(programs);


// Array.from(programs).map((program)=>{
//     program.addEventListener("change", programHandler);
// });

// function programHandler(e){
//     // console.log('checked');

//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }




const department = document.querySelector("#department");
// console.log(department);

department.addEventListener("change", handleDepartment);

function handleDepartment(e){
    console.log(e.target.value);
}

