# mult = number % 7
# 
# mult = 12 % 7
# (mult = 1)
# 
# mult += 1 (mult = 2)
# res = mult * 7 (res = 14)
# 
# featured?(res)
# do digits appear only one each?
# res.to_s.chars.uniq.size == res.to_s.chars.size
#
# if featured, return that res
# else mult += 1
# res = mult * 7 
# check if featured, repeat

def featured?(num)
  num.odd? && num.to_s.chars.uniq.size == num.to_s.chars.size
end

def featured(num)
  return "No next featured number exists." if num.to_s.chars.size > 9
  mult, _ = num.divmod(7)
  loop do
    mult += 1
    res = mult * 7
    return res if featured?(res)
  end
end

puts featured(12)          # == 21
puts featured(20)          # == 21
puts featured(21)          # == 35
puts featured(997)         # == 1029
puts featured(1029)        # == 1043
puts featured(999_999)     # == 1_023_547
puts featured(999_999_987) # == 1_023_456_987
puts featured(9_999_999_999)
