def filter_list(l):
    int_list = []
    for item in l:
        if isinstance(item, int):
            int_list.append(item)
    return int_list