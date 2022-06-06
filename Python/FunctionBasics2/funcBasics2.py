# Countdown

def countdown(n):
    y = []
    for x in range(n, 0, -1):
        y.append(x)
    print(y)
    return(y)

countdown(7)

# Print and Return
def print_return(list):
    print(list[0])
    return list[1]

print_return([5, 7])

# First Plus Length
def first_length(list):
    return list[0] + len(list)

print(first_length([3, 3, 5, 7]))

# Values Greater than Second
def greater(list):
    y = []
    if len(list) <= 2:
            print("False")
            return
    for x in range(0, len(list) + 1):
        if x > list[1]: 
            y.append(x)
    print(len(y))
    return y

print(greater([1, 2, 3, 4, 5]))

# This Length, That Value
def length_value(size, value):
    y = [None] * size
    for x in range(0, len(y)):
        y[x] = value
    print(y)

length_value(6, 4)