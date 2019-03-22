class GuessingGame
  attr_accessor :num_guesses, :num, :range, :won
  attr_reader :magic_number

  def reset 
    @num_guesses = 7
    @num = 0
    @won = false
    @range = (1..100)
    @magic_number = @range.to_a.sample
  end

  def play
    reset
    loop do
      display_guesses_remaining
      solicit_input
      check_number
      decrement_guesses
      break if won || num_guesses == 0
    end
    puts (won ? "You won!" : "You have no more guesses. You lost!")
  end

  def display_guesses_remaining
    puts "You have #{num_guesses} guesses remaining."
  end

  def solicit_input
    print "Enter a number between 1 and 100: "
    self.num = gets.chomp.to_i
    loop do
      break if range.include?(num)
      print "Invalid guess. Enter a number between 1 and 100: "
      self.num = gets.chomp.to_i
    end
  end

  def check_number 
    case
    when num == magic_number
      @won = true
      puts "That's the number!"
    when num < magic_number
      puts "Your guess is too low."
    when num > magic_number
      puts "Your guess is too high."
    end
    puts ""
  end

  def decrement_guesses
    self.num_guesses -= 1
  end
end

game = GuessingGame.new
game.play
