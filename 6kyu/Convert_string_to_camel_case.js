const toCamelCase = input => {
    let output = ""
    input = input.split("_").join(" ").split("-").join(" ").split(" ")
    for (let word of input) {
        output += word.substring(0, 1).toUpperCase() + word.substring(1)
    }
    input = input.join("")
    if (input.substring(0, 1) !== output.substring(0, 1).toUpperCase()) output = output.substring(0, 1).toLowerCase() + output.substring(1)
    return output
}