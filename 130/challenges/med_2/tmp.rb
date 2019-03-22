require 'pry'
min_factor = 1
max_factor = 9
n = 9
(min_factor..max_factor/2).each_with_object([]) do |x, res|
  res << [x, n/x] if n % x == 0
  binding.pry
end
 
