def rotate_array(arr)
  arr[1..-1].push(arr[0])
end

def rotate_rightmost_digits(num, digits)
  # split 735291 to 7352 and 91
  chars = num.to_s.chars
  first, second = chars[0..-digits-1], chars[-digits..-1]
  # 91 => [9, 1]
  # pass [9, 1] to rotate_array, get [1, 9] back
  second_rotated = rotate_array(second)
  # ([7, 3, 5, 2] << [1, 9]).flatten.join.to_i
  (first << second_rotated).flatten.join.to_i
end

puts rotate_rightmost_digits(735291, 1) == 735291
puts rotate_rightmost_digits(735291, 2) == 735219
puts rotate_rightmost_digits(735291, 3) == 735912
puts rotate_rightmost_digits(735291, 4) == 732915
puts rotate_rightmost_digits(735291, 5) == 752913
puts rotate_rightmost_digits(735291, 6) == 352917
