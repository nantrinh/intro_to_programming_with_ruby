# argument: string of words separated by spaces
# returns a new string in which the first and last letters of every
# word are swapped
#
# assume each word contains at least one letter
# the string contains at least one word
# string contains nothing but words and spaces
# 
# approach
# split the string by spaces => array of words
# iterate through each word. for each word, swap first and last letter
# return new string

def swap(str)
  words = str.split(' ')
  words.each do |w|
    first = w[0]
    last = w[-1]
    w[0] = last
    w[-1] = first
  end
  words.join(' ')
end

puts swap('Oh what a wonderful day it is') #== 'hO thaw a londerfuw yad ti si'
puts swap('Abcde') #== 'ebcdA'
puts swap('a') #== 'a'
