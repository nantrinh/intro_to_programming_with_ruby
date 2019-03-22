def missing(arr)
  # select everything from range if it is NOT in the input array
  range = (arr[0]..arr[-1])
  range.select {|x| !arr.include?(x)}
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []
