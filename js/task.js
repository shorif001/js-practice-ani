// {
//     task 2

// get first name from user
// get last name from user
// add without using library function
// print full name
// total length of full name
// convert full name into uppercase
// print the 2nd posotion from full name

// }

var fName = prompt("Enter your first name");
var lName = prompt("Enter your last name");
var fullName = fName + lName;
document.write(fullName + "<br>");
document.write("Total Length: " + fullName.length + "<br>");
document.write(fullName.toUpperCase() + "<br>");
document.write("1 caracter show from full name: " + fullName.charAt(1));
