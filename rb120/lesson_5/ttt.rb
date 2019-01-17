class Board
  attr_reader :board

  def initialize
    # we need some way to model the 3x3 grid. Maybe "squares"?
    # what data structure should we use?
    # - array/hash of Square objects?
    # - array/hash of strings or integers?
    @board = [0] * 9 
  end

  def [](idx)
    @board[idx - 1]
  end
end

class Square
  def initialize
    # maybe a "status" to keep track of this square's mark?
  end
end

class Player
  def initialize
    # maybe a "marker" to keep track of this player's symbol (ie, 'X' or 'O')
  end

  def mark

  end

  def play

  end
end


class TTTGame
  PLAYER_MARKER = 'X'.freeze
  COMPUTER_MARKER = 'O'.freeze
  attr_reader :board, :round, :player_score, :computer_score

  def initialize
    @board = Board.new
    @round = 0
    @player_score = 0
    @computer_score = 0
  end

  def display_welcome_message
    puts "Welcome to Tic Tac Toe!\n"
  end

  def display_goodbye_message
    puts "Thanks for playing Tic Tac Toe. Goodbye!"
  end

  def display_board
    system('clear') || system('cls')
    puts "Round #{@round}"
    puts "Player: #{@player_score} Computer: #{@computer_score}"
    puts "You are a #{PLAYER_MARKER}. " \
         "Computer is #{COMPUTER_MARKER}"
    puts ''
    puts 'BOARD MAPPING'
    puts ' 7 | 8 | 9 '
    puts '---+---+---'
    puts ' 4 | 5 | 6 '
    puts '---+---+---'
    puts ' 1 | 2 | 3 '
    puts ''
    puts 'GAME BOARD'
    puts '     |     |'
    puts "  #{@board[7]}  |  #{@board[8]}  |  #{@board[9]}"
    puts '     |     |'
    puts '-----+-----+-----'
    puts '     |     |'
    puts "  #{@board[4]}  |  #{@board[5]}  |  #{@board[6]}"
    puts '     |     |'
    puts '-----+-----+-----'
    puts '     |     |'
    puts "  #{@board[1]}  |  #{@board[2]}  |  #{@board[3]}"
    puts '     |     |'
    puts ''
  end

  def play
    display_welcome_message
    loop do
      display_board
      first_player_moves
      break if someone_won? || board_full?

      second_player_moves
      break if someone_won? || board_full?
    end
    display_result
    display_goodbye_message
  end
end

# we'll kick off the game like this
game = TTTGame.new
game.play
