# takes a string argument
# contains value of the orig string with all consecutive duplicate chars collapsed into a single character
#
# split string into array of characters
# initialize new empty string
# initialzie empty hash
# walk through each character in character array, for each character
# if hash has that char already, don't add it to new string
# else add it to the new string, and add it to the hash

def crunch(str)
  new_str = ''
  str.chars.each_with_object({}) do |c, hsh|
    next if hsh.key?(c)
    hsh[c] = 1
    new_str << c
  end
  new_str
end

p crunch('ddaaiillyy ddoouubbllee')# == 'daily double'
p crunch('4444abcabccba')#  == '4abcabcba'
p crunch('ggggggggggggggg')# == 'g'
p crunch('a')# == 'a'
p crunch('')# == ''
