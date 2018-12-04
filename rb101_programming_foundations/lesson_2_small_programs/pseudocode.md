# A method that returns the sum of two integers
START
GET number_1
GET number_2
PRINT number_1 + number_2
END

# A method that takes an array of strings, and returns a string that is all those strings concatenated together
Given an array of strings called "string_array"
START
newstring = ''
for string in string_array
  newstring += string
PRINT newstring
END


# A method that takes an array of integers, and returns a new array with every other element
Given an array of integers called "numbers"
START
idx = 0
for number in numbers
PRINT number if idx is even
idx += 1
END
