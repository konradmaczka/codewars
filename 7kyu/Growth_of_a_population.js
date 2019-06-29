const nbYear = (start, percent, incomers, end) => {
    let years = 0
    while (start < end) {
        start += (start * (percent / 100) + incomers)
        years++
    }
    return years
}