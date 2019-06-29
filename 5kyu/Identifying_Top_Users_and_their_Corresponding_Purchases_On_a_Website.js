const _ = require("lodash")

const idBestUsers = (...args) => {
    let result = []
    const users = [...new Set(_.flatMap(args))]
    let activeUsers = users
    let count = _.fill(new Array(10000000), 0)
    for (const month of args) {
        for (const user of users) {
            activeUsers = activeUsers.filter(user => month.includes(user)).sort()
        }
    }
    for (const user of _.flatMap(args)) {
        for (const index in activeUsers) {
            user === activeUsers[index] && count[index]++
        }
    }
    count = count.filter(number => number !== 0)

    for (const number in count) {
        result.push([count[number], activeUsers[number]])
    }
    result = _.orderBy(result, ["count"])

    console.log(result)

    //     return [[]];
}

var a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
var a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
var a3 = ['A042', 'A025', 'B004'];

idBestUsers(a1, a2, a3)