# Countdown
def countdown(num):
    final_list = []
    for x in range(num, -1, -1):
        final_list.append(x)
    return final_list

print(countdown(5))

# Print and Return
def print_and_return(list):
    print(list[0])
    return(list[1])

print(print_and_return([5, 7]))

# First Plus Length
def first_plus_length(list):
    return(list[0] + len(list))

print(first_plus_length([1, 2, 3, 4, 5]))

# Values Greater than Second
def values_greater_than_second(list):
    new_list = []
    for x in list:
        if x > list[1]:
            new_list.append(x)
    print(len(new_list))
    return new_list

print(values_greater_than_second([5, 2, 3, 2, 1, 4]))

# This Length, That Value
def this_length_that_value(size, value):
    new_list = []
    for x in range(0, size):
        new_list.append(value)
    return new_list

print(this_length_that_value(6, 2))