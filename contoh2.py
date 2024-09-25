a = 800
b = 0

while a > 0:
    a -= a*0.1
    b += 1
    print(a)
    print(b)
    if a < 1:
        break