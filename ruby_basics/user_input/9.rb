input = nil
loop do
  puts '>> How many output lines do you want? Enter a number >= 3: '\
       '(Q to quit)'
  input = gets.chomp
  break if ['Q','q'].include?(input)
  if input.to_i < 3
    puts ">> That's not enough lines."
    next
  else
    input.to_i.times { puts "Launch School is the best!" } 
  end
end
