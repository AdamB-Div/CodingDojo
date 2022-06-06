for x in range(0,151):
    print(x)

for i in range(5, 1001, 5):
    print(i)

for y in range(1, 101):
    if y % 10 == 0:
        print("Coding Dojo")
    elif y % 5 == 0:
        print("Coding")
    else:
        print(y)

# sum = 0
# for x in range(0, 500000):
#     sum = sum + x

# print(sum)

def sum_odd(n):
    return sum(i for i in range(1, n+1) if i % 2 == 1)

print(sum_odd(500000))

for z in range(2018, 0, -4):
    print(z)

lowNum = 2
highNum = 17
mult = 3

for t in range(lowNum, highNum + 1):
    if t % mult == 0:
        print(t)