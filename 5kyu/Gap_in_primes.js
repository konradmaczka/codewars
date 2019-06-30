const _ = require("lodash")

const gap = (g, m, n) => {
    let start, end = 0
    for (let i of _.range(m, n + 1)) {
        if (isPrime(i)) {
            start === 0 ? start = i : end === 0 ? end = i : (start = end, end = i)
            if (Math.abs(start - end) === g) return [start, end]
        }
    }
    return null
}

const isPrime = n => {
    if (n <= 1) {
        return false
    }
    let i = 2
    while (i <= n ** 0.5) {
        if (n % i === 0) return false
        i++
    }
    return true
}