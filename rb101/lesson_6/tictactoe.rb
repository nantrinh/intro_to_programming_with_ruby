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
WINNING_SCORE = 5
CHOOSE_FIRST_MOVER = 'choose' # (player, computer, choose)

def prompt(message)
  puts "=> #{message}"
end

def display_board(board, round, player_score, computer_score)
  system('clear') || system('cls')
  puts "Round #{round}"
  puts "Player: #{player_score} Computer: #{computer_score}"
  puts "You are a #{PLAYER_MARKER}. " \
       "Computer is #{COMPUTER_MARKER}"
  puts ''
  puts "BOARD MAPPING"
  puts ' 7 | 8 | 9 '
  puts '---+---+---'
  puts ' 4 | 5 | 6 '
  puts '---+---+---'
  puts ' 1 | 2 | 3 '
  puts ''
  puts 'GAME BOARD'
  puts '     |     |'
  puts "  #{board[7]}  |  #{board[8]}  |  #{board[9]}"
  puts '     |     |'
  puts '-----+-----+-----'
  puts '     |     |'
  puts "  #{board[4]}  |  #{board[5]}  |  #{board[6]}"
  puts '     |     |'
  puts '-----+-----+-----'
  puts '     |     |'
  puts "  #{board[1]}  |  #{board[2]}  |  #{board[3]}"
  puts '     |     |'
  puts ''
end

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
    prompt "Choose a square (#{joinor(empty_squares(board))}):"
    square = gets.chomp.to_i
    break if empty_squares(board).include?(square)
    prompt 'That is not a valid choice.'
  end
  board[square] = PLAYER_MARKER
end

def computer_places_piece!(board)
  if square = one_more_move_to_win(board, 'Computer')
    puts "Imminent win detected!"
  elsif square = one_more_move_to_win(board, 'Player')
    puts "Immediate threat detected!"
  elsif empty_squares(board).include?(5)
    square = 5
  else 
    square = empty_squares(board).sample
    puts "No immediate threat"
  end
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

def someone_won_five_games?(player_score, computer_score)
  player_score == WINNING_SCORE || computer_score == WINNING_SCORE
end

def joinor(arr, sep = ', ', word = 'or')
  case arr.size 
  when 1
    "#{arr[0]}" 
  when 2
    "#{arr[0]} #{word} #{arr[1]}"
  else
    arr[0...-1].map(&:to_s).join(sep) \
               .concat("#{sep}#{word} #{arr[-1]}")
  end
end

def play_next_round?
  prompt 'Press Enter to play another round. Press CTRL+C to quit.'
  gets
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

def display_welcome_prompt
  prompt "Welcome to Tic-Tac-Toe." 
  prompt "First player to win 5 rounds wins."
  prompt "Press Enter to continue. Press CTRL+C to quit."
  gets
end

def one_more_move_to_win(board, player)
  marker = (player == 'Player')? PLAYER_MARKER : COMPUTER_MARKER
  WINNING_COMBOS.each do |combo|
    values = board.values_at(*combo)
    if (values.count { |x| x == marker } == 2) &&
       (values.count { |x| x == ' ' } == 1)
      return combo[values.index(' ')] 
    end
  end
  nil
end

def place_piece!(board, current_player)
  case current_player 
  when 'player'
    player_places_piece!(board)
  when 'computer'
    computer_places_piece!(board)
  end
end

def identify_first_player
  if CHOOSE_FIRST_MOVER == 'choose'
    prompt "Who goes first? Choose player (p) or computer (c)."
    loop do
      player_acronym = gets.chomp.downcase
      return 'player' if player_acronym == 'p'
      return 'computer' if player_acronym == 'c'
      prompt "Please choose either player (p) or computer (c) to go first."
    end
  else
    CHOOSE_FIRST_MOVER
  end
end

def alternate_player(current_player)
  (current_player == 'player')? 'computer' : 'player'
end

system('clear') || system('cls')
display_welcome_prompt
current_player = identify_first_player

loop do
  system('clear') || system('cls')
  player_score = 0
  computer_score = 0
  round = 1

  loop do
    board = initialize_board

    loop do
      display_board(board, round, player_score, computer_score)
      place_piece!(board, current_player)
      current_player = alternate_player(current_player)
      break if someone_won?(board) || board_full?(board)
    end
  
    if someone_won?(board)
      winner = detect_winner(board)
      player_score += 1 if winner == 'Player' 
      computer_score += 1 if winner == 'Computer'
      display_board(board, round, player_score, computer_score)
      prompt "#{winner} won!"
    else
      prompt "It's a tie!"
    end

    if someone_won_five_games?(player_score, computer_score)
       prompt "#{winner} won 5 games!"
       break
    end

    round += 1
    play_next_round? 
  end
  break unless play_again?
  current_player = identify_first_player
end

prompt 'Thanks for playing!'
