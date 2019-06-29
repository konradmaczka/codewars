const uniqueInOrder = input => {
    let output = []
    for (let i = 0; i < input.length + 1; i++) {
      if (input[i + 1] !== input [i]) output.push(input[i])
    }
    return output
  }