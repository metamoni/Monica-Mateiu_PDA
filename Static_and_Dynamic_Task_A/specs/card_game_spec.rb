require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class CardGameTest < MiniTest::Test

  def setup
    @card1 = Card.new("diamond", 3)
    @card2 = Card.new("spades", 7)
    @card3 = Card.new("diamond", 1)

    @cards = [@card1, @card2, @card3]
  end

  def test_check_for_ace__true()
    assert_equal(true, CardGame.check_for_ace(@card3))
  end

  def test_check_for_ace__false()
    assert_equal(false, CardGame.check_for_ace(@card1))
  end

  def test_highest_card()
    assert_equal(@card2, CardGame.highest_card(@card1, @card2))
  end

  def test_cards_total()
    assert_equal("You have a total of 11", CardGame.cards_total(@cards))
  end

end
