def sum_square_difference(n)
  sq_sum = (1..n).sum ** 2
  sum_sq = (1..n).map { |x| x ** 2 }.sum
  sq_sum - sum_sq
end

puts sum_square_difference(3)   #== 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
puts sum_square_difference(10)  # == 2640
puts sum_square_difference(1)   # == 0
puts sum_square_difference(100) # == 25164150
