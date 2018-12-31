### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) # not an error, but should stick to naming conventions: self.check_for_ace
    if card.value = 1 # == 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # def self.highest_card(card1, card2)
  if card1.value > card2.value
    return card.name # the Card class doesn't have a name attribute, so return card1
  else
    card2 #return card2, for consistency
  end
end
end # delete

def self.cards_total(cards)
  total # total needs to be set to 0 -- total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total # this line of code needs to be outside the for loop
    # can't concatenate string and integer; total needs to be interpolated with #{total}
  end
end
# missing end from class CardGame
```
