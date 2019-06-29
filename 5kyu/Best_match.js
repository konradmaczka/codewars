const bestMatch = (ALAHLYGoals, zamalekGoals) => {
    let best = {
      index : 0, 
      lowestdiff : ALAHLYGoals[0] - zamalekGoals[0]
    }
    for (let i in ALAHLYGoals)  {
      let diff = ALAHLYGoals[i] - zamalekGoals[i]
      if (diff < best.lowestdiff)  {
        best.lowestdiff = diff
        best.index = i
      } else  {
        if (diff == best.lowestdiff && zamalekGoals[i] >  zamalekGoals[best.index])  {
        best.index = i
        }
      }
    }
    return parseInt(best.index)
  }