const iqTest = numbers => {
    const arr = numbers.split(' ')
    let odd = []
    let even = []
    for (const number of arr) {
      if (number % 2 === 0) even = [...even, number]
      if (number % 2 !== 0) odd = [...odd, number]
    }
    if (even.length > odd.length) {
      for (const number in arr) {
        if (arr[number] % 2 !== 0) return parseInt(number) + 1
      }
    } else {
      for (const number in arr) {
        if (arr[number] % 2 === 0) return parseInt(number) + 1
      }
    }
  }