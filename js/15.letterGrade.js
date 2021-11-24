// var marks = prompt("Enter your marks : ");

// if(marks>=80){
//     console.log("A+")
// }else if(marks>=70){
//     console.log("A")
// }else if(marks>=60){
//     console.log("A-")
// }else if(marks>=50){
//     console.log("B")
// }else if(marks>=40){
//     console.log("C")
// }else if(marks>=30){
//     console.log("D")
// }else{
//     console.log("Fail")
// }

//logical operatar in if else

// var marks = prompt("Enter your marks : ");

// if(marks > 100 || marks < 0){
//     console.log("Invalid Marks");
// }
// else if(marks>=80 && marks<=100){
//     console.log("A+")
// }else if(marks>=70 && marks<=79){
//     console.log("A")
// }else if(marks>=60 && marks<=69){
//     console.log("A-")
// }else if(marks>=50 && marks<= 59){
//     console.log("B")
// }else if(marks>=40 && marks<= 49){
//     console.log("C")
// }else if(marks>=33 && marks<= 39){
//     console.log("D")
// }else{
//     console.log("Fail")
// }

// Vowel & consonant find

var letter = prompt("Enter a letter : ");

letter = letter.toLowerCase();

if (
  letter == "a" ||
  letter == "e" ||
  letter == "i" ||
  letter == "o" ||
  letter == "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
