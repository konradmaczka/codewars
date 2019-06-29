const pigIt = str => {
    const marks = [",", ".", "!", "?", ":", ";"]
    let w = []
    str = str.split(" ")
    for (let word of str) {
        if (!marks.includes(word)) {
            word = word.substring(1) + word.substring(0, 1) + "ay"
            w.push(word)
        } else {
            w.push(word)
        }
    }
    return w.join(" ")
}