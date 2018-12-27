# takes an array as argument
# reverses elements in place
#
# approach
# tmp array of two elements to swap
# swap elements in array
require "pry"

def reverse!(arr)
  idx1 = 0
  idx2 = -1
  while idx1 < arr.size / 2
    arr[idx1], arr[idx2] = arr[idx2], arr[idx1]
    idx1 += 1
    idx2 -= 1
  end
  arr
end

list = [1,2,3,4]
result = reverse!(list) # => [4,3,2,1]
p list# == [4, 3, 2, 1]
p list.object_id
p result.object_id

list = %w(a b c d e)
reverse!(list) # => ["e", "d", "c", "b", "a"]
p list# == ["e", "d", "c", "b", "a"]

list = ['abc']
reverse!(list) # => ["abc"]
p list# == ["abc"]

list = []
reverse!(list) # => []
p list# == []
