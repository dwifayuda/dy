abc = {"a":1,"b":2,"c":3}
print(abc["a"])

high_score = ("Nimish", 120)
nama = high_score[0]
print(nama)
print(high_score)

class GameObject:

  def __init__(self, name, x_pos, y_pos):
      self.name = name
      self.x_pos = x_pos
      self.y_pos = y_pos

  # implement a move function
  def move(self, by_x_amount, by_y_amount):
      self.x_pos += by_x_amount
      self.y_pos += by_y_amount

game_object = GameObject("Enemy", 1, 2)
print(game_object.name)
game_object.name = "Enemy 1"
print(game_object.name)

# accessing more properties of the game object
print(game_object.x_pos)
print(game_object.y_pos)

# use the new move function to change x and y positions of the game object
game_object.move(5, 10)

# check the new position
print(game_object.x_pos)
print(game_object.y_pos)

# create a different game object with the same class
other_game_object = GameObject("Player", 2, 0)

# access the properties of the new game object
print(game_object.name)
print(other_game_object.name)
print(other_game_object.x_pos)
print(other_game_object.y_pos)

# example of value types
one_int = 5
another_int = one_int # value is copied
print(one_int)
print(another_int)

another_int = 10 # only this value is changed
print(one_int)
print(another_int)

# example of reference types with objects
other_game_object = game_object # a reference to the original game object
print(other_game_object.name)

other_game_object.name = "new name" # properties in both objects are changed 
print(other_game_object.name)
print(game_object.name)