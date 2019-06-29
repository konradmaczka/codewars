const validParentheses = parents => {
    const result = [];
    for (const i in parents) {
        if (parents[i] === '(') result.push('(')
        else if (result.pop() !== '(') return false
    }
    return result.length === 0 ? true : false;
}