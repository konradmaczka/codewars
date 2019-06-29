const mxdiflg = (a, b) => {
    let lenghtsA = []
    let lenghtsB = []
    if (a.length === 0 || b.length === 0) return -1
    for (const el of a) {
      lenghtsA.push(el.length)
    }
    for (const el of b) {
      lenghtsB.push(el.length)
    }
    lenghtsA = lenghtsA.sort((a, b) => a - b)
    lenghtsB = lenghtsB.sort((a, b) => a - b)
    if (lenghtsA[lenghtsA.length - 1] - lenghtsB[0] > lenghtsB[lenghtsB.length - 1] - lenghtsA[0]) {
      return lenghtsA[lenghtsA.length - 1] - lenghtsB[0]
    } else {
      return lenghtsB[lenghtsB.length - 1] - lenghtsA[0]
    }
  }