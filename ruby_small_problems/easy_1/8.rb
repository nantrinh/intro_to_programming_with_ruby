# takes one argument (array containing integers)
# returns the average of all numbers in the array
# 

def average(arr)
  arr.sum.to_f / arr.size
end

puts average([1, 5, 87, 45, 8, 8]) #== 25
puts average([9, 47, 23, 95, 16, 52]) #== 40
