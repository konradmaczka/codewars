def toCsvText (iterable) :
    rows = [','.join(map(str, items)) for items in iterable]
    return '\n'.join(rows)