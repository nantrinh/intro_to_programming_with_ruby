# takes one argument, an array
# counts the number of occurrences of each element in a given array
# prints each element alongside the number of occurrences

def count_occurrences(arr)
  arr.uniq.each{ |x| puts "#{x} => #{arr.count(x)}" }
end

vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck']

count_occurrences(vehicles)
count_occurrences([])
