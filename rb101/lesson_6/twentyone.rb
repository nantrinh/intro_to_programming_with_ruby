KQJ = %w[King Queen Jack].freeze
KQJ_VALUE = 10
CARD_VALUES = (2..10).to_a.concat(KQJ).append('Ace').freeze
GOAL_VALUE = 21
DEALER_MAX = 17
ACE_LARGE_VALUE = 11
ACE_SMALL_VALUE = 1

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
  hands.each { |_k, v| 2.times { v << deck.delete_at(rand(deck.length)) } }
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

def score_of_hand_with_aces(hand)
  sum_without_aces = hand.select { |x| x != 'Ace' }.sum
  count_aces = hand.count('Ace')
  sum = 1
  (0..count_aces).reverse_each do |x|
    sum = sum_without_aces + \
          (ACE_LARGE_VALUE * x) + \
          (ACE_SMALL_VALUE * (count_aces - x))
    return sum if sum <= GOAL_VALUE
  end
  sum
end

def score(hand)
  if hand.all? { |x| x.is_a? Numeric }
    hand.sum
  else
    hand2 = hand.map { |x| KQJ.include?(x) ? KQJ_VALUE : x }
    hand2.include?('Ace') ? score_of_hand_with_aces(hand2) : hand2.sum
  end
end

def display_hand(hand, owner)
  case owner
  when 'player'
    prompt "You have: #{joinand(hand)}. (Score: #{score(hand)})"
  when 'dealer'
    prompt "Dealer has: #{hand[0]} and unknown card."
  end
end

def display_final_score(hands)
  player_score = score(hands[:player])
  dealer_score = score(hands[:dealer])
  prompt '===== Final Score ======'
  prompt "You: #{player_score} Dealer: #{dealer_score}"
  if player_score > dealer_score
    prompt 'Congratulations! You won!'
  elsif player_score < dealer_score
    prompt 'You lost.'
  else
    prompt 'You tied.'
  end
  prompt '========================'
end

def player_turn!(deck, player_hand)
  choice = ''
  loop do
    prompt 'Choose one: hit (h) or stay (s)?'
    loop do
      choice = gets.chomp
      break if %(h s).include?(choice)
      prompt 'Please choose either hit (h) or stay (s).'
    end
    break if choice == 's' || score(player_hand) >= GOAL_VALUE
    hit!(deck, player_hand)
    display_hand(player_hand, 'player')
  end
end

def dealer_turn!(deck, dealer_hand)
  loop do
    break if score(dealer_hand) >= DEALER_MAX
    hit!(deck, dealer_hand)
    prompt "Dealer hits. (Score: #{score(dealer_hand)})"
  end
  prompt 'Dealer stays.' if score(dealer_hand) <= GOAL_VALUE
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

def bust?(hands, current_player)
  if current_player == 'player'
    score(hands[:player]) > GOAL_VALUE
  else
    score(hands[:dealer]) > GOAL_VALUE
  end
end

def play_again?
  prompt 'Play again? (y/n)'
  answer = ''
  loop do
    answer = gets.chomp.downcase
    break if %w[y n].include?(answer)
    prompt 'Please enter y or n.'
  end
  answer == 'y'
end

def clear_screen
  system('clear') || system('cls')
end

def initialize_hands
  { player: [], dealer: [] }
end

clear_screen
display_welcome_prompt

loop do
  clear_screen
  loop do
    hands = initialize_hands
    deck = initialize_deck
    deal_cards!(deck, hands)
    display_hand(hands[:player], 'player')
    display_hand(hands[:dealer], 'dealer')
    turn!(deck, hands, 'player')
    if bust?(hands, 'player')
      prompt 'You went bust!'
      break
    end
    turn!(deck, hands, 'dealer')
    if bust?(hands, 'dealer')
      prompt 'Dealer went bust!'
      break
    end
    display_final_score(hands)
    break
  end
  break unless play_again?
end

prompt 'Thank you for playing!'
