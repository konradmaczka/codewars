def narcissistic(value):
    str_val = str(value)
    len_val = len(str_val)
    tab = []
    for i in str_val:
        tab.append(i)
    int_tab = [int(x) for x in tab]
    ret = 0
    for i in int_tab:
        ret += i**len_val
    if value == ret:
        return True
    return False