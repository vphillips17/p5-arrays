var numbers= [15,22,48,37];
var habits = ["choice", "voice", "hustle", "grit", "growth", "optimisim", "consideration","bad and boujee"];
var j = 0;
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(130);

    for(var i = 0; i<4; i++){
     stroke(255);
    ellipse((i+1)*100,200,numbers[i],numbers[i]);
    }
   
 fill(255);
 textSize(50);
 text(habits[j], 230, 150);
}

function mousePressed(){
    j++;
    if(j==habits.length){
      j=0;
    }
}