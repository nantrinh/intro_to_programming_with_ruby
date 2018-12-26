def prompt(msg)
  puts ">> #{msg}"
end

prompt "Please enter an integer greater than 0:"
num = gets.chomp.to_i
prompt "Enter 's' to compute the sum, 'p' to compute the product."
operation = gets.chomp
if operation == 's'
  sum = [*1..num].sum
  puts "The sum of the integers between 1 and #{num} is #{sum}."
elsif operation == 'p'
  prod = [*1..num].reduce(:*)
  puts "The product of the integers between 1 and #{num} is #{prod}."
end


