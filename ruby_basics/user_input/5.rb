loop do
  puts ">> How many output lines do you want? Enter a number >= 3:"
  number = gets.to_i
  if number < 3
    puts "That's not enough lines."
  else
    number.times { puts "Launch School is the best!" }
    break
  end
end
