// The SketchRNN model

let sketchRNN;
let currentStroke;
let x, y;
let nextPen = 'down';
let seedPath = [];
let seedPoints = [];
let personDrawing = false;

function preload() {
  sketchRNN = ml5.sketchRNN('palm_tree'); //, {pixelFactor: 0.25} 'palm_tree' 'face'
}

function startDrawing() {
  personDrawing = true;
  x = mouseX;
  y = mouseY;
}

function sketchRNNStart() {
  personDrawing = false;
  seedPath = [];
  // Converting to SketchRNN states
  for (let i = 1; i < seedPoints.length; i++) {
    let strokePath = {
      dx: seedPoints[i].x - seedPoints[i - 1].x,
      dy: seedPoints[i].y - seedPoints[i - 1].y,
      pen: 'down'
    };
    seedPath.push(strokePath);
  }

  sketchRNN.generate(seedPath, gotStrokePath);
}

function setup() {
  let canvas = createCanvas(windowWidth, 850); //windowHeight
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(233, 196, 140);
  
  // canvas.mousePressed(startDrawing);
  // canvas.mouseReleased(sketchRNNStart);
  // sketchRNN.generate(gotStrokePath);
  console.log('model loaded');
}

function mousePressed() {
  console.log('pressed');
  background(233, 196, 140);
  seedPoints = [];
  startDrawing();
}

function mouseReleased() {
  console.log('released');
  sketchRNN.reset();
  currentStroke = null;
  nextPen = 'down';
  sketchRNNStart();
}

function gotStrokePath(error, strokePath) {
  currentStroke = strokePath;
}

function draw() {
  stroke('#a4814d');
  strokeWeight(6.0);

  if (personDrawing) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    seedPoints.push(createVector(mouseX, mouseY));
  }

  if (currentStroke) {
    if (nextPen == 'end') {  
      /* For continuing after one drawing:
      sketchRNN.reset();
      sketchRNNStart();
      currentStroke = null;
      nextPen = 'down';
      */
      return;
    } 

    if (nextPen == 'down') {
      line(x, y, x + currentStroke.dx, y + currentStroke.dy);
    }
    x += currentStroke.dx;
    y += currentStroke.dy;
    nextPen = currentStroke.pen;
    currentStroke = null;
    sketchRNN.generate(gotStrokePath);
  }
}
