# check if valid
# return :invalid if not valid
#
# valid method
# are the sum of the angles 180 degrees?
# are all angles greater than zero?
# return false unless both conditions are satisfied

def valid?(ang1, ang2, ang3)
  ang1 + ang2 + ang3 == 180 && ang1 > 0 && ang2 > 0 && ang3 > 0
end

def triangle(ang1, ang2, ang3)
  return :invalid unless valid?(ang1, ang2, ang3)
  if ang1 < 90 && ang2 < 90 && ang3 < 90
    :acute
  elsif ang1 == 90 || ang2 == 90 || ang3 == 90
    :right
  elsif ang1 > 90 || ang2 > 90 || ang3 > 90
    :obtuse
  end
end

puts triangle(60, 70, 50)  #== :acute
puts triangle(30, 90, 60)  #== :right
puts triangle(120, 50, 10) #== :obtuse
puts triangle(0, 90, 90)   #== :invalid
puts triangle(50, 50, 50)  #== :invalid
