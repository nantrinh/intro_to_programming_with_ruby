# take a single string argument
# return a new string that contains the orig value of the argument with the first character of every word capitalized and all other letters lowercase
#
# call capitalize on every word

def word_cap(str)
  str.split.map(&:capitalize).join(' ')
end

puts word_cap('four score and seven')    # == 'Four Score And Seven'
puts word_cap('the javaScript language') # == 'The Javascript Language'
puts word_cap('this is a "quoted" word') # == 'This Is A "quoted" Word'
