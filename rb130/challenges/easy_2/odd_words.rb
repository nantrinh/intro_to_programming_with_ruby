# Input string consists of letters separated by spaces and ends
# with a period
#
# no instruction given with regards to case:
# I will convert to downcase before handling
#
# words with even index, do not change
# words with odd index, reverse
#
# return new string

def odd_words(str)
  str.split.each_with_index.map do |x, idx|
    idx.odd? ? x.sub(/[^A-Za-z]/, '').reverse : x.sub(/[^A-Za-z]/, '') 
  end.join(' ') + '.'
end

str = 'whats the matter with kansas.'
puts odd_words(str)

str = 'blue skies you know how I feel sunny'
puts odd_words(str)
