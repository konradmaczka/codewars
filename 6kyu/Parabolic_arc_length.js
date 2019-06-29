const f = x => x * x

const lenCurve = (n) => {
  const h = 1/n
  let result = 0
  for (let i = 0; i < 1; i += h) {
    result += Math.sqrt((h)**2 + (f(i) - f(i + h))**2)
    n--
    if (n === 0) break
  }
  return parseFloat(result.toFixed(9))
}