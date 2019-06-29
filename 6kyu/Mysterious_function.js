const getNum = n => {
    let sum = 0;
    const num = ("" + n).split("");

    for (let i = 0; i < num.length; i++) {
        if (num[i] == 8) {
            sum += 2;
        } else if (num[i] == 0 || num[i] == 6 || num[i] == 9) {
            sum += 1;
        }
    }
    return sum;
}