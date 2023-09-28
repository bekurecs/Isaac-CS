//game 3 vars
var score = 0
var button
var name = ''
var nam1 = ''
var input = '';
var message = ['The five boxing wizards jump quickly.', 'Quick brown fox jumps over the lazy dog.','When zombies arrive, quickly fax judge Pat.', 'list eye once after as good turn place','Be the change you wish to see in the world.','She sells sea shells by the sea shore.','Peter Piper picked a peck of pickled peppers.','Betty Botter bought some butter.','How much wood would a woodchuck chuck.','How can a clam cram in a clean cream can?','A tree-toad loved a she-toad.','A bird in the hand is worth two in the bush.','Caught between a rock and a hard place.',"Don't count your chickens before they hatch.","Don't make a mountain out of a molehill.","The shark-infested South Pine","Channel was the only way in or out.","Now is the winter of our discontent", "He capers nimbly in a lady's chamber", "To the lascivious pleasing of a lute.","Plans for this weekend include turning.","He shaved the peach to prove a point.","Peanuts don't grow on trees.","The book is in front of the table.","books are sure to liquefy your brain.","Did the posh aspect really post the relief?", "What if the antsy safe ate the significance?","What if the decimal physics ate the week?", "The antique anything can't queue the west.", "The womanly shake can't nod the animal.", "Did the far list really grab the objective?", "The hollow total can't divide the food.", "The slice whirls into the yawning travel.", "What if the evasive promise ate the target?", "The squeaky distance can't scare the other.", "Did the moody plant really spark the aside?", "The subsequent tooth can't expect the strain.", "The high-level population can't taste the disk.", "Is the scratch soup better than the square?"]

let gen = []
var mode = 0;

//Declare 
let click
let victory  
let defeat
let generate 

//Preload
function preload()
{
  click = loadSound("Click.mp3")
  victory = loadSound("Victory.mp3")
  defeat = loadSound("Defeat.mp3")
  generate = loadSound("Generate.mp3")
  back = loadSound("Background.mp3")
  exOne = loadImage("ExerciseOne.PNG")
  arrow = loadImage("Arrow.png")
  exThree = loadImage("Key.png")
}

function setup()
{
  createCanvas(400, 380);
  background(240);
  for (let i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
  back.loop()
}

function noiseLoop(diameter, min, max, rnd) 
{
  let cx = random(rnd || 1000);
  let cy = random(rnd || 1000);
  return function (angle) {
    let xoff = map(cos(angle), -1, 1, cx, cx + diameter);
    let yoff = map(sin(angle), -1, 1, cy, cy + diameter);
    let zoff = sin(angle) * 0.001;
    let r = noise(xoff, yoff, zoff);
    return map(r, 0, 1, min, max);
  };
}

function Particle() {
  this.xn = noiseLoop(0.05, -width, width * 2);
  this.yn = noiseLoop(0.05, -height, height * 2);
  this.rn = noiseLoop(0.5, 0, 255);
  this.gn = noiseLoop(0.5, 0, 255);
  this.bn = noiseLoop(0.5, 0, 255);
  this.dn = noiseLoop(0.5, 1, 10);
  this.an = noiseLoop(1, 5, 200);
  
  this.render = function (a) {
    noStroke();
    fill(this.rn(a), this.gn(a), this.bn(a), this.an(a));
    circle(this.xn(a), this.yn(a), this.dn(a));
  };
}

var particles = new Array(200);
var totalFrames = 240;
var counter = 0;

function draw() 
{
  counter++;
  if (mode == 0)
  {
    homeScreen(); 
    
  }
  if (mode == 1) 
  {
    screen1();
  } 
  else if (mode == 2) 
  {
    screen2();
  } 
  else if (mode == 3) 
  {
    screen3();
  }
  else if (mode == 4) 
  {
    screen1In();
  } 
  else if (mode == 5) 
  {
    screen1L2(); 
  }
  else if(mode == 6)
    {
    screen2In()
    }
  else if(mode == 7)
    {
    screen3In()
    }
  else if(mode == 8)
    {
    screen1L3()
    }
}

function homeScreen() 
{
  mode = 0;
  background(240);
  
  push();
  percent = (counter % totalFrames) / totalFrames;
  let a = percent * TWO_PI;
  for (let i = 0; i < particles.length; i++) 
  {
    particles[i].render(a);
  }
  pop();
  
  //Welcome User
push();
  textStyle(BOLD);
  textSize(40)
  text("Welcome, User!",10,48)
  textAlign(LEFT);
pop();

  //Instruction Box
push();
  fill(255);
  rect(10, 50, 380, 45, 10);

pop();
  
  //Instruction
push();
  strokeWeight(1);
  textStyle(BOLD);
  textSize(16);
  textAlign(CENTER, BASELINE);
  text('Click on one of the exercises below', 0, 55, width);

  textAlign(CENTER, BOTTOM);
  text('to get started.', 0, 90, width);
pop();

  //First Exercise 
  push();
  strokeWeight(1);
  if ((mode == 0) && (mouseX > 10) && (mouseX < 390) &&
    (mouseY > 110) && (mouseY < 185)) 
    {
    fill(144, 255, 144);
    } 
  else 
    {
    fill(255);
    }
  rect(10, 110, 380, 75, 15);
  pop(); 
  
  textStyle(BOLD);
  textSize(30);
  textAlign(LEFT, BASELINE);
  text('Exercise One:', 20, 117, width)

  textAlign(LEFT, BOTTOM);
  text('Brain Puzzles', 20, 180, width);

  //Second Exercise 
  push();
  strokeWeight(1);
  if ((mouseX > 10) && (mouseX < 390) &&
    (mouseY > 200) && (mouseY < 275)) 
    {
        fill(144, 255, 144);
        
    } 
  else 
    {
    fill(255);
    }
  rect(10, 200, 380, 75, 15);
  pop();
  
  textStyle(BOLD);
  textSize(30);
  textAlign(LEFT, BASELINE);
  text('Exercise Two:', 20, 207, width);

  textAlign(LEFT, BOTTOM);
  text('Tunnel Game', 20, 270, width);

  //Third Exercise  
push();
  strokeWeight(1);
  if ((mouseX > 10) && (mouseX < 390) &&
    (mouseY > 290) && (mouseY < 365)) 
    {
    fill(144, 255, 144);
     
    } 
  else 
    {
    fill(255);
    }
  rect(10, 290, 380, 75, 15);
pop();
  
  textStyle(BOLD);
  textSize(30);
  textAlign(LEFT, BASELINE);
  text('Exercise Three:', 20, 297, width);

  textAlign(LEFT, BOTTOM);
  text('Typing Practice', 20, 360, width);
  
  //First Line
  strokeWeight(1);
  line(290, 115, 290, 180);
  
  //Second Line
  strokeWeight(1);
  line(290, 205, 290, 270);
  
  //Third Line
  strokeWeight(1);
  line(290, 295, 290, 360);
  
  //First Exercise Icon
  push();
  strokeWeight(0);
  fill(0);
  ellipse(345, 140, 45, 45);
  pop();
  
  push();
  strokeWeight(0);
  fill(255);
  rect(302, 128, 40, 40);
  pop();
  
  push();
  strokeWeight(0);
  fill(0);
  rect(300, 130, 40, 40);
  pop();
  
  push();
  strokeWeight(0);
  fill(255);
  translate(293, 107);
  triangle(30, 65, 58, 20, 86, 65);
  pop();
  
  push();
  strokeWeight(0);
  fill(0);
  translate(293, 110);
  triangle(30, 65, 58, 20, 86, 65);
  pop();
  
  //Second Exercise Icon
  push();
  strokeWeight(1);
  fill(255);
  rect(309, 215, 57, 45);
  strokeWeight(1);
  translate(280, 195);
  triangle(30, 65, 58, 20, 86, 65);
  pop();
  
  //Third Exercise Icon
  textSize(35);
  text("A", 307, 330);
  text("B", 344, 330);
  text("C", 307, 365);
  text("...", 339, 365);
}

function BACKNEXT()
{
  //Back
push();
  if ((mouseX > 5) && (mouseX < 200) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
    fill(144, 255, 144);
    }
  
  else
    {
  fill(255);
    }
  strokeWeight(1);
  rect(10, 320, 185, 50, 10);
pop();
  
  //Next Game
push();
  if ((mouseX > 200) && (mouseX < 395) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
    fill(144, 255, 144);
    }
  else
    {
  fill(255);
    }
  strokeWeight(1);
  rect(205, 320, 185, 50, 10);
pop();
  
  //Home Text
push();
  textSize(45)
  textStyle(BOLD)
  fill('black')
  text("Home", 40,370, width)
  fill(0);
pop();
  
  //Next Text
push();
  textSize(45)
  textStyle(BOLD)
  fill('black')
  text("Next", 247,370, width)
  fill(0);
pop();
}

function screen1()
{  
  if(mouseIsPressed)
  {
  game1MouseInput()
  }
  if(keyIsPressed)
    {
  game1KeyInput()
    }
  BACKNEXT()
}

function game1L1GUI()
{
  mode = 1; 
  background(240);

push(); 
  textStyle(BOLD)
  
  //Shape One
  fill('white')
  square(20,20,60)
  fill('black')
  square(20,20,30)
  square(50,50,30)
  
  //Shape Two
  fill('white')
  square(100,20,60)
  fill('black')
  square(100,20,30)
  square(130,20,30)
  
  //Shape Three
  fill('white')
  square(100,100,60)
  fill('black')
  square(100,130,30)
  square(130,100,30)
  
  //Question Mark
  textSize(40)
  text("?",40,152)
  
  //Shape Four
  fill('white')
  square(100,180,60)
  fill('black')
  square(130,180,30)
  square(130,210,30)
  
  //Shape Five
  fill('white')
  square(20,180,60)
  fill('black')
  square(20,180,30)
  square(20,210,30)
  
  //Shape A
  fill('white')
  square(240,55,60)
  fill('black')
  square(240,55,30)
  square(270,85,30)
  
  textSize(20)
  text("A",262,50)
  
  //Shape B
  fill('white')
  square(320,55,60)
  fill('black')
  square(320,55,30)
  square(320,85,30)
  
  textSize(20)
  text("B",342,50)
  
  //Shape C
  fill('white')
  square(240,170,60)
  fill('black')
  square(240,200,30)
  fill('black')
  square(270,200,30)
  
  textSize(20)
  text("C",262,165)
  
  //Shape D
  fill('white')
  square(320,170,60)
  fill('black')
  square(320,200,30)
  fill('black')
  square(320,170,30)
  fill('black')
  square(350,200,30)
  
  textSize(20)
  text("D",342,165)
  
  //Instructions
push();
  fill(255);
  strokeWeight(1);
  rect(10, 250, 380, 60, 10);
pop();
  
push();
  textAlign(CENTER, BASELINE)
  textSize(50)
  textStyle(BOLD)
  text("Level One",1,258, width)
pop();
}

function game1L2GUI()
{
  mode = 5; 
  background(240);

push(); 
  textStyle(BOLD)
  
  //Shape One
push();
  fill('white')
  square(20,70,60)
  strokeWeight(0)
  fill('green')
  ellipse(38, 115, 22, 20)
  fill('purple')
  triangle(52, 125, 62, 105, 72, 125);
pop();
  
  //Shape Two
push();
  fill('white')
  square(100,70,60)
  strokeWeight(0)
  fill('green')
  ellipse(118, 115, 22, 20)
  fill('purple')
  triangle(118, 110, 128, 90, 138, 110);
  fill('cyan')
  square(128, 103, 22);
pop();
  
  //Question Mark
push();
  fill(0)
  textSize(40)
  text("?",118, 205)
pop();
  
  //Shape Five
push();
  fill('white')
  square(20,155,60)
  strokeWeight(0)
  fill('green')
  ellipse(38, 200, 22, 20)
  fill('purple')
  triangle(53, 180, 63, 160, 73, 180);
  fill('cyan')
  square(40, 175, 22);
  fill(255, 195, 0)
  rect(53, 190, 20, 20);
pop(); 
  
  //Shape A
push();
  fill('white')
  square(240,55,60)
  strokeWeight(0)
  fill('green')
  ellipse(38, 200, 22, 20)
  fill('purple')
  triangle(280, 75, 290, 55, 300, 75);
  fill('cyan')
  square(265, 70, 22);
  fill(255, 195, 0)
  rect(255, 80, 20, 20);
  fill('red')
  ellipse(285, 100, 28, 28)
pop();
  
push();
  fill(0)
  textSize(20)
  text("A",262,50)
pop();
  
  //Shape B
push();
  fill('white')
  square(320,55,60)
  strokeWeight(0)
  fill('purple')
  triangle(360, 75, 370, 55, 380, 75);
  fill('red')
  ellipse(365, 100, 28, 28)
pop();
  
push();
  fill(0)
  textSize(20)
  text("B",342,50)
pop();
  
push();
  //Shape C
  fill('white')
  square(240,170,60)
  strokeWeight(0)
  fill('green')
  ellipse(258, 215, 22, 20)
  fill('cyan')
  square(265, 186, 22);
  fill(255, 195, 0)
  rect(255, 196, 20, 20);
  fill('red')
  ellipse(285, 216, 28, 28)
pop();
  
push();
  fill(0)
  textSize(20)
  text("C",262,165)
pop();
  
push();
  //Shape D
  fill('white')
  square(320,170,60)
  strokeWeight(0)
  fill('purple')
  triangle(360, 190, 370, 170, 380, 190);
  fill('green')
  ellipse(338, 215, 22, 20)
  fill('cyan')
  square(345, 186, 22);
  fill(255, 195, 0)
  rect(335, 196, 20, 20);
  fill('red')
  ellipse(365, 216, 28, 28)
pop();
  
push();
  fill(0)
  textSize(20)
  text("D",342,165)
pop(); 
  
  //Instructions
push();
  fill(255);
  strokeWeight(1);
  rect(10, 250, 380, 60, 10);
pop();
  
push();
  textAlign(CENTER, BASELINE)
  textSize(50)
  textStyle(BOLD)
  text("Level Two",1,258, width)
pop();
}
function game1L3GUI()
{
  mode = 8; 
  background(240);

push(); 
  textStyle(BOLD)
  
  //Shape One
push();
  fill('white')
  square(20,20,60)
  fill(220)
  square(30,30,40)
pop(); 

push();
  //Shape Two
  fill('white')
  square(100,20,60)
  fill(220)
  square(110,30,40)
  fill(0)
  square(120,40,20)
pop();
  
  //Shape Three
push();
  fill('white')
  square(100,100,60)
  fill(0)
  square(110,110,40)
  fill(0, 116, 165)
  square(120,120,20)
pop(); 

    //Shape Four
push(); 
  fill('white')
  square(20,100,60)
  fill(0)
  square(30,110,40)
pop(); 
  
  //Question Mark
push(); 
  textSize(40)
  text("?", 75, 220)
pop(); 

push();
  textSize(20)
  text("A",262,50)
pop(); 
  
  //Shape A
push();
  fill('white')
  square(240,55,60)
  fill(0, 116, 165)
  square(250,65,40)
pop(); 
  
  //Shape B
push();
  fill('white')
  square(320,55,60)
  fill(220)
  square(330,65,40)
  fill(0, 116, 165)
  square(340,75,20)
pop();

push();
  textSize(20)
  text("B",342,50)
pop();
  
  //Shape C
push();
  fill('white')
  square(240,170,60)
  fill(0, 116, 165)
  square(250,180,40)
  fill(0)
  square(260,190,20)
pop();
  
push();
  textSize(20)
  text("C",262,165)
pop(); 
  
  //Shape D
push(); 
  fill('white')
  square(320,170,60)
  fill(220)
  square(330,180,40)
pop();
  
push();
  textSize(20)
  text("D",342,165)
pop(); 
  
  //Instructions
push();
  fill(255);
  strokeWeight(1);
  rect(10, 250, 380, 60, 10);
pop();
  
push();
  textAlign(CENTER, BASELINE)
  textSize(50)
  textStyle(BOLD)
  text("Level Three",1,258, width)
pop();
}
function game1KeyInput()
{
  if (mode == 1) 
  {
    if(key == 'A' || key == 'a')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250)
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  
    if(key == 'B' || key == 'b')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  
    if(key == 'C' || key == 'c')
    {
    background(144, 255, 144)
    fill('white')
    textSize(100)
    text("Correct!",8 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  
    if(key == 'D' || key == 'd')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  }
}
function game1L2KeyInput()
{
  if (mode == 5) 
  {
    if(key == 'A' || key == 'a')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250)
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  
    if(key == 'B' || key == 'b')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  
    if(key == 'C' || key == 'c')
    {
       background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  
    if(key == 'D' || key == 'd')
    {
    background(144, 255, 144)
    fill('white')
    textSize(100)
    text("Correct!",8 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  }
}
function game1L3KeyInput()
{
  if (mode == 8) 
  {
    if(key == 'A' || key == 'a')
    {
     background(144, 255, 144)
    fill('white')
    textSize(100)
    text("Correct!",8 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  
    if(key == 'B' || key == 'b')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  
    if(key == 'C' || key == 'c')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  
    if(key == 'D' || key == 'd')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    }
  }
}
function game1MouseInput()
{
  if (mode == 1) 
    {
    if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 50) && (mouseY < 120) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 50) && (mouseY < 120) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 170) && (mouseY < 230))
      {
      background('red')
      fill('white')
      textSize(100)
      text("Wrong!", 30, 235) 
      textSize(25)
      text("Press 'ENTER' to retry", 60,140)
      fill(0)
      } 
    else if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 170) && (mouseY < 230))
      {
      background(144, 255, 144)
      fill('white')
      textSize(100)
      text("Correct!",8 ,250) 
      textSize(25)
      text("Press 'ENTER' to retry", 60,140)
      fill(0)
      }
  } 
}
function game1L2MouseInput()
{
  if (mode == 5) 
    {
    if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 50) && (mouseY < 120) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 50) && (mouseY < 120) ||(mouseX > 240) && (mouseX < 300) &&
    (mouseY > 170) && (mouseY < 230))
    {
     background('red')
      fill('white')
      textSize(100)
      text("Wrong!", 30, 235) 
      textSize(25)
      text("Press 'ENTER' to retry", 60,140)
      fill(0)
    } 
      else if ((mouseX > 320) && (mouseX < 380) &&
    (mouseY > 170) && (mouseY < 230))
         {
     background(144, 255, 144)
      fill('white')
      textSize(100)
      text("Correct!",8 ,250) 
      textSize(25)
      text("Press 'ENTER' to retry", 60,140)
      fill(0)
         }
      }

}
function game1L3MouseInput()
{
  if (mode == 8) 
    {
    if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 170) && (mouseY < 230) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 50) && (mouseY < 120) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 170) && (mouseY < 230))
      {
      background('red')
      fill('white')
      textSize(100)
      text("Wrong!", 30, 235) 
      textSize(25)
      text("Press 'ENTER' to retry", 60,140)
      fill(0)
      } 
    else if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 50) && (mouseY < 120))
      {
      background(144, 255, 144)
      fill('white')
      textSize(100)
      text("Correct!",8 ,250) 
      textSize(25)
      text("Press 'ENTER' to retry", 60,140)
      fill(0)
      }
  } 
}

function screen2()
{
window.open('https://editor.p5js.org/Plague_Doctor/full/GlrSiuvNY')
}

function game3GUI(){
  mode = 3
  background(240);
  
push();
  fill(255);
  strokeWeight(1);
  rect(10, 25, 380, 30, 10);
pop(); 

  gen = random(message)
  
push();
   if ((mouseX > 6) && (mouseX < 122) && (mouseY > 170) && (mouseY < 212))
    {
    fill(144, 255, 144);
    }
  else
    {
    fill(255);
    }
  rect(10, 172, 112, 40, 5);
  textSize(20)
  fill('black')
  text("Generate ", 22, 203)
pop();
  
push();
  textStyle(BOLD)
  textSize(17)
  fill('black')
  text(gen,20,50)
pop(); 

push();
  fill(255)
  rect(10, 227, 375, 75, 5);
  textStyle(BOLD)
  textSize(70)
  fill('black')
  text("Score: " + score, 15, 305)
pop();
  
  game3Box();
  game3Sum();
}

function game3Box()
{ 
  input = createInput();
  input.position(CENTER, CENTER);
  input.size(200);
}

function game3Sum()
{
  button = createButton("Submit");
  button.position(-65, 0, 'relative');
  button.mousePressed(drawName, mousePressed);
}

function drawName()
{
   name = input.value()
   nam1 = button.value()
      if ((name == gen))
        {
        push();
          background(144, 255, 144)
          fill('white')
          textSize(100)
          text("Correct!",8 ,250) 
          textSize(25)
          text("Press 'ENTER' to retry", 60,140)
          input.hide()
          button.hide()
          victory.play()
          score += 100
        pop(); 
        }
      else
        {
        push();
          background('red')
          fill('white')
          textSize(100)
          text("Wrong!",30 ,250) 
          textSize(25)
          text("Press 'ENTER' to retry", 60,140)
          input.hide()
          button.hide()
          defeat.play()
          score -= 100
        pop();
        
      }
  if(score <= 0)
    {
      score = 0
    }
}

function screen3()
{
BACKNEXT()
}

//game 1 Sound effects and Function
function mousePressed()
{
  //sound effects for game 1
  if (mode == 1) {
if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 50) && (mouseY < 120) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 50) && (mouseY < 120) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 170) && (mouseY < 230))
    {
    defeat.play()
    } 
      else if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 170) && (mouseY < 230))
         {
    victory.play()
         }
  }
  if(mode == 5)
    {
    if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 50) && (mouseY < 120) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 50) && (mouseY < 120) ||(mouseX > 240) && (mouseX < 300) &&
    (mouseY > 170) && (mouseY < 230))
    {
    defeat.play()
    } 
      else if ((mouseX > 320) && (mouseX < 380) &&
    (mouseY > 170) && (mouseY < 230))
         {
    victory.play()
         }
    }
  if(mode == 8)
    {
     if (mode == 8) 
    {
    if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 170) && (mouseY < 230) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 50) && (mouseY < 120) || (mouseX > 320) && (mouseX < 380) &&
    (mouseY > 170) && (mouseY < 230))
      {
        defeat.play()
      } 
    else if ((mouseX > 240) && (mouseX < 300) &&
    (mouseY > 50) && (mouseY < 120))
      {
        victory.play()
      }
  } 
    }
  //switch screens
   
  if (mode == 0)
    {
      if ((mouseX > 10) && (mouseX < 390) &&
    (mouseY > 110) && (mouseY < 185)) 
    {
   
      if (mouseIsPressed)
         {
     mode = 4 
      click.play(); 
         }
    } 
  
  //Second Exercise 
  if ((mouseX > 10) && (mouseX < 390) &&
    (mouseY > 200) && (mouseY < 275)) 
    {
        if (mouseIsPressed)
         {
        mode = 6;
        click.play(); 
         }
    } 
  
  if ((mouseX > 10) && (mouseX < 390) &&
    (mouseY > 290) && (mouseY < 370)) 
    {
    
      if (mouseIsPressed)
         {
       screen3In()
        click.play(); 
         }
    } 
    }
  
  else if (mode == 3)
    {
     if ((mouseX > 5) && (mouseX < 200) &&
    (mouseY > 290) && (mouseY < 365)) 
    {
     if (mouseIsPressed)
       {
         mode = 0;
         click.play()
         if (mode == 0)
           {
             input.hide()
             button.hide()
             score = 0
           }
       }
    }
  
  //Next Game
  if ((mouseX > 200) && (mouseX < 395) &&
    (mouseY > 290) && (mouseY < 365)) 
    {
    
      if(mouseIsPressed)
        {
          mode = 4
          click.play()
          if(mode == 4)
            {
              input.hide()
              button.hide()
              score = 0
            }
        }
    }
    }
 else if (mode == 1)
    {
      if ((mouseX > 5) && (mouseX < 200) &&
    (mouseY > 320) && (mouseY < 370)) 
      {
        if (mouseIsPressed)
          {
          mode = 0; 
          click.play(); 
          }
      }
  
  //Next Game
    if ((mouseX > 200) && (mouseX < 395) &&
    (mouseY > 320) && (mouseY < 365)) 
      {
    if (mouseIsPressed)
        {
        game1L2GUI()
        click.play();
        }
      }
    }
  else if(mode == 2)
    {
      if ((mouseX > 5) && (mouseX < 200) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
    if(mouseIsPressed)
      {
        mode = 0;
        click.play()
      }
    }
  if ((mouseX > 200) && (mouseX < 395) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
   if(mouseIsPressed)
     {
       mode = 7
       click.play()
     }
    }
    }
   else if(mode == 4)
    {
       if ((mouseX > 5) && (mouseX < 200) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
   if(mouseIsPressed)
     {
       mode = 0
       click.play()
     }
    }
  if ((mouseX > 200) && (mouseX < 395) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
    if(mouseIsPressed)
      {
        game1L1GUI()
        click.play()
      }
    }
    }
  else if(mode == 6)
    {
       if ((mouseX > 5) && (mouseX < 200) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
   if(mouseIsPressed)
     {
       mode = 0
       click.play()
     }
    }
  if ((mouseX > 200) && (mouseX < 395) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
    if(mouseIsPressed)
      {
        mode = 2
        click.play()
      }
    }
    }
  else if(mode == 7)
    {
       if ((mouseX > 5) && (mouseX < 200) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
   if(mouseIsPressed)
     {
       mode = 0
       click.play()
     }
    }
   if ((mouseX > 200) && (mouseX < 395) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
    if(mouseIsPressed)
      {
      game3GUI()
        click.play()
      }
    }
    }
  else if(mode == 5)
    {
      if ((mouseX > 5) && (mouseX < 200) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
   if(mouseIsPressed)
     {
       mode = 0
       click.play()
     }
    }
   if ((mouseX > 200) && (mouseX < 395) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
    if(mouseIsPressed)
      {
      game1L3GUI()
        click.play()
      }
    }
    }
  else if(mode == 8)
    {
       if ((mouseX > 5) && (mouseX < 200) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
   if(mouseIsPressed)
     {
       mode = 0
       click.play()
     }
    }
   if ((mouseX > 200) && (mouseX < 395) &&
    (mouseY > 320) && (mouseY < 370)) 
    {
    if(mouseIsPressed)
      {
     screen2In()
        click.play()
      }
    }
    }
  
  if (mode == 3)
    { 
    if ((mouseX > 10) && (mouseX < 390) &&
    (mouseY > 290) && (mouseY < 370)) 
      {
        if (mouseIsPressed)
        {
         mode = 3
        }
      }
    }
  
  if(mode == 3)
  {
    if ((mouseX > 6) && (mouseX < 122) && (mouseY > 170) && (mouseY < 212))
    {
      if(mouseIsPressed)
        {
          game3GUI(input.hide(), button.hide())
          generate.play()
        }
    }
  }
}

function keyTyped()
{
  if (mode == 1)
  {
    if (key == 'A' || key == 'a')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250)
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    defeat.play()
    }
  
  if (key == 'B' || key == 'b')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    defeat.play()
    }
  
  if (key == 'C' || key == 'c')
    {
    background(144, 255, 144)
    fill('white')
    textSize(100)
    text("Correct!",8 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    victory.play()
    }
  
  if (key == 'D' || key == 'd')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    defeat.play()
    }
   }
   if (mode == 5)
  {
    if (key == 'A' || key == 'a')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250)
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    defeat.play()
    }
  
  if (key == 'B' || key == 'b')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    defeat.play()
    }
  
  if (key == 'C' || key == 'c')
    {
     background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    defeat.play()
    }
  
  if (key == 'D' || key == 'd')
    {
    background(144, 255, 144)
    fill('white')
    textSize(100)
    text("Correct!",8 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    victory.play()
    }
   }
  if (mode == 8)
  {
    if (key == 'A' || key == 'a')
    {
   background(144, 255, 144)
    fill('white')
    textSize(100)
    text("Correct!",8 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    fill(0)
    victory.play()
    }
  
  if (key == 'B' || key == 'b')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    defeat.play()
    }
  
  if (key == 'C' || key == 'c')
    {
    background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    defeat.play()
    }
  
  if (key == 'D' || key == 'd')
    {
  background('red')
    fill('white')
    textSize(100)
    text("Wrong!",30 ,250) 
    textSize(25)
    text("Press 'ENTER' to retry", 60,140)
    defeat.play()
    }
   }
  if(mode == 5)
      {
        if(keyCode === ENTER)
          {
             game1L2GUI() 
          }
      }
  if(mode == 8)
      {
        if(keyCode === ENTER)
          {
             game1L3GUI() 
          }
      }
  
  if (mode == 1) 
    {
     if (keyCode === ENTER)
      {
       game1L1GUI() 
      }
    }

  if (mode == 3)
    {
    if (keyCode === ENTER)
       {
       game3GUI(input.hide(),button.hide())
       }
    }
}

function screen1In()
{
  mode = 4
  
  background(240);
  
  //Instructions Top
push();
  fill(255);
  strokeWeight(1);
  rect(10, 15, 380, 60, 10);
pop();
  
push();
  textAlign(CENTER, BASELINE)
  textSize(60)
  textStyle(BOLD)
  text("Instructions",0,20, width)
  image(exOne, 62, 83, 270, 160, 0, 0)
pop();

  //Instructions Bottom
push();
  fill(255);
  strokeWeight(1);
  rect(10, 250, 380, 60, 10);
pop();
  
push();
  textAlign(CENTER, BASELINE)
  textSize(13)
  textStyle(BOLD)
  text("Press on the key corresponding to the answer choice letter",1,255, width)
  
  textAlign(CENTER, BASELINE)
  textSize(15)
  textStyle(BOLD)
  text("OR", 1, 273, width);
  textSize(17)
  text("Use the mouse to click on the answer choice", 1, 290, width)
pop();
  BACKNEXT()
}

function screen1L2()
{
  mode = 5
   
  if(keyIsPressed)
  {
game1L2KeyInput()
  }
  if(mouseIsPressed)
    {
game1L2MouseInput()
    }
  BACKNEXT()
}

function screen1L3()
{
  mode = 8
if(keyIsPressed)
  {
game1L3KeyInput()
  }
  if(mouseIsPressed)
    {
game1L3MouseInput()
    }
  BACKNEXT()
}

function screen2In()
{
  mode = 6
  
  background(240);
   
  //Instructions Top
push();
  fill(255);
  strokeWeight(1);
  rect(10, 15, 380, 60, 10);
pop();
  
push();
  textAlign(CENTER, BASELINE)
  textSize(60)
  textStyle(BOLD)
  text("Instructions",0,20, width)
  image(arrow, 110, 83, 180, 160, 0, 0)
pop();

  //Instructions Bottom
push();
  fill(255);
  strokeWeight(1);
  rect(10, 250, 380, 60, 10);
pop();
  
push();
  textAlign(CENTER, BASELINE)
  textSize(18)
  textStyle(BOLD)
  text("Press the arrow keys to navigate the ship",1,255, width)
  
  textAlign(CENTER, BASELINE)
  textSize(12)
  textStyle(BOLD)
  text("AND", 1, 275, width);
  textSize(21)
  text("Avoid colliding with the other ships", 1, 287, width)
pop();
  
  BACKNEXT()
}

function screen3In()
{
  mode = 7
  background(240);
    //Instructions Top
push();
  fill(255);
  strokeWeight(1);
  rect(10, 15, 380, 60, 10);
pop();
  
push();
  textAlign(CENTER, BASELINE)
  textSize(60)
  textStyle(BOLD)
  text("Instructions",0,20, width)
  image(exThree, 0, 100, 400, 130, 0, 0)
pop();

  //Instructions Bottom
push();
  fill(255);
  strokeWeight(1);
  rect(10, 250, 380, 60, 10);
pop();
  
push();
  textAlign(CENTER, BASELINE)
  textSize(19)
  textStyle(BOLD)
  text("Type the message shown above the box",1,255, width)
  
  textAlign(CENTER, BASELINE)
  textSize(12)
  textStyle(BOLD)
  text("AND", 1, 275, width);
  textSize(14)
  text("Press the 'Generate' button to generate a new message", 1, 290, width)
pop();
  BACKNEXT()
} 