def fibonacci(n)
  return 1 if n <= 2
  queue = [0, 1, 1]
  (3..n).each do |x|
    queue.shift
    queue << queue.sum
  end
  queue[-1]
end

puts fibonacci(1) #  == 1
puts fibonacci(2) #  == 1
puts fibonacci(3) #  == 2
puts fibonacci(4) #  == 3
puts fibonacci(5) #  == 5
puts fibonacci(6) #  == 8
puts fibonacci(20) # == 6765
puts fibonacci(100) # == 354224848179261915075
#puts fibonacci(100_001) # => 4202692702.....8285979669707537501
