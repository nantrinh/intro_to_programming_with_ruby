VALID_CHOICES = { r: 'rock',
                  p: 'paper',
                  s: 'scissors',
                  l: 'lizard',
                  sp: 'spock' }.freeze

WINNING_COMBINATIONS = { rock: %w(scissors lizard),
                         paper: %w(rock spock),
                         scissors: %w(paper lizard),
                         spock: %w(scissors rock),
                         lizard: %w(paper spock) }.freeze

GAME_OVER_WINS = 5

def prompt(message)
  puts "=> #{message}"
end

def print_choices
  VALID_CHOICES.each { |k, v| puts "   #{k}: #{v}" }
end

def win?(first, second)
  result = false
  WINNING_COMBINATIONS.each_key do |k|
    WINNING_COMBINATIONS[k].each do |v|
      if (first == k.to_s) && (second == v)
        result = true
        break
      end
    end
  end
  result
end

def calculate_result(player_choice, computer_choice)
  if win?(player_choice, computer_choice)
    'player'
  elsif win?(computer_choice, player_choice)
    'computer'
  else
    'tie'
  end
end

def display_result(result)
  case result
  when 'player'
    prompt 'You won!'
  when 'computer'
    prompt 'Computer won!'
  else
    prompt "It's a tie!"
  end
end

def increment_counter(counter, result)
  case result
  when 'player'
    counter[:player] += 1
  when 'computer'
    counter[:computer] += 1
  end
end

def display_counter(counter)
  prompt "Your wins: #{counter[:player]}. Computer wins: #{counter[:computer]}."
end

def grand_winner?(counter)
  counter.key(counter.values.max).to_s if counter.values.max == GAME_OVER_WINS
end

def display_game_over(winner, counter)
  puts '============== GAME OVER ============'
  case winner
  when 'player'
    prompt 'Congratulations! You are the grand winner!'
  when 'computer'
    prompt 'The computer won. Better luck next time!'
  end
  display_counter(counter)
  puts '====================================='
end

def play_again?
  answer = ''
  loop do
    prompt 'Do you want to play again? (Y/N)'
    answer = gets.chomp.upcase
    break if %w(Y N).include?(answer)
    prompt 'Please enter Y or N.'
  end
  answer == 'Y'
end

def get_player_choice(choice)
  if VALID_CHOICES.include?(choice.to_sym)
    VALID_CHOICES[choice.to_sym]
  elsif VALID_CHOICES.values.include?(choice)
    choice
  end
end

def continue?
  prompt 'Press any key to continue. Press CTRL+C to quit.'
  gets.chomp
end

choice = ''
counter = { player: 0, computer: 0 }
winner = ''
round = 1

puts '============== ROCK PAPER SCISSORS LIZARD SPOCK ====================='
prompt 'This is a multi-round game. ' \
       "The first player to win #{GAME_OVER_WINS} rounds wins."
prompt 'Press CTRL+C at any time to quit.'
prompt 'Press any key to continue.'
gets.chomp

loop do
  puts "============== Round #{round} =============="
  loop do
    prompt 'Choose one:'
    print_choices
    puts '====================================='
    choice = gets.chomp.downcase
    break if VALID_CHOICES.include?(choice.to_sym) ||
             VALID_CHOICES.values.include?(choice)
    prompt 'That is not a valid choice.'
  end

  player_choice = get_player_choice(choice)
  computer_choice = VALID_CHOICES.values.sample

  prompt "You chose #{player_choice}; Computer chose: #{computer_choice}"

  result = calculate_result(player_choice, computer_choice)
  display_result(result)

  increment_counter(counter, result)
  display_counter(counter)
  round += 1

  winner = grand_winner?(counter)
  winner ? display_game_over(winner, counter) : continue?
  next unless winner

  break unless play_again?
  system('clear')
  round = 1
  counter = { player: 0, computer: 0 }
end

prompt 'Thank you for playing. Goodbye!'
