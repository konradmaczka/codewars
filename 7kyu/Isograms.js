const isIsogram = (input) => {
    input = input.toLowerCase().split("").sort()
    for (let letter = 0; letter < input.length - 1; letter++) {
        if (input[letter + 1] === input[letter]) return false
    }
    return true
}