# take two array arguments
# each array contains a list of numbers
# returns a new array containing the product of each pair of numbers
# from the arguments that have the same index
# assume the arguments contian the same number of elements
#
# arr.size.times {|idx| new_arr << (arr1[idx] * arr2[idx])} 

# def multiply_list(arr1, arr2)
#   new_arr = []
#   arr1.size.times {|idx| new_arr << (arr1[idx] * arr2[idx])}
#   new_arr
# end

def multiply_list(arr1, arr2)
  arr1.zip(arr2).map { |x, y| x * y }
end

p multiply_list([3, 5, 7], [9, 10, 11]) #== [27, 50, 77]
