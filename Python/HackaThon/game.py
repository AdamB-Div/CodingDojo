from classes.deck import Deck

class Game:
    def __init__(self,):
        self.player1 = Player()
        self.player2 = Player()
        self.pile = []

    def run_game(self):
        while len(self.player1.deck.cards) > 0:
            self.pile_add()
            self.compare()
        if len(self.player1.hoard) > len(self.player2.hoard):
            print("YOU WIN")
        elif len(self.player1.hoard) < len(self.player2.hoard):
            print("GET REKT SCRUB")
        else:
            print("ITS A TIE")

    def pile_add(self):
        # Display Cards Against Eachother
        self.pile.append(self.player1.get_hand())
        self.pile.append(self.player2.get_hand())
    
    def compare(self):
        # Compares 2 Card Values to determine weight, rewards accordingly
        if self.pile[len(self.pile) - 2].point_val > self.pile[len(self.pile) - 1].point_val:
            for card in self.pile:
                self.player1.hoard.append(card)
            self.pile.clear()
        elif self.pile[len(self.pile) - 2].point_val < self.pile[len(self.pile) - 1].point_val:
            for card in self.pile:
                self.player2.hoard.append(card)
            self.pile.clear()
        else:
            if len(self.player1.deck.cards) >= 1:
                self.pile_add()
                self.compare()
            else:
                self.pile.clear()
        


class Player:
    def __init__(self):
        self.deck = Deck()
        self.deck.shuffle()
        self.hoard = []
    
    def get_hand(self):
        return self.deck.cards.pop(0)

run = Game()
run.run_game()

# player2 = Player()
# player2.get_hand()

# print("************ Welcome to War ***************")
# print("1) Start War")
# print("0) Exit")
# option = 1

# while option != "0":
#     something = input("")
#     if something == "1":
#         Game()
#         break
#     elif something == "0":
#         break
