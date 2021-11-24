// js BOM
// js Timing events methods
// setTimeOut(), setInterval()

let saveBtn = document.querySelector(".save-btn");
let message = document.querySelector(".message");

// saveBtn.addEventListener("click", saveUser);

// function saveUser(){
    ////click korar por text show korbe message class er vitore
//     message.textContent = "Message Saved";

////click korar por text hide hobe message class er vitore theke
//     setTimeout(()=>{
//         message.textContent = "";
//     }, 2000);
// }


saveBtn.addEventListener("click", displayCount);
function displayCount(){
    let count = 0;
    message.textContent = count;

    setInterval(()=>{
        message.textContent = count++;
    }, 1000);
}