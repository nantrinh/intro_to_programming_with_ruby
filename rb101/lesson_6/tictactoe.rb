# Tic Tac Toe
#
# 1. Display the initial empty 3x3 board.
# 2. Ask the user to mark a square.
# 3. Computer marks a square.
# 4. Display the updated board state.
# 5. If winner, display winner.
# 6. If board is full, display tie.
# 7. If neither winner nor board is full, go to #2
# 8. Play again?
# 9. If yes, go to #1
# 10. Good bye!
require 'pry'

INITIAL_MARKER = ' '.freeze
PLAYER_MARKER = 'X'.freeze
COMPUTER_MARKER = 'O'.freeze
WINNING_COMBOS = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                  [1, 4, 7], [2, 5, 8], [3, 6, 9],
                  [1, 5, 9], [3, 5, 7]].freeze

def prompt(message)
  puts "=> #{message}"
end

# rubocop:disable Metrics/MethodLength
# rubocop:disable Metrics/AbcSize
def display_board(board)
  system('clear') || system('cls')
  puts "You are a #{PLAYER_MARKER}. " \
       "Computer is #{COMPUTER_MARKER}"
  puts ''
  puts '     |     |'
  puts "  #{board[1]}  |  #{board[2]}  |  #{board[3]}"
  puts '     |     |'
  puts '-----+-----+-----'
  puts '     |     |'
  puts "  #{board[4]}  |  #{board[5]}  |  #{board[6]}"
  puts '     |     |'
  puts '-----+-----+-----'
  puts '     |     |'
  puts "  #{board[7]}  |  #{board[8]}  |  #{board[9]}"
  puts '     |     |'
  puts ''
end
# rubocop:enable Metrics/MethodLength
# rubocop:enable Metrics/AbcSize

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(board)
  board.keys.select { |x| board[x] == INITIAL_MARKER }
end

def player_places_piece!(board)
  square = ''
  loop do
    prompt "Choose a square (#{empty_squares(board).join(', ')}):"
    square = gets.chomp.to_i
    break if empty_squares(board).include?(square)
    prompt 'That is not a valid choice.'
  end
  board[square] = PLAYER_MARKER
end

def computer_places_piece!(board)
  square = empty_squares(board).sample
  board[square] = COMPUTER_MARKER
end

def board_full?(board)
  empty_squares(board).empty?
end

def someone_won?(board)
  true if detect_winner(board)
end

def detect_winner(board)
  WINNING_COMBOS.each do |combo|
    values = board.values_at(*combo)
    return 'Player' if values.all? { |x| x == PLAYER_MARKER }
    return 'Computer' if values.all? { |x| x == COMPUTER_MARKER }
  end
  nil
end

def joinor(arr, sep = ', ', word = 'or')
  if arr.size == 2
    puts "#{arr[0]} #{word} #{arr[1]}"
  else
    puts arr[0...-1].map(&:to_s).join(sep) \
                    .concat("#{sep}#{word} #{arr[-1]}")
  end
end

loop do
  board = initialize_board
  loop do
    display_board(board)

    player_places_piece!(board)
    break if someone_won?(board) || board_full?(board)

    computer_places_piece!(board)
    break if someone_won?(board) || board_full?(board)
  end

  display_board(board)

  if someone_won?(board)
    prompt "#{detect_winner(board)} won!"
  else
    prompt "It's a tie!"
  end

  prompt 'Play again? (y/n)'
  answer = ''
  loop do
    answer = gets.chomp.downcase
    break if %w[y n].include?(answer)
    prompt 'Please enter y or n.'
  end
  break if answer == 'n'
end

prompt 'Thanks for playing!'
