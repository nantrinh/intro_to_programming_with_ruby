# ask user for length and width of a room in meters
# display the area in both sq meters and sq feet
# 1 meter == 10.7639 sq feet

puts "Enter the length of the room in meters:"
length = gets.chomp.to_f
puts "Enter the width of the room in meters:"
width = gets.chomp.to_f
area_in_meters = length * width
area_in_feet = (10.7639 * area_in_meters).round(2)
puts "The area of the room is #{area_in_meters} (#{area_in_feet} square feet)."
