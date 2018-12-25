# takes two arguments (string, positive integer)
# prints the string as many times as the integer indicates
#
# Approach
# def repeat(string, number)
#   number.times{ puts string }  
# end

def repeat(string, number)
  while number > 0
    puts string
    number -= 1
  end
end

# Examples
# how to handle invalid input? (number = 0, number not a number, etc)
repeat('hello', 3) # => 'hello' 'hello' hello'
repeat('', 0) # => ''
