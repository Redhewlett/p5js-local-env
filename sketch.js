const radius = 300
const rings = 40
const numPoints = 500

function setup() {
  createCanvas(800, 800)
}

function draw() {
  noFill()
  background(220)
  for (let r = 20; r < radius; r += radius / rings) {
    beginShape()
    for (a = 0; a < TAU; a += TAU / numPoints) {
      strokeWeight(2)
      var x = width / 2 + r * cos(a)
      var y = height / 2 + r * sin(a)

      curveVertex(x + (random(5) / 0.005) * TAU, y + (random(5) / 0.005) * TAU)
    }
    endShape(CLOSE)
  }

  noLoop()
}
