require "pry"

VALID_CHOICES = %w(rock paper scissors).freeze

def prompt(message)
  puts "=> #{message}"
end

def win?(first, second)
  (first == 'rock') && (second == 'scissors') ||
  (first == 'paper') && (second == 'rock') ||
  (first == 'scissors') && (second == 'paper')
end

binding.pry

def display_result(player, computer)
  if win?(player, computer)
    prompt 'You won!'
  elsif win?(computer, player)
    prompt 'Computer won!'
  else
    prompt "It's a tie!"
  end
end

choice = ''

loop do
  loop do
    prompt "Choose one: #{VALID_CHOICES.join(', ')}"
    choice = gets.chomp
    break if VALID_CHOICES.include?(choice)
    prompt 'That is not a valid choice.'
  end

  computer_choice = VALID_CHOICES.sample

  prompt "You chose #{choice}; Computer chose: #{computer_choice}"

  display_result(choice, computer_choice)
  prompt 'Do you want to play again?'
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt 'Thank you for playing. Goodbye!'
