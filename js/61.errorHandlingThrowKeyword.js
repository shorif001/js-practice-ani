// Error handling - try, catch, finally
// the throw statement -> create custom errors.

document.querySelector("#check-btn")
.addEventListener("click", function(){

    let num = document.querySelector("#numTextfield").value;
    // console.log(num);

    try{
        if(num < 5){
            throw "input is too low"
        }
        else if(num > 10){
            throw "input is too High"
        }
    }catch(err){
        console.log(err);
    }
});
