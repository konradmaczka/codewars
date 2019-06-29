const pointsNumber = (radius) => {
    let number = 0
    for (let x = -radius; x <= radius; x++) {
      for (let y = -radius; y <= radius; y++) {
        if (isInSquare(x, y, radius)) number++
      }
    }
    return number
  }
  
  const isInSquare = (x, y, r) => {
    return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2)
  }