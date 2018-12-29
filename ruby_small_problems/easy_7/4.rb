# argument: string
# returns new string where
# each uppercase letter is replaced with its lowercase version
# each lowercase letter is replaced with its uppercase version
# all other chars are left unchanged
#
# go through each character
# if uppercase, downcase it
# if downcase, upcase it
# otherwise, leave it alone

def swapcase(str)
  upper = ('A'..'Z')
  lower = ('a'..'z')
  new_chars = str.chars.map do |c|
      if upper.include?(c)
        c.downcase
      elsif lower.include?(c)
        c.upcase
      else
        c
      end
  end
  new_chars.join
end

def swapcase(str)
  new_chars = str.chars.map do |c|
      if c ~= /[a-z]/
        c.downcase
      elsif c ~= /[A-Z]/
        c.upcase
      else
        c
      end
  end
  new_chars.join
end



puts swapcase('CamelCase')         # == 'cAMELcASE'
puts swapcase('Tonight on XYZ-TV') # == 'tONIGHT ON xyz-tv'
