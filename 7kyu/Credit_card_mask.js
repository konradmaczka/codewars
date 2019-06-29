const maskify = input => {
    if (input.length <= 4) return input
    input = input.split("")
    for (let i = 0; i < input.length - 4; i++) {
        input[i] = "#"
    }
    return input.join("")
}