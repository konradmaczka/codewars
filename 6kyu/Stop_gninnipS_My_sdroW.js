const spinWords = input => {
    const arr = input.split(" ")
    let output = ""
    for (let word of arr) {
        word.length >= 5 && (word = word.split('').reverse().join(''))
        output += word + " "
    }
    return output.trim()
}