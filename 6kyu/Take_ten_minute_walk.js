const isValidWalk = walk => {
    let n = 0
    let s = 0
    let w = 0
    let e = 0
    if (walk.length === 10) {
      for (const direction of walk) {
        if (direction === "n") n++
        if (direction === "s") s++
        if (direction === "w") w++
        if (direction === "e") e++
      }
      if (n === s && w === e) return true
    }
    return false
  }