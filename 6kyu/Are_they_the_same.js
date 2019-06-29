const comp = (array1, array2) => {
    if (array1 === null || array2 === null) return false
    if (array1.length !== 0 && array2.length !== 0) {
      let a = array1.sort((a, b) => a - b)
      let b = array2.sort((a, b) => a - b)
      const output = a.map(el => el * el)
      for (const num in b) {
        if (b[num] != output[num]) return false
      }
      return true
    }
    if (array1.length === 0 && array2.length === 0) return true
    return false
  }