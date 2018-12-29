def substrings(str)
  arr = []
  (0..str.size-1).each do |idx1|
    (idx1..str.size-1).each do |idx2|
      arr << str[idx1..idx2]
    end
  end
  arr
end

def palindrome?(str)
  str == str.reverse && str.size > 1
end

def palindromes(str)
  substrings(str).select { |x| palindrome?(x) }
end


p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
'-madam-', 'madam', 'ada', 'oo'
]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]

