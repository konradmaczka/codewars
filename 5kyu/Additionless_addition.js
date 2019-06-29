const add = (x, y) => {
	while (y != 0) {
    let z = x & y
    x ^= y
    y = z << 1
  }
  return x
}