# 2 methods
# take a time of day in 24 hr format
# returns the number of minutes before and after midnight, respectively
# both methods should return a value in teh range 0..1439
#
# before
# calculate difference in hours and minutes
# convert hours to minutes, add to the minutes
#
# after
# (60 * number of hours) + minutes
MIDNIGHT_HR = 24
MINS_PER_HR = 60

def before_midnight(time)
  hours, mins = time.split(':').map(&:to_i)
  return 0 if hours.zero? && mins.zero?
  mins = MINS_PER_HR - mins unless mins.zero?
  hours += 1 unless mins.zero?
  [(MIDNIGHT_HR - hours) * MINS_PER_HR, mins].sum
end

def after_midnight(time)
  hours, mins = time.split(':').map(&:to_i)
  return 0 if hours == MIDNIGHT_HR
  [hours * MINS_PER_HR, mins].sum
end

puts before_midnight('00:00') == 0
puts before_midnight('23:00') == 60
puts before_midnight('12:00') == 720
puts before_midnight('01:00') == 1380
puts before_midnight('12:34') == 686
puts before_midnight('24:00') == 0

puts after_midnight('00:00') == 0
puts after_midnight('01:00') == 60 
puts after_midnight('12:34') == 754
puts after_midnight('24:00') == 0
