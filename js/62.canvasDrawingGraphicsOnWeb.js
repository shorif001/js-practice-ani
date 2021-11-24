let c = document.getElementById("myCanvas");

let ctx = c.getContext("2d");

ctx.lineWidth=3;
ctx.strokeStyle = "black";
ctx.strokeRect(10,10,380,280);

ctx.fillStyle = "green";
ctx.fillRect(12, 12, 376, 276);