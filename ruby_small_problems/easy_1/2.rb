# method takes one integer argument (may be positive, negative or zero)
# returns true if the number's absolute value is odd
# assume that the argument is a valid integer value
# 
# Approach
# use modulo operator, if number modulo 2 == 0 then the number is even, else it is odd

def is_odd?(number)
  number % 2 != 0
end

puts is_odd?(2)    # => false
puts is_odd?(5)    # => true
puts is_odd?(-17)  # => true
puts is_odd?(-8)   # => false
puts is_odd?(0)    # => false
puts is_odd?(7)    # => true
