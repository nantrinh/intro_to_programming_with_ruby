# takes a time using a minute-based format
# returns the time of day in a 24 hour format (hh:mm)
# should work with any integer input
# may not use Date and Time classes

MINUTES_PER_HOUR = 60
HOURS_PER_DAY = 24
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

def time_of_day(num)
  num = num % MINUTES_PER_DAY
  hours, mins = num.divmod(MINUTES_PER_HOUR)
  format('%02d:%02d', hours, mins)
end

puts time_of_day(0) == '00:00'
puts time_of_day(-3) == '23:57'
puts time_of_day(-1437) == '00:03'
puts time_of_day(-4231) == '01:29'
puts time_of_day(35) == '00:35'
puts time_of_day(800) == '13:20'
puts time_of_day(3000) == '02:00'
