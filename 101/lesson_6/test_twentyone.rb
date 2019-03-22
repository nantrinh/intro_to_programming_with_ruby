# tests value function

puts value([1, 2, 3]) #=> 6
puts value([1, 2, 3, 'King', 'Queen', 'Jack']) #=> 36
puts value([2, 5, 'Ace']) #=> 18
puts value([2, 5, 'Ace', 'Ace']) #=> 19 
puts value(['King', 'Ace']) #=> 21 
puts value(['King', 'Ace', 'Ace']) #=> 12 
