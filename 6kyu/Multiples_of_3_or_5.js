const solution = number => {
    let arr = []
    let counter = 0
    for (let i = 1; i < number; i++) {
        (i % 5 === 0 || i % 3 === 0) && arr.push(i)
    }
    arr = new Set(arr)
    for (let item of arr) {
        counter += item
    }
    return counter
}