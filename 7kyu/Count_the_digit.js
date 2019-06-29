const nbDig = (n, d) => {
    let range = function* (last) {
        let k = 0
        while (k <= last) {
            yield k
            k += 1
        }
    }
    let square = k => k ** 2
    let countDigits = k => {
        let count = 0
        do {
            if (k % 10 == d) count += 1
            k = Math.floor(k / 10)
        } while (k)
        return count
    }
    let sum = (a, b) => a + b
    let count = 0
    for (let k of range(n))
        count = sum(count, countDigits(square(k)))
    return count
}