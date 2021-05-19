var gameState = 0;
var form,game,player,database,playerCount;

function setup(){
createCanvas(400,400);
database=firebase.database();
game=new Game();
game.getState();
game.start();
}

function draw(){
  
}