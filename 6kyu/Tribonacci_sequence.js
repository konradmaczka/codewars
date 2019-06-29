const tribonacci = (signature, n) => {
    const result = signature.slice(0, n);
    while (result.length < n) {
        result[result.length] = result.slice(-3).reduce((a, b) => a + b, 0);
    }
    return result;
}