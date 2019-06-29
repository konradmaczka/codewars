String.prototype.camelCase = () => {
    let words = this.split(" ")
    let output = ""
    for (let word of words) {
      output += word.substring(0, 1).toUpperCase() + word.substring(1)
    }
    return output
  }