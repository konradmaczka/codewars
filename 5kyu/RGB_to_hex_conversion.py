def rgb(r, g, b):
    if r < 0:
        r = 0
    elif r > 255:
        r = 255
    if g < 0:
        g = 0
    elif g > 255:
        g = 255
    if b < 0:
        b = 0
    elif b > 255:
        b = 255
        
    hex_r = hex(r)
    hex_g = hex(g)
    hex_b = hex(b)
    if hex_r.__len__() == 3:
        hex_r = "0" + hex_r[2:]
    else:
        hex_r = hex_r[2:]
    if hex_g.__len__() == 3:
        hex_g = "0" + hex_g[2:]
    else:
        hex_g = hex_g[2:]
    if hex_b.__len__() == 3:
        hex_b = "0" + hex_b[2:]
    else:
        hex_b = hex_b[2:]

    output = hex_r + hex_g + hex_b
    return output.upper()