require "pry"

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

def max_rotation(num)
  res = num
  len = num.to_s.size
  loop do
    res = rotate_rightmost_digits(res, len)
    len -= 1
    break if len < 1
  end
  res
end

puts max_rotation(735291) == 321579
puts max_rotation(3) == 3
puts max_rotation(35) == 53
puts max_rotation(105) == 15 # the leading zero gets dropped
puts max_rotation(8_703_529_146) == 7_321_609_845
