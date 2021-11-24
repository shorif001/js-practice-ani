function higestRunScorer(playersInfo) {
  var playerName = playersInfo[0][0];
  var playerScore = playersInfo[0][1];

  for (var x = 1; x < playersInfo.length; x++) {
    if (playerScore < playersInfo[x][1]) {
      playerScore = playersInfo[x];
    }
  }
  return playerScore;
}

var playersInfo = [
  ["Ashraful", 95],
  ["Khairul", 44],
  ["jahidul", 55],
  ["korim", 105],
];
var highScore = higestRunScorer(playersInfo);
console.log(highScore);
