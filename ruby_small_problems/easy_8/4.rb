def substrings(str)
  arr = []
  (0..str.size-1).each do |idx1|
    (idx1..str.size-1).each do |idx2|
      arr << str[idx1..idx2]
    end
  end
  arr
end

p substrings('abcde') #== [
#   'a', 'ab', 'abc', 'abcd', 'abcde', 
#   'b', 'bc', 'bcd', 'bcde',
#   'c', 'cd', 'cde',
#   'd', 'de',
#   'e'
# ]
