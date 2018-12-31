# takes a sentence string as input
# returns the same string with any sequence of the words corresponding to
# 0..9 converted to a string of digits

WORDS = %w[zero one two three four five six seven eight nine].freeze
DIGITS = [*0..9].freeze

def word_to_digit(str)
  str.split(/\b/).map do |w| 
    WORDS.include?(w) ? DIGITS[WORDS.find_index(w)] : w 
  end.join
end

# p word_to_digit('zero one two three four five six seven eight nine') #=> '0 1 2 3 4 5 6 7 8 9'

#p word_to_digit('hello five friend you') #=> 'hello 5 friend you'


p word_to_digit('Please call me at five five five one two three four. Thanks.')
#'Please call me at 5 5 5 1 2 3 4. Thanks.'
