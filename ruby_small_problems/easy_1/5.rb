# takes in a string
# returns new string with words in reverse order
#
# approach
# split the string into array of words
# reverse the array
# join the reversed array with a space
# return the reversed array

def reverse_sentence(string)
  string.split.reverse.join(' ')
end

puts reverse_sentence('') == ''
puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
