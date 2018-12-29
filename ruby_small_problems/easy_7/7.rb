# takes array of integers as argument
# multiplies all the numbers togehter
# divides the result by the number of entries in the array
# prints the result rounded to 3 decimal places
# assume the array is non-empty
# 
# .reduce(:*)
# / arr.size.to_f

def show_multiplicative_average(arr)
  result = (arr.reduce(:*) / arr.size.to_f)
  puts format("The result is %.3f", result)
end

show_multiplicative_average([3, 5])

show_multiplicative_average([6])

show_multiplicative_average([2, 5, 7, 11, 13, 17])
