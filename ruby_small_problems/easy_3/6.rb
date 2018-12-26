def xor?(first, second)
  first != second
end

puts xor?(true, true) == false
puts xor?(false, false) == false
puts xor?(true, false) == true
puts xor?(false, true) == true
puts xor?(5.even?, 4.even?) == true
puts xor?(5.odd?, 4.odd?) == true
puts xor?(5.odd?, 4.even?) == false
puts xor?(5.even?, 4.odd?) == false
