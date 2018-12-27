# argument: array
# returns 2 arrays (nested pair) containing first half and second half
# if orig array has odd # of elements, middle element should be placed in the first half array
#
# approach
# num_in_first_half = arr.size.odd? ? (arr.size / 2) + 1 : arr.size / 2
# arr[0, num_in_first_half]
# arr[num_in_first_half, arr.size - num_in_first_half]

def halvsies(arr)
  num_in_first_half = (arr.size / 2.0).ceil
  [arr[0, num_in_first_half], arr[num_in_first_half, arr.size - num_in_first_half]]
end

p halvsies([1, 2, 3, 4])    # == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) # == [[1, 5, 2], [4, 3]]
p halvsies([5])             # == [[5], []]
p halvsies([])              # == [[], []]
