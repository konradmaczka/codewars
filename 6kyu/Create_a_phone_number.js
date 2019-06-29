const createPhoneNumber = digits => {
    let output = ""
    for (const digit of digits) {
        output += digit.toString()
    }
    return "(" + output.substring(0, 3) + ")" + " " + output.substring(3, 6) + "-" + output.substring(6)
}