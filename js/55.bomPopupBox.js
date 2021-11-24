// js BOM
// popup boxees - alert, confirm, prompt

// alert("Are you sure");

// confirm("Are you sure");

// user er kas theke confirmation newar jonno.
//example
// function deleteIt(){
//  let dele = confirm("Do you want to delete?");
//  if(dele){
//      console.log("deleted");
//  }else{
//      console.log("not deleted");
//  }
// }

// deleteIt();



//prompt user er kas theke input newar jonno.

//prompt("Enter your name: ");


function welcomeMessage(){

    let h1 = document.createElement('h1');
    let text;

 let inputName = prompt("Enter your name: ");
 if(inputName == null || inputName == ""){
    text = "no name found"
 }else{
     text = inputName;
 }

 let textNode = document.createTextNode(text);
 h1.appendChild(textNode);
 document.body.appendChild(h1);
}

welcomeMessage();