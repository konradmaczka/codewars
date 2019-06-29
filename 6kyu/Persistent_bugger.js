const persistence = number => {
    let counter = 0
    while (number > 9) {
        number = multiplier(number)
        counter++
    }
    return counter
}

const multiplier = number => {
    let output = 1
    const numbers = number.toString().split('')
    for (const number of numbers) {
        output *= number
    }
    return output
}