const findNb = m => {
    if (1 ** 3 === m) return 1
    let n = 2
    let volume = 1
    while (volume < m) {
      volume = volume + n ** 3
      if (volume === m) {
        return n
      } else {
        n++
        continue
      }
    }
    return -1
  }