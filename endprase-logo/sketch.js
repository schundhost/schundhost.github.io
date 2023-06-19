let circle1Points = [];
let circle2Points = [];
let myFont;

function setup() {
  createCanvas(800, 800);
  frameRate(1);
  myFont = loadFont('fonts/PPTelegraf-Regular.otf');
  slider = createSlider(50, 200, 200);
  slider.style("transform", "rotate(-90deg)");
  slider.position(-105, 400);
  slider.style('width', '250px');
  slider2 = createSlider(50, 200, 200);
  slider2.style("transform", "rotate(-90deg)");
  slider2.position(650, 400);
  slider2.style('width', '250px');
}

function draw() {
  background(255);
  let val = slider.value();
  let val2 = slider2.value();

  // Circle 1
  noFill();
  let circle1X = 600;
  let circle1Y = 400;
  let circle1Radius = val2;
  drawCircle(circle1X, circle1Y, circle1Radius);
  drawRandomPointsOnCircle(circle1X, circle1Y, circle1Radius, circle1Points);

  // Circle 2
  noFill();
  let circle2X = 200;
  let circle2Y = 400;
  let circle2Radius = val;
  drawCircle(circle2X, circle2Y, circle2Radius);
  drawRandomPointsOnCircle(circle2X, circle2Y, circle2Radius, circle2Points);

  // Draw quads between the points
  
  drawQuads();

  fill(255)
  stroke(0)
  strokeWeight(3)
  textSize(80)
  textAlign(CENTER)
  textFont(myFont)
  text('endpräse14',0,420,width,200)

  //noLoop()
}

function drawCircle(x, y, radius) {
  strokeWeight(1)
  stroke(0)
  //noStroke()
  noFill();
  circle(x, y, radius * 2);
}

function drawRandomPointsOnCircle(x, y, radius, pointsArray) {
  pointsArray.length = 0; // Clear the array
  for (let i = 0; i < 4; i++) {
    let angle = random(0, TWO_PI);
    let pointX = x + cos(angle) * radius;
    let pointY = y + sin(angle) * radius;

    pointsArray.push(createVector(pointX, pointY));
    //fill(0, 255, 0);
    noFill()
    ellipse(pointX, pointY, 10, 10);
  }
}

function drawQuads() {
  noFill();
  stroke(0);
  if (circle1Points.length === 4 && circle2Points.length === 4) {
    for (let i = 0; i < 4; i++) {
      let point1 = circle1Points[i];
      let point2 = circle2Points[i];
      let nextIndex = (i + 1) % 4;
      let nextPoint1 = circle1Points[nextIndex];
      let nextPoint2 = circle2Points[nextIndex];
      
      fill(0)
      //noFill()
      quad(point1.x, point1.y, point2.x, point2.y, nextPoint2.x, nextPoint2.y, nextPoint1.x, nextPoint1.y);
    }
  }
}
