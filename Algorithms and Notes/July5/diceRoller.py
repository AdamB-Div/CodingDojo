from random import randint

def roll_dice(number = 1, sides = 20):
    # Default parameters are put in just in case you dont want to put any arguments in at the bottom
    # returns a whole number(int) between 1 and 20
    sum_of_rolls = 0

    for i in range(0, number):
        sum_of_rolls += randint(1, sides)

    return sum_of_rolls

print(roll_dice(2, 6))

def roll_character(character_name):

    new_character = {"name": character_name}

    new_character["STR"] = roll_dice(3, 6)
    new_character["CON"] = roll_dice(3, 6)
    new_character["DEX"] = roll_dice(3, 6)
    new_character["INT"] = roll_dice(3, 6)
    new_character["WIS"] = roll_dice(3, 6)
    new_character["CHA"] = roll_dice(3, 6)

    return new_character

print(roll_character("Divenation"))