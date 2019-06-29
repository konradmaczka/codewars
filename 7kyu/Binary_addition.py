def add_binary(a, b):
    decimal = a + b
    tmp = decimal
    str_bin = ""
    bin = []
    while tmp >= 1:
        if tmp % 2 == 0:
            bin.append("0")
        else:
            bin.append("1")
        tmp = tmp // 2
    bin.reverse()
    str_bin = "".join(bin)
    return str_bin