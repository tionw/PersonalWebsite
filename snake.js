var xpos=15;
var ypos=15;
var xvel=0;
var yvel=0;
var gridsize=30;
var tilecount=30;
var foodx=Math.floor(Math.random()*tilecount);
var foody=Math.floor(Math.random()*tilecount);
var trail=[];
var taillen=5;
var score=0;
var gameover = false;
var mouseX;
var mouseY;

window.onload=function(){
  canvas = document.getElementById("snake");
  ctx = canvas.getContext("2d");
  document.addEventListener("keydown", keyPush);
  document.addEventListener("mousedown", buttonPress, false);
  var refreshId = setInterval(function() {
    update();
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for (var i = 0; i < trail.length; i++) {
      ctx.fillStyle = "white";
      ctx.fillRect(trail[i].x*gridsize,trail[i].y*gridsize,gridsize-2,gridsize-2);
      if (score!=0 && trail[i].x==xpos && trail[i].y==ypos){
        gameover=true;
      }
    }

    trail.push({x:xpos, y:ypos});
    while (trail.length>taillen) {
      trail.shift();
    }

    ctx.fillStyle = "red";
    ctx.fillRect(foodx*gridsize,foody*gridsize,gridsize-2,gridsize-2);

    ctx.fillStyle = "white";
    ctx.font = '50px Arial';
    ctx.fillText("Score: ",350,50);
    ctx.fillText(score,500,50);

    if (gameover){
      // clearInterval(refreshId);
      ctx.fillStyle = "black";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "white";
      ctx.font = '100px Arial';
      ctx.fillText("GAME OVER",140,400);
      ctx.font = '50px Arial';
      ctx.fillText("Your score:",285,500);
      ctx.fillText(score,550,501);
      // ctx.fillRect(335,560,200,50);
      // ctx.fillStyle = "black";
      ctx.font = '30px Arial';
      ctx.fillText("Click to Try Again",310,584);
    }
  },1000/15);
}

function buttonPress(e) {
  gameover = false;
  xpos=15;
  ypos=15;
  score=0;
  taillen=5;
}

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return{
    x: event.clientX = rect.left,
    y: event.clientY = rect.top
  };
}

function update() {
  xpos+=xvel;
  ypos+=yvel;
  if (xpos<0){
    xpos=tilecount-1;
  }
  if (xpos>tilecount-1){
    xpos=0;
  }
  if (ypos<0){
    ypos=tilecount-1;
  }
  if (ypos>tilecount-1){
    ypos=0;
  }

  if (xpos==foodx && ypos==foody) {
    score++;
    taillen++;
    foodx=Math.floor(Math.random()*tilecount);
    foody=Math.floor(Math.random()*tilecount);
  }
}

let d;
function keyPush(event) {
  if(event.keyCode==37 && d!= "RIGHT"){
    d = "LEFT";
    xvel=-1;
    yvel=0;
  }else if(event.keyCode==38 && d!= "DOWN"){
    d="UP";
    xvel=0;
    yvel=-1;
  }else if(event.keyCode==39 && d!= "LEFT"){
    d="RIGHT";
    xvel=1;
    yvel=0;
  }else if(event.keyCode==40 && d!= "UP"){
    d="DOWN";
    xvel=0;
    yvel=1;
  }
}
