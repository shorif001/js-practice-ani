// // only array
// var num = [10, 20, 30, 40, 50];

// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);

// // loop in array

// var num = [10, 20, 30, 40, 50];

// for(var i=0; i<5; i++){
//     console.log(num[i]);
// }

// // loop in array with valu addition

// var num = [10, 20, 30, 40, 50];
// sum = 0;

// for(var i=0; i<5; i++){
//     console.log(num[i]);
//     sum = sum + num[i];
// }

// console.log(sum);

// loop in array with valu addition

var num = new Array();

for (var i = 0; i < 5; i++) {
  num[i] = parseInt(prompt("Enter a number :"));
}
var sum = 0;

for (var i = 0; i < 5; i++) {
  console.log(num[i]);
  sum = sum + num[i];
}

console.log("sum = " + sum);

// object er vitore jokhon console.log(...); kori sheta r o shundor kore dekhano jay
// console.table(....);
