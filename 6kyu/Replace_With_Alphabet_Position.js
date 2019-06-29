const alphabetPosition = text => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const arr = [...text.toLowerCase().split('')]
    let output = []
    for (const letter of arr) {
      output.push(parseInt(alphabet.indexOf(letter)) + 1)
    }
    return output.filter(num => num > 0).join(' ')
  }