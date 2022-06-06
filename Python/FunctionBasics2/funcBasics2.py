
def countdown(n):
    y = []
    for x in range(n, 0, -1):
        y.append(x)
    print(y)
    return(y)

countdown(7)

def print_return(list):
    print(list[0])
    return list[1]

print_return([5, 7])

def first_length(list):
    return list[0] + len(list)

print(first_length([3, 3, 5, 7]))