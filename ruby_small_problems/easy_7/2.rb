# argument: string
# returns a hash with 3 entries
# lowercase: count of lowercase letters
# uppercase: count of uppercase letters
# neither: count of chars that are neither
#
# create hash with counts of 0 for lowercase, uppercase, and neither
# go through each character in string
# +1 for the appropriate hash key value pair
require 'pry'

def letter_case_count(str)
  hsh = {lowercase: 0, uppercase: 0, neither: 0}
  lower = ('a'..'z')
  upper = ('A'..'Z')
  str.chars.each do |c|
    if lower.include?(c)
      hsh[:lowercase] += 1
    elsif upper.include?(c)
      hsh[:uppercase] += 1
    else
      hsh[:neither] += 1
    end
  end
  hsh
end

puts letter_case_count('abCdef 123') # == { lowercase: 5, uppercase: 1, neither: 4 }
puts letter_case_count('AbCd +Ef')   # == { lowercase: 3, uppercase: 3, neither: 2 }
puts letter_case_count('123')        # == { lowercase: 0, uppercase: 0, neither: 3 }
puts letter_case_count('')           # == { lowercase: 0, uppercase: 0, neither: 0 }
