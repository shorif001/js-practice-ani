// One Dimensional Array
// Create a function called highestScore taht will
// Receive a 1d array called scores
// return the highest score

// function highestScore(scores){

//     var max = scores[0];
//     for(var x=1; x<scores.length; x++){
//         if(max < scores[x]){
//             max = scores[x];
//         }
//     }
//     return max;
// }

// var scores = [ 21, 28, 1, 88, 15];
// var maxScore = highestScore(scores);
// console.log(maxScore);

function hiestScore() {
  var max = score[0];
  for (var x = 1; x < score.length; x++) {
    if (max < score[x]) {
      max = score[x];
    }
  }
  return max;
}

var score = [30, 40, 50, 1, 99];

var maxScore = hiestScore();
console.log(maxScore);
