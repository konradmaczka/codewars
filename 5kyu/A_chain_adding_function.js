const add = n => {
    const f = x => add (n + x)
    f.toString = x => n
    return f
  }