require 'pry'
class Card
  include Comparable
  attr_reader :rank, :suit

  ORDER = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def <=>(other)
    ORDER.index(rank) <=> ORDER.index(other.rank)
  end

  def to_s
    "#{rank} of #{suit}"
  end
end

class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze

  attr_accessor :deck

  def initialize
    reset
  end

  def reset 
    @deck = []
    RANKS.each do |r|
      SUITS.each do |s|
        @deck << Card.new(r, s)  
      end
    end
  end

  def draw
    initialize if deck.empty?
    idx = [*1..deck.size].sample - 1
    deck.delete_at(idx)
  end
end

deck = Deck.new
drawn = []
52.times { drawn << deck.draw }
puts drawn.count { |card| card.rank == 5 } == 4
puts drawn.count { |card| card.suit == 'Hearts' } == 13

drawn2 = []
52.times { drawn2 << deck.draw }
puts drawn != drawn2 # Almost always.
