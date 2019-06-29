const songDecoder = song=> {
    let output = ""
    song = song.split("WUB")
    for (const word of song) {
      word && (output += word + " ")
    }
    return output.trim()
  }