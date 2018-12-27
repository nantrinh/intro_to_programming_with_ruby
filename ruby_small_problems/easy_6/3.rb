# calculate each next fibonacci number
# keep track of index
# when number of digits in the fibonacci number == specified length, return the index
#
# fibonacci
# prev = 1
# curr = 2
#
# new = curr + prev => 3
# start = curr => 2
# curr =  new => 3

def find_fibonacci_index_by_length(num_digits)
  prev = 1
  curr = 1
  index = 2
  return 1 if num_digits == 1
  while curr.digits.size < num_digits
    # puts "number: #{curr} size: #{curr.digits.size} num_digits: #{num_digits}"
    new = curr + prev 
    prev = curr
    curr = new
    index += 1
  end
  # puts "We reached number #{curr} with a length of #{num_digits} at index #{index}"
  index 
end

puts find_fibonacci_index_by_length(1)       # == 1
puts find_fibonacci_index_by_length(2)       # == 7          # 1 1 2 3 5 8 13
puts find_fibonacci_index_by_length(3)     # == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
puts find_fibonacci_index_by_length(10)    # == 45
puts find_fibonacci_index_by_length(100)   # == 476
puts find_fibonacci_index_by_length(1000)  # == 4782
# puts find_fibonacci_index_by_length(10000) # == 47847
