const points = (games) => {
    let result = 0
    for (const game of games) {
      if (game[0] > game[2]) result += 3
      if (game[0] === game[2]) result += 1  
    }
    return result
  }