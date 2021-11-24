// //for loop
// for(var i=1; i<=100; i++){
//     document.write(" " + i);
// }

// //while loop
// var i=1;

// while(i<=100){
//     document.write(" " + i);
//     i++
// }

//example task

var i = 1;
var sum = 0;

while (i <= 50) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.write(" " + i);
    sum = sum + i;
  }
  i++;
}

document.write(" sum = " + sum);
document.write("<h1>end</h1>");
