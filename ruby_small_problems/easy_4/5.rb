# searches for all multiples of 3 or 5 that lie between 1 and some other number
# computs the sum of those multiples

def multisum(num)
  (1..num).select{ |x| (x % 3 == 0) || (x % 5 == 0) }.sum
end

puts multisum(3) == 3
puts multisum(5) == 8
puts multisum(10) == 33
puts multisum(1000) == 234168
