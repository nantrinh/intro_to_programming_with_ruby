# 1. Initialize deck
# 2. Deal cards to player and dealer
# 3. Player turn: hit or stay
#   - repeat until bust or "stay"
# 4. If player bust, dealer wins.
# 5. Dealer turn: hit or stay
#   - repeat until total >= 17
# 6. If dealer bust, player wins.
# 7. Compare cards and declare winner.
require "pry"

CARD_VALUES = (2..10).to_a.concat(['Jack', 'Queen', 'King', 'Ace']).freeze

def prompt(message)
  puts "=> #{message}"
end

def display_welcome_prompt
  prompt 'Welcome to Twenty One.'
  prompt 'Press Enter to continue. Press CTRL+C to quit.'
  gets
end

def initialize_deck
  CARD_VALUES * 4
end

def deal_cards!(deck, hands)
  hands.each{|k,v| 2.times{ v << deck.delete_at(rand(deck.length)) } }
end

def joinand(arr, sep = ', ', word = 'and')
  case arr.size
  when 1
    (arr[0]).to_s
  when 2
    "#{arr[0]} #{word} #{arr[1]}"
  else
    arr[0...-1].map(&:to_s).join(sep) \
               .concat("#{sep}#{word} #{arr[-1]}")
  end
end

def value(hand)
  'TODO'
end

def display_hand(hand, owner)
  case owner 
  when 'player'
    prompt "You have: #{joinand(hand)}. Value: #{value(hand)}"
  when 'dealer'
    prompt "Dealer has: #{hand[0]} and unknown card"
  end
end

def player_turn!(deck, player_hand)
  prompt "Choose one: hit (h) or stay (s)?"
  choice = ''
  loop do
    loop do
      choice = gets.chomp 
      break if %[h s].include?(choice)
      prompt "Please choose either hit (h) or stay (s)."
    end
    break if choice == 's'
    hit!(deck, player_hand)
    display_hand(player_hand, 'player')
  end
end

def dealer_turn!(deck, dealer_hand)
  loop do
    break if value(dealer_hand) >= 17
    hit!(deck, dealer_hand)
    prompt "Dealer hits."
  end
  prompt "Dealer stays."
end

def hit!(deck, hand)
  hand << deck.delete_at(rand(deck.length))
end

def turn!(deck, hands, current_player)
  case current_player
  when 'player'
    player_turn!(deck, hands[:player])
  when 'dealer'
    dealer_turn!(deck, hands[:dealer])
  end
end

system('clear') || system('cls')
display_welcome_prompt
hands = {player: [], dealer: []}
current_player = 'player'

loop do
  deck = initialize_deck
  deal_cards!(deck, hands)
  display_hand(hands[:player], 'player')
  display_hand(hands[:dealer], 'dealer')
  # turn!(deck, hands, current_player)
  binding.pry
  # current_player = alternate_player(current_player)
  # break if someone_won?(hands) # TODO or you run out of cards?
end
