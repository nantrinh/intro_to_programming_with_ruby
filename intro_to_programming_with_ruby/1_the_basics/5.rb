def factorial(number)
  if number == 1
    return number
  else
    number * factorial(number - 1) 
  end
end

puts factorial(10)
