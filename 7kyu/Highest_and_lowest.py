def high_and_low(numbers):
    num_list = numbers.split(" ")
    num_list = [int(x) for x in num_list]
    num_list.sort(reverse=True)
    num_string = str(num_list[0]) + " " + str(num_list[num_list.__len__() - 1])
    return num_string