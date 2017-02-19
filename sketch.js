function setup() {
  createCanvas(720,480);
  background(200,190,150,50);
}

function draw() {
   //neck
  fill(0);
  stroke(100)
  strokeWeight(3) 
  line(width/2,180,width/2,260)
  
  fill(0)
  stroke(100)
  strokeWeight(3) 
  line(width/2-10,180,width/2-10,260)
  
  fill(0)
  stroke(100)
  strokeWeight(3) 
  line(width/2+10,180,width/2+10,260)
  
   //antennas
  fill(0)
  stroke(100)
  strokeWeight(3)
  line(width/2-20,180,width/2+40,20)
  
  fill(0)
  stroke(100)
  strokeWeight(3)
  line(width/2+20,180,width/2-40,90)
  
  fill(0)
  stroke(100)
  strokeWeight(3)
  line(width/2-30,140,width/2+80,160)

   //head
  fill('#9da1c7')
  noStroke()
  ellipse(360,140,100,100)
  
  fill(255)
  noStroke()
  ellipse(375,135,30,30)
  
  fill('#9da1c7')
  noStroke()
  ellipse(375,135,6,6)
  
  fill('#9dcbd4')
  noStroke(0)
  ellipse(390,155,6,6)
  
  fill('#9dcbd4')
  noStroke(0)
  ellipse(380,110,8,8)
  
  fill('#9dcbd4')
  noStroke(0)
  ellipse(350,130,10,10)
  
   //body
  fill('#9da1c7')
  ellipse(350,395,80,80)
  
  fill('#a3d299')
  rect(300,250,100,145)
  
  fill('#9dcbd4')
  rect(300,270,100,8)
  
}