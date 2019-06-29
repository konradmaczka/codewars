const number = busStops => {
    let current = 0
    for (let stop of busStops) {
        current += stop[0]
        current -= stop[1]
    }
    return current
}