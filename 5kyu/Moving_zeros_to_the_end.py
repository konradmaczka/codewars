def move_zeros(array):
    char_list = []
    zeros_list = []
    for item in array:
        if item == 0 and item is not None and item is not False:
            zeros_list.append(item)
        else:
            char_list.append(item)
    output = char_list + zeros_list
    return output