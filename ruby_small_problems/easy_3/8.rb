# takes a string argument
# returns true if string is a palindrome
# false otherwise
#
# case, punctuation, and spaces matter
#
# approach
# string split into characters. is it the same as this array reversed?

def palindrome?(input)
  input == input.reverse
end

puts palindrome?('madam') == true
puts palindrome?('Madam') == false          # (case matters)
puts palindrome?("madam i'm adam") == false # (all characters matter)
puts palindrome?('356653') == true
puts palindrome?([1, 2, 3]) == false
puts palindrome?([1, 2, 1]) == true 


