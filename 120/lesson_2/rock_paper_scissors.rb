# Added keeping score

class Move
  VALID_CHOICES = { r: 'rock',
                    p: 'paper',
                    s: 'scissors' }.freeze
  def initialize(value)
    @value = value
  end

  def rock?
    @value == 'rock'
  end

  def scissors?
    @value == 'scissors'
  end

  def paper?
    @value == 'paper'
  end

  def >(other_move)
    (rock? && other_move.scissors?) ||
      (paper? && other_move.rock?) ||
      (scissors? && other_move.paper?)
  end

  def <(other_move)
    (rock? && other_move.paper?) ||
      (paper? && other_move.scissors?) ||
      (scissors? && other_move.rock?)
  end

  def to_s
    @value
  end
end

class Player
  attr_accessor :move, :name, :score

  def initialize
    set_name
    @score = 0
  end
end

class Human < Player
  def set_name
    puts "What is your name?"
    n = gets.chomp
    loop do
      break unless n.empty?
      puts "Please enter your name."
      n = gets.chomp
    end
    self.name = n.capitalize
  end

  def choose
    puts "Choose one: #{Move::VALID_CHOICES.values}"
    choice = gets.chomp.downcase
    loop do
      break if Move::VALID_CHOICES.include?(choice.to_sym) ||
               Move::VALID_CHOICES.values.include?(choice)
      puts 'That is not a valid choice.'
      choice = gets.chomp.downcase
    end
    self.move = Move.new(map_to_full_player_choice(choice))
  end

  def map_to_full_player_choice(choice)
    if Move::VALID_CHOICES.include?(choice.to_sym)
      Move::VALID_CHOICES[choice.to_sym]
    elsif Move::VALID_CHOICES.values.include?(choice)
      choice
    end
  end
end

class Computer < Player
  def set_name
    self.name = ['R2D2', 'Hal', 'Chappie', 'Sonny', 'Number 5'].sample
  end

  def choose
    self.move = Move.new(Move::VALID_CHOICES.values.sample)
  end
end

class RPSGame
  WINNING_SCORE = 3
  attr_accessor :human, :computer, :winner

  def initialize
    clear
    @computer = Computer.new
  end

  def play
    display_welcome_message
    loop do
      loop do
        display_header
        handle_moves
        handle_winner
        break if grand_winner?
        continue?
      end
      display_grand_winner
      break unless play_again?
    end
    display_goodbye_message
  end

  protected

  def handle_moves
    human.choose
    computer.choose
    display_moves
  end

  def handle_winner
    update_winner
    display_winner
    update_score
  end

  def clear
    system('clear') || system('cls')
  end

  def display_header
    clear
    puts "First player to win #{WINNING_SCORE} rounds wins."
    puts scoreboard
  end

  def display_welcome_message
    puts "Welcome to Rock, Paper, Scissors!"
    puts "The game ends when one player reaches #{WINNING_SCORE} points."
    continue?
    @human = Human.new
  end

  def display_goodbye_message
    puts "Thanks for playing! Goodbye."
  end

  def display_moves
    puts "#{human.name} chose #{human.move}."
    puts "#{computer.name} chose #{computer.move}."
  end

  def update_winner
    self.winner = if human.move > computer.move
                    human.name
                  elsif computer.move > human.move
                    computer.name
                  end
  end

  def display_winner
    case winner
    when human.name
      puts "#{human.name} won!"
    when computer.name
      puts "#{computer.name} won!"
    else
      puts "It's a tie!"
    end
  end

  def update_score
    case winner
    when human.name
      human.score += 1
    when computer.name
      computer.score += 1
    end
  end

  def continue?
    puts 'Press ENTER to continue. Press CTRL+C to quit.'
    gets.chomp
  end

  def grand_winner?
    human.score == WINNING_SCORE || computer.score == WINNING_SCORE
  end

  def display_grand_winner
    puts "=================================="
    if human.score == WINNING_SCORE
      puts "#{human.name} is the grand winner!"
    else
      puts "#{computer.name} is the grand winner!"
    end
    puts "FINAL SCORE: #{scoreboard}"\
  end

  def scoreboard
    "#{human.name}: #{human.score} | #{computer.name}: #{computer.score}"
  end

  def play_again?
    puts "Do you want to play again? (y/n)"
    answer = gets.chomp
    until ['y', 'n'].include?(answer.downcase)
      puts "Please choose either y or n."
      answer = gets.chomp
    end
    answer == 'y'
  end
end

RPSGame.new.play
