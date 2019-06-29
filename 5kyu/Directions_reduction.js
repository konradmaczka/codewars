const dirReduc = arr => {
    const dirs = {"NORTH": "SOUTH", "WEST": "EAST", "SOUTH": "NORTH", "EAST": "WEST"}
    const stack = []
    for (let el of arr)
    {
      if (dirs[el] === stack[stack.length - 1])
        stack.pop()
      else
        stack.push(el)
    }
    return stack
  }