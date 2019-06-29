const countPositivesSumNegatives = input => {
    if (!input || input.length === 0) return []
    let count = 0
    let sum = 0
    for (const number of input) {
      number > 0 ? count++ : sum += number
    }
    return [count, sum]
  }