class Drop {
  constructor(x, y, speed, env) {
    this.x = x
    this.y = y
    this.speed = speed
    this.env = env
  }

  show() {
    stroke("white")
    strokeWeight(random(2))
    point(this.x, this.y)
  }

  fall() {
    this.y += this.speed
    if (this.y >= this.env) {
      this.y = 0
      this.x = random(800)
    }
  }
}

let drops = []

function setup() {
  createCanvas(800, 500)
  // drop = new Drop(10, 10, 1, height)
  for (let i = 0; i < width; i += 1) {
    let dr = new Drop(random(0, width), random(10, width), random(5, 1), height)
    drops.push(dr)
  }
}

function draw() {
  background(000)

  drops.forEach((drop) => {
    drop.fall()
    drop.show()
  })
}
