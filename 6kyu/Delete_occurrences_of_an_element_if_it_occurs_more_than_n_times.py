def delete_nth(order,max_e):
    if not order or max_e < 1:
        return []

    count = { x:0 for x in order }
    new_order = []

    for item in order:
        if count[item] < max_e:
            count[item] += 1
            new_order.append(item)

    return new_order