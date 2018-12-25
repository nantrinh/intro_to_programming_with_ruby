# takes one argument, a string containing one or more words
# returns the given string with all five or more letter words reversed
# each string consists of only letters and spaces
# spaces should be included only when more than one word is present
#
# invalid input? do not worry
# empty string? ''
# 
# approach
# split string into array of words
#
# use #map: iterate through each word. 
# if the word has five or more letters, reverse the word
# else do nothing
#
# reverse method
# takes a string as input
# splits the word into an array of characters
# reverses the array
# joins the characters together again and returns the new string

def reverse_words(string)
  string.split.map{ |x| x.size >= 5 ? reverse(x) : x }.join(' ')
end

def reverse(string)
  string.chars.reverse.join
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS
puts reverse_words('')
