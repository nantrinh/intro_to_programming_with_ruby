# takes an array
# returns new array with elements of original list in reverse order
# do not modify original list
#
# clone the array
# walk through it, swap elements until you reach the median

# def reverse(arr)
#   new_arr = arr.clone
#   idx1 = 0
#   idx2 = -1
#   while idx1 < new_arr.size / 2
#     new_arr[idx1], new_arr[idx2] = new_arr[idx2], new_arr[idx1]
#     idx1 += 1
#     idx2 -= 1
#   end
#   new_arr
# end

def reverse(arr)
  arr.each_with_object([]) {|x, new_arr| new_arr.prepend(x)}
end

p reverse([1,2,3,4])     # == [4,3,2,1]          # => true
p reverse(%w(a b c d e)) # == %w(e d c b a)      # => true
p reverse(['abc'])       # == ['abc']            # => true
p reverse([])            # == []                 # => true

list = [1, 2, 3]                      # => [1, 2, 3]
new_list = reverse(list)              # => [3, 2, 1]
puts list.object_id != new_list.object_id  # => true
puts list == [1, 2, 3]                     # => true
puts new_list == [3, 2, 1]                 # => true
