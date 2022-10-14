let colorlist =   ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet','white','pink','golden']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightskyblue');
}

function draw() {
    text("Made by Dhruv ❤️");
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 25);
}
