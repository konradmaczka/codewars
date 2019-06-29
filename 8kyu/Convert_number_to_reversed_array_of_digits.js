const digitize = n => {
    const nums = n.toString().split('')
    let output = []
    for (let i = nums.length - 1; i >= 0; i--) output.push(parseInt(nums[i]))
    return output
  }