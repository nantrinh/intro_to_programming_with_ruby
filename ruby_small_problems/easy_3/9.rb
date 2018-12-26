# takes string argument
# returns true if string is palindrome, false otherwise
# case insensitive
# ignore non-alphanumeric characters

def real_palindrome?(str)
  str = str.downcase.delete('^a-z0-9')
  str == str.reverse
end

puts real_palindrome?('madam') == true
puts real_palindrome?('Madam') == true           # (case does not matter)
puts real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
puts real_palindrome?('356653') == true
puts real_palindrome?('356a653') == true
puts real_palindrome?('123ab321') == false
