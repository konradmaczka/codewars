const findNextSquare = number => {
    const square = Math.sqrt(number) + 1
    if (square % 1 === 0) return square * square
    return -1
}