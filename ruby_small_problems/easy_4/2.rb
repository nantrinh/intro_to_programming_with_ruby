# takes a year as input
# returns the century
# return value is a string beginning with the century number and ends with 
# st, nd, rd, or th as appropriate
#
# example: 1901-2000 comprise the 20th century
# 
# approach
# number / 100.0 => result + 1 is the century
# except where the number divides evenly into 100, then it's just the result
# take the result, make it an integer (truncates it)
# use hash to determine what ending to append
require "pry"

HSH = {
  '0' => 'th',
  '1' => 'st',
  '2' => 'nd',
  '3' => 'rd',
  '4' => 'th',
  '5' => 'th',
  '6' => 'th',
  '7' => 'th',
  '8' => 'th',
  '9' => 'th',
  }

def century(num)
  century_num = (num % 100.0 == 0) ?  num / 100 : (num / 100.0).to_i + 1
  last_char = if century_num.to_s.size == 1
                century_num.to_s
              else
                century_num.to_s.chars.last
              end
  ending = if [11, 12, 13].include?(century_num % 100)
             'th' 
           else
             HSH[last_char]
           end
  "#{century_num}#{ending}"
end

puts century(2000)  == '20th'
puts century(2001)  == '21st'
puts century(1965)  == '20th'
puts century(256)   == '3rd'
puts century(5)     == '1st'
puts century(10103) == '102nd'
puts century(1052)  == '11th'
puts century(1127)  == '12th'
puts century(11201) == '113th'
