def what_range(number)
  if number < 0
    return "#{number} is less than 0"
  elsif number <= 50
    return "#{number} is between 0 and 50 inclusive"
  elsif number <= 100
    return "#{number} is between 51 and 100 inclusive"
  else
    return "#{number} is greater than 100"
  end
end

puts what_range(-1)
puts what_range(10)
puts what_range(51)
puts what_range(200)


