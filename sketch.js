const points = []

function setup() {
  createCanvas(800, 500)
  for (let i = 0; i < 23000; i++){
    points.push({x:random(800),y:random(500)})
  }
}


function draw() {
  background(0)
  
  for (let i = 0; i < points.length; i++){
    // trying to play with lerp to modulate the movement
    const finalX = i % 2 == 0 ? lerp(randomGaussian(points[i].x),random(800), 0.5) :  lerp(random(points[i].x),random(500), 0.5)
    const finalY = i % 2 == 0 ? lerp(random(points[i].y),random(500), 0.2) :  lerp(randomGaussian(points[i].y),random(800), 0.2)
    point(finalX, finalY)
    strokeWeight(random(3));
    stroke(random(200))
  }

}
