// Not passing some tests yet

const secDegSolver = (a, b, c) => {
    if (a === 0 && b === 0 && c === 0) return "The equation is indeterminate"
    if (a === 0 && b === 0) return "Impossible situation. Wrong entries"
    if (a === 0) return `It is a first degree equation. Solution: ${(- c / b).toString().length > 10 ? (-c / b).toFixed(10) : (-c / b)}`
    const delta = b ** 2 - 4 * a * c
    if (delta > 0) {
        let solutions = [
            ((-b - Math.sqrt(delta)) / (2 * a)).toString().split(".")[1].length > 10 ? ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(10) : ((-b - Math.sqrt(delta)) / (2 * a)),
            ((-b + Math.sqrt(delta)) / (2 * a)).toString().split(".")[1].length > 10 ? ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(10) : ((-b + Math.sqrt(delta)) / (2 * a))
        ].sort()
        return `Two solutions: ${solutions[0]}, ${solutions[1]}`
    } else if (delta === 0) {
        return `It has one double solution: ${-b/2*a}`
    } else {
        return "There are no real solutions"
    }
}