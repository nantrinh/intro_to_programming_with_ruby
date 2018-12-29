# takes 2 arrays as arguments
# interleaves them, starting with first element of first array passed in
# returns interleaved array
# both arrays have same # elements, and are not empty
#
# approach 
# walk through all indices, at each index, insert arr1[idx] in new array, then insert arr[idx2] into new array

def interleave(arr1, arr2)
  new_arr = []
  arr1.size.times{ |idx| new_arr << arr1[idx] << arr2[idx] }
  new_arr
end

# with zip
def interleave(arr1, arr2)
  arr1.zip(arr2).flatten
end

p interleave([1, 2, 3], ['a', 'b', 'c']) #== [1, 'a', 2, 'b', 3, 'c']
