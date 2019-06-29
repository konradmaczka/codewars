const parse = data => {
    let value = 0
    let output = []
    for (let letter of data) {
      switch (letter) {
        case 'i': 
          value++
          break
        case 'd':
          value--
          break
        case 's':
          value *= value
          break
        case 'o':
          output.push(value)
      }
    }
    return output
  }