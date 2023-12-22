class Walker {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  show() {
    stroke(0)
    strokeWeight(1)
    point(this.x, this.y)
  }
  step() {
    let choice = parseInt(random(4))

    switch (choice) {
      case 0:
        this.x++
        break
      case 1:
        this.x--
        break
      case 2:
        this.y++
        break
      default:
        this.y--
    }
  }
}
let walker
function setup() {
  createCanvas(800, 800)
  background(255)
  walker = new Walker(width / 2, height / 2)
}

function draw() {
  walker.show()
  walker.step()
}
