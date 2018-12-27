# arguments: array, search value
# returns true if search value is in the array, false otherwise
#
# approach
# count method

def include?(arr, val)
  arr.count(val) > 0
end

def include?(arr, val)
  arr.each { |x| return true if x == val }
  false
end

puts include?([1,2,3,4,5], 3) # == true
puts include?([1,2,3,4,5], 6) # == false
puts include?([], 3)          # == false
puts include?([nil], nil)     # == true
puts include?([], nil)        # == false
