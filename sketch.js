let system;

// how far the spraypaint dots can spread
let spread = 10;
// how many dots to draw each frame
let numDots = 25;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  system = Array(20);
}

function draw() { 
    // let img = loadImage('assets/sand.jpg')
    background(233, 196, 140);
    // if (mouseIsPressed) {     
        add(new Particle(mouseX, mouseY));
    // }
    runSystem();
    display();
}

function add(particle) {
    let found = false;
    for (let i = 0; i < system.length; i++) {
        console.log(system[i])
        if (system[i] == undefined) {
            system[i] = particle
            found = true;
            break;
        }
    }

    if (!found) {
        system.push(particle);
    }
}

function display() {
    for (let i = 0; i < system.length; i++) {
        if (system[i] != undefined) {
            noStroke();
            fill(198, 151, 91, system[i].lifespan);

            // stroke(255, 212, 158, system[i].lifespan);
            // strokeWeight(1);
            // for (let d = 0; d < numDots; d++) {
            //     // local variables to make code easier to read
            //     let randx = random(-spread, spread);
            //     let randy = sqrt(spread*spread - randx*randx)
            //     let locx = system[i].x + randx;
            //     let locy = system[i].y + random(-randy, randy);
            //     ellipse(locx, locy, 5, 5);
            // }
            ellipse(system[i].x, system[i].y, 20, 20);
        }
    }
}

function runSystem() {
    for (let i = 0; i < system.length; i++) {
        if (system[i] != undefined) {
            system[i].lifespan -= 1;
            console.log(system[i].lifespan)
            if (system[i].lifespan < 0) {
                system[i] = undefined;
            }
        }
    }
}

// A simple Particle class
class Particle {
    constructor(x, y) {
        this.acceleration = createVector(0, 0.05);
        this.velocity = createVector(random(-1, 1), random(-1, 0));
        this.x = x;
        this.y = y;
        this.lifespan = 100;
    }
};
