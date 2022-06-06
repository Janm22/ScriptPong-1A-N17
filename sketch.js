// Jean Carlos
// PPPpong

/*
Pong!
Use your mouse to move the Left paddle (with the blue 
stroke collor on it) and move the paddle vertically up
and down to hit the ball and bounce it. Make sure the 
ball does not hit the red line on the left. You have 3 
tries. After your three tries see what your highest 
difficulty level was.
*/



//Paddle Thickness
var LeftPaddle=25;
var RightPaddle=25;
//X postition of the paddles
var LeftPaddleX = 10;
var RightPaddleX = 640;
//the length of the paddles
var LeftPaddleHeight = 120
var RightPaddleHeight = 120;
//Score of the AI. A.k.A the Number of tries
var ComputerScore =0;



//ball x and y and speedx speed.y and radius
//Instead of var ball.x and var ball.y and var... i'm using {} so that it's a little nicer and not messy
var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:60,
    dy:60,
}

//Canvas. Blac background.
function setup(){
createCanvas(670,450);
    background(0);
  
}


function draw(){

 background(0); 
   
   //This function keeps the left paddle inside the canvas.
   paddleInCanvas();
   
   //This function is for the midline.
    midline();
    
    //Fuction drawScore is for the score 
   drawScore();  
      
   //this function is for the Difficulty level
    DifficultyLevel();
  
  //function move is important since the ball will be gone without it!
    move();
  
   //left paddle
   fill(250,250,250);
    stroke(0,0,250);
    strokeWeight(2);
   paddle1Y = mouseY; //this is important because your mouse is the tool that is moving the left paddle.
  rect(LeftPaddleX,paddle1Y,LeftPaddle,LeftPaddleHeight);
   
   
    //pc computer paddle
    fill(250,250,250);
    stroke(0,0,0);
   var RightPaddleY =ball.y-RightPaddleHeight/2; //The reason why the variable i this case isn't a sertain number is because the y-value is constantly changing
  rect(RightPaddleX,RightPaddleY,RightPaddle,RightPaddleHeight);
 
//this function help to not go te paddle out of canvas
function paddleInCanvas(){
  if(mouseY+LeftPaddleHeight > height){
    mouseY=height-LeftPaddleHeight;
  }
  if(mouseY < 0){
    mouseY =0;
  }
 
  
}



//This function is used so that when the ball comes in contact with the red line it will be reseted.
function reset(){
   ball.x = width/2+100;
   ball.y = height/2+200;
   ball.dx=6;
   ball.dy =6;
}


//This functiokn is used for the white line in the middle. 
function midline(){
    for(i=0;i<480;i+=10) {
    var y = 0;
    fill(250,250,250);
    stroke(0);
    strokeWeight(0)
    rect(width/2,y+i,10,480);
      fill(250,0,0);
  rect(0,0,5,550);
    }
}


//this function will show the scores(difficulty level and number of tries)
function drawScore(){
    textAlign(CENTER);
    textSize(20);
    fill(250,250,250);
    stroke(0,0,0)
    text("Number of tries:",465,50)
    text(ComputerScore,550,50)
}


//this function is for the difficulty level which is basically the speed of the ball
function  DifficultyLevel(){
    textSize(23);
    fill(255);
    noStroke(23);
    
    text("Difficulty Level:"+abs(ball.dx),200,50);
    
}



//this is the most important function of this code! this functino is what creates the ball, moves the ball, and makes the ball all bouncy.
function move(){
   fill(250,250,250);
   stroke(255,250,250);
   strokeWeight(0.5);
   ellipse(ball.x,ball.y,ball.r,20)
   ball.x = ball.x + ball.dx;
   ball.y = ball.y + ball.dy;
   if(ball.x+ball.r>width-ball.r/2){
       ball.dx=-ball.dx-0.5;       
   }
  //To make sure tht when the ball hits the paddle it bounces off of the edge of the paddle and it wont go inside the the paddle.
  if (ball.x-6.5*ball.r/3< 0){
  if (ball.y >= paddle1Y&& ball.y <= paddle1Y + LeftPaddleHeight) {
    ball.dx = -ball.dx+0.5; 
  }
  else{
    ComputerScore++;
    reset();
    navigator.vibrate(100);
  }
}
if(ComputerScore ==4){    //This last bit is for the scores and for when you loose it will tell you Gmae Over and Reload the page if you want to play more
    fill(0,0,0);
    stroke(0)
    rect(0,0,width,height-1);
    fill(250,250,250);
    stroke(250,250,250);
    textSize(30)
    text("Game Over!",width/2,height/2-30);
	textSize(20)
    text("Reload To Play MOre!",width/2,height/2)
    noLoop();
    ComputerScore = 0;
}
   if(ball.y+ball.r > height || ball.y-ball.r <0){
       ball.dy =- ball.dy;
   }   
}

}