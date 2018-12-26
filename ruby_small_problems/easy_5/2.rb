# takes a time using a minute-based format
# returns the time of day in a 24 hour format (hh:mm)
# should work with any integer input
# may not use Date and Time classes

def adjust_for_midnight(hour, min, positive)
  if positive
    new_hour = hour
    new_min = min
  else
    new_hour = 23 - hour
    new_min = 60 - min
  end
  [new_hour, new_min]
end

def remove_days(num)
  _, rem = num.divmod(60 * 24)
  rem.divmod(60)
end

def add_zeros(x)
  x < 10 ? x.to_s.prepend('0') : x
end

def time_of_day(num)
  return '00:00' if num.zero?
  positive = (num > 0)
  num = -num unless positive
  hour, min = remove_days(num)
  new_hour, new_min = adjust_for_midnight(hour, min, positive)
  [new_hour, new_min].map { |x| add_zeros(x) }.join(':')
end

puts time_of_day(0) == '00:00'
puts time_of_day(-3) == '23:57'
puts time_of_day(-1437) == '00:03'
puts time_of_day(-4231) == '01:29'
puts time_of_day(35) == '00:35'
puts time_of_day(800) == '13:20'
puts time_of_day(3000) == '02:00'
