arr = (1..10).to_a
arr << 11
arr.unshift(0)
arr.delete(11)
arr << 3
p arr
