const findOutlier = integers => {
    let comp = [0, 0]
    for (const integer of integers) {
        integer % 2 === 0 ? comp[0]++ : comp[1]++
    }
    if (comp[0] > comp[1]) {
        for (const integer of integers) {
            if (integer % 2 !== 0) return integer
        }
    } else {
        for (const integer of integers) {
            if (integer % 2 === 0) return integer
        }
    }
}