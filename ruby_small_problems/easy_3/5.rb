def multiply(first, second)
  first * second
end

def square(num)
  multiply(num, num)
end

def power(num, n)
  result = 1 
  n.times { result = multiply(result, num) }
  result
end

puts power(2, 4)
puts power(4, 4)
