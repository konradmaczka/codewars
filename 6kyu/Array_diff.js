const array_diff = (a, b) => {
    let output = []
    for (const element of a) {
      !b.includes(element) && output.push(element)
    }
    return output
  }