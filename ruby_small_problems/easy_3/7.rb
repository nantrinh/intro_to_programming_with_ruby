# takes an array as an argument
# returns every other element of the argument array, in an array
# 
# approach
# iterate through each element in array, if index is even, put that element in
# a new array

def oddities(arr)
  new_arr = []
  arr.each_with_index { |x, idx| new_arr << x if idx.even? }
  new_arr
end

def oddities(array)
  array.select { |x| array.index(x).even? }
end

puts oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
puts oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
puts oddities(['abc', 'def']) == ['abc']
puts oddities([123]) == [123]
puts oddities([]) == []
