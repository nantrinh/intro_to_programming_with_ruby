def fibonacci(n)
  return 1 if n <= 2
  queue = [0, 1, 1]
  (3..n).each do |x|
    queue.shift
    queue << queue.sum
  end
  queue[-1]
end

def fibonacci_last(n)
  fibonacci(n).to_s[-1].to_i
end

puts fibonacci_last(1) #  == 1
puts fibonacci_last(2) #  == 1
puts fibonacci_last(3) #  == 2
puts fibonacci_last(4) #  == 3
puts fibonacci_last(5) #  == 5
puts fibonacci_last(6) #  == 8
puts fibonacci_last(20) # == 5
puts fibonacci_last(100) # == 5
puts fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
puts fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
puts fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
# puts fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
# puts fibonacci_last(123456789) # -> 4
