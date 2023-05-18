class Particle {
  constructor(xPos, yPos, radius) {
    this.x = xPos;
    this.y = yPos;
    this.r = radius;

    this.svgElement;

    this.animDuration = randomNum(3, 5);

    this.targetX = randomNum(0, width);
    this.targetY = randomNum(0, height);
  }

  drawParticle() {
    this.svgElement = makeCircle(this.x, this.y, this.r);
    svg.appendChild(this.svgElement);

    this.addAnimateX();
    this.addAnimateY();
  }

  addAnimateX() {
    let animElement = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animElement.setAttribute('attributeName', 'cx');
    animElement.setAttribute('values', `${this.x}; ${this.targetX};`);
    animElement.setAttribute('dur', `${this.animDuration}`);
    animElement.setAttribute('repeatCount', 'indefinite');
    this.svgElement.appendChild(animElement);
  }

  addAnimateY() {
    let animElement = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animElement.setAttribute('attributeName', 'cy');
    animElement.setAttribute('values', `${this.y}; ${this.targetY};`);
    animElement.setAttribute('dur', `${this.animDuration}`);
    animElement.setAttribute('repeatCount', 'indefinite');
    this.svgElement.appendChild(animElement);
  }
}

function createParticlesArray(num) {
  let particleInstances = [];

  for (let i = 0; i < num; i++) {
    let particleX = width / 2;
    let particleY = height / 2;
    let particleSize = randomNum(width * 0.001, width * 0.005);
    particleInstances.push(new Particle(particleX, particleY, particleSize));
  }

  return particleInstances;
}

let particles;
let svg;

function initialize() {
  width = window.innerWidth;
  height = window.innerHeight;
  
  svg = document.getElementById("particle-canvas");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("style", "background-color: black");

  particles = createParticlesArray(50);

  for (let particle of particles) {
    particle.drawParticle();
  }
}

function resizeSvg() {
  initialize();
}

window.addEventListener("resize", resizeSvg);

initialize();
