var numOfWon = 0;
var numOfLost = 0;

for (var i = 1; i <= 5; i++) {
  var guesNumber = parseInt(prompt("Enter a number from 1 to 5"));
  // Math.floor = furno Number, math.random = float number
  var randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guesNumber == randomNumber) {
    console.log("You have won");
    numOfWon++;
  } else {
    console.log("You have lost. Random number was " + randomNumber);
    numOfLost++;
  }
}

document.write("Number of won = " + numOfWon + "<br>");
document.write("Number of lost = " + numOfLost + "<br>");
