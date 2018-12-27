# take two arrays as arguments
# return an array that contains all values from the argument arrays
# no duplciation of values in returned array, even if there are
# dupicates in orig arrays

def merge(a, b)
  (a + b).uniq
end

p merge([1, 3, 5], [3, 6, 9])# == [1, 3, 5, 6, 9]
