# takes a string of numeric chars including an optional plus or minus sign
# returns an integer
STRINGS = {
  0 => '0', 
  1 => '1', 
  2 => '2', 
  3 => '3', 
  4 => '4',
  5 => '5', 
  6 => '6', 
  7 => '7', 
  8 => '8', 
  9 => '9'
}

def integer_to_string(num)
  result = ''
  return '0' if num == 0
  while num > 0
    num, remainder = num.divmod(10)
    result.prepend(STRINGS[remainder])
  end
  result
end

puts integer_to_string(4321) == '4321'
puts integer_to_string(0) == '0'
puts integer_to_string(5000) == '5000'
