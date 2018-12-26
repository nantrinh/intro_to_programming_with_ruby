desc = %w[1st 2nd 3rd 4th 5th last]
arr = []
desc.each do |x|
  puts "Enter the #{x} number:"
  arr << gets.chomp.to_i
end

num = arr.pop
if arr.include?(num)
  puts "The number #{num} appears in #{arr}."
else
  puts "The number #{num} does not appear in #{arr}."
end
