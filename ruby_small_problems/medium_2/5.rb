# check if valid
# if not valid, return :invalid
#
# are all sides equal? :equilateral
# are 2 sides equal? :isosceles
# are all sides different length? :scalene

def valid?(side1, side2, side3)
  return false if (side1 <= 0) || (side2 <= 0) || (side3 <= 0)
  tmp = [side1, side2, side3]
  tmp.sort!
  tmp[0..1].sum > tmp[-1]
end

def triangle(side1, side2, side3)
  return :invalid unless valid?(side1, side2, side3)
  if (side1 == side2) && (side2 == side3)
    :equilateral
  elsif (side1 == side2) || (side2 == side3) || (side1 == side3)
    :isosceles
  else
    :scalene
  end
end

puts triangle(3, 3, 3) == :equilateral
puts triangle(3, 3, 1.5) == :isosceles
puts triangle(3, 4, 5) == :scalene
puts triangle(0, 3, 3) == :invalid
puts triangle(3, 1, 1) == :invalid
