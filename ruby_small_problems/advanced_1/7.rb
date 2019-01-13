# if one of them is empty, return a copy of the other one
#
# maintain 
# new_array = []
# idx1 = 0 (idx of first array)
# idx2 = 0 (idx of second array)
#
# until you have processed the last element of one of the arrays
# compare elements from both arrays
# add the smaller one to a new array
# increment index

def merge(arr1, arr2)
  new_arr = []
  return arr1.clone if arr2.empty?
  return arr2.clone if arr1.empty?
  idx1 = 0
  idx2 = 0
  until idx1 == arr1.size || idx2 == arr2.size do
    if arr1[idx1] <= arr2[idx2]
      new_arr << arr1[idx1]
      idx1 += 1
    else
      new_arr << arr2[idx2]
      idx2 += 1
    end
  end
  if idx1 == arr1.size && idx2 < arr2.size
    new_arr << arr2[idx2..-1]
  elsif idx1 < arr1.size && idx2 == arr2.size
    new_arr << arr1[idx1..-1]
  end
  new_arr.flatten
end

p merge([1, 5, 9], [2, 6, 8]) # == [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2])    # == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5])        # == [1, 4, 5]
p merge([1, 4, 5], [])        # == [1, 4, 5]
