const countBits = number => {
    number = number.toString(2)
    let count = 0
    for (const digit of number.split('')) {
      digit === '1' && count++ 
    }
    return count
  }