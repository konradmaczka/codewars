const stairsIn20 = (s) => {
    let yearlyStars = 0
    s.map(day => {
      day.map(stars => {
        yearlyStars += stars * 20
      })
    })
    return yearlyStars
  }