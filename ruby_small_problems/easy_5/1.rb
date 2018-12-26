# accepts string as argument
# determines and returns the ascii string value of the string
# the value is hte sum of the ascii values of every char in the string

def ascii_value(str)
  str.chars.map { |x| x.ord }.sum
end

puts ascii_value('Four score') == 984
puts ascii_value('Launch School') == 1251
puts ascii_value('a') == 97
puts ascii_value('') == 0
