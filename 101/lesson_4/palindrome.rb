
def change_me(string)
  words = string.split
  words.map{ |x| is_palindrome?(x.downcase) ? x.upcase : x }.join(' ')
end

def is_palindrome?(word)
  word.reverse == word
end

puts change_me('We will meet at noon')
puts change_me('No palindromes here')
puts change_me('')
puts change_me('I LOVE my mom and dad equally')
