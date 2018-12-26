# takes two strings as arguments
# determines which one is longer
# returns the result of concatenating short string + long string + short string
# assume strings are different lengths

def short_long_short(str_one, str_two)
  if str_one.size > str_two.size  
    "#{str_two}#{str_one}#{str_two}"  
  else
    "#{str_one}#{str_two}#{str_one}"
  end
end

puts short_long_short('abc', 'defgh') == "abcdefghabc"
puts short_long_short('abcde', 'fgh') == "fghabcdefgh"
puts short_long_short('', 'xyz') == "xyz"
