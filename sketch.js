function collatz(n) {
  if (n % 2 === 0) {
    return n / 2
  } else {
    return (n * 3 + 1) / 2
  }
}

function setup() {
  createCanvas(900, 900)
  background(0)

  let len = 5
  const angle = 0.2

  // for (let i = 1; i < 10000; i++) {
  //   resetMatrix()
  //   translate(width / 2, height)
  //   let n = i
  //   do {
  //     n = collatz(n)

  //     if (n % 2 === 0) {
  //       rotate(angle)
  //     } else {
  //       rotate(-angle)
  //     }

  //     stroke(255)

  //     line(0, 0, len, 0)

  //     translate(len, 0)
  //   } while (n !== 1)
  // }

  //  better solution

  for (let i = 1; i < 10000; i++) {
    let intArr = []
    let n = i
    do {
      intArr.push(n)
      n = collatz(n)
    } while (n !== 1)

    intArr.push(1)
    intArr.reverse()

    resetMatrix()
    translate(0, height / 2)

    for (let j = 0; j < intArr.length; j++) {
      let value = intArr[j]
      if (value % 2 === 0) {
        rotate(-angle)
      } else {
        rotate(angle)
      }
      stroke(255)
      line(0, 0, len, 0)
      translate(len, 0)
    }
  }
}

function draw() {
  // background(0)
}
