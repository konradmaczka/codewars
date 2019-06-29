const inArray = (a1, a2) => {
    let result = []
    for (const e1 of a1) {
      for (const e2 of a2) {
        e2.includes(e1) && result.push(e1)
      }
    }
    return [...new Set(result.sort())]
  }