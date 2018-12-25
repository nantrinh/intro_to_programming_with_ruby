# one argument: positive integer
# returns string of alternating 1s and 0s, always starting with 1
# length of the string should match the given integer
#
# invalid input? string, negative integer, or 0
#
# approach
# initiate a counter at 0
# initiate an empty str
# while counter < number, if counter is even, append 1 to str, else append 0
# increment counter
# return str

# def stringy(number)
#   counter = 0
#   str = ''
#   while counter < number
#     counter.even? ? str << '1' : str << '0'
#     counter += 1
#   end
#   str
# end

def stringy(number, first=1)
  unless [0, 1].include?(first)
    puts "Error: argument `first` must have a value of either 1 or 0" 
  end
  str = ''
  second = first == 1 ? 0 : 1
  number.times{ |ctr| ctr.even? ? str << "#{first}" : str << "#{second}" }
  str
end

puts stringy(6)#  == '101010'
puts stringy(9)#  == '101010101'
puts stringy(4)#  == '1010'
puts stringy(7)#  == '1010101'
