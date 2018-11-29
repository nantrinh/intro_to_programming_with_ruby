number = 1234

puts "Thousands place: #{number / 1000}"
puts "Hundreds place: #{number % 1000 / 100}"
puts "Tens place: #{number % 1000 % 100 / 10}"
puts "Ones place: #{number % 1000 % 100 % 10}"
