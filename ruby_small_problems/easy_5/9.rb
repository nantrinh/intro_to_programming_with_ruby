# takes a string argument
# contains value of the orig string with all consecutive duplicate chars collapsed into a single character
#
# split string into array of characters
# initialize new empty string
# initialize local var `prev` to hold prev char, set the value to ''
# walk through each character in character array, for each character
# if `prev` == that char, next
# else assign that char to `prev`

def crunch(str)
  new_str = ''
  prev = ''
  str.chars.each do |c|
    next if prev == c
    new_str << c
    prev = c
  end
  new_str
end

p crunch('ddaaiillyy ddoouubbllee')# == 'daily double'
p crunch('4444abcabccba')#  == '4abcabcba'
p crunch('ggggggggggggggg')# == 'g'
p crunch('a')# == 'a'
p crunch('')# == ''
