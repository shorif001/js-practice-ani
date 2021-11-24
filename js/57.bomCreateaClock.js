let clockBtn = document.querySelector(".clock-btn");
let timeShow = document.querySelector(".time-show");

clockBtn.addEventListener("click", displayTime);
function displayTime(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    minutes = formatTime(minutes);
    second = formatTime(second);
    let time = hours + ":" + minutes + ":" + second;
    // console.log(time);

    timeShow.textContent = time;
    
    setInterval(displayTime, 1000); 
}

function formatTime(value){
 if(value<10){
     value = "0" + value;
 }
 return value;
}