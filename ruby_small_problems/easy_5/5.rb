# argument: string that consists of some words and some non-alphabetic chars
# return a string with all of the non-alphabetic chars replaced by spaces
# if one or more non-alphabetic chars occur in a row, put only one space in the result
#
# approach
# replace all non-alpabetic chars with spaces
# remove all occurrences of two spaces

def cleanup(str)
  str.gsub(/[^a-z]/i, ' ').squeeze(' ')
end

puts cleanup("---what's my +*& line?") == ' what s my line '
