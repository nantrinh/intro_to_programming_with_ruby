# takes a float that represents an angle between 0 and 360 degrees
# returns a string that represents that angle in degrees, minutes, and seconds
#
# deg, rem = num.divmod(1)
# min, rem = (rem * 60).divmod(1)
# sec = (rem * 60)
# format(%(#{deg}DEGREE#%02d'%02d"), min, sec)
DEGREE = "\xC2\xB0"
MINS_PER_DEGREE = 60
SECS_PER_DEGREE = 60

def dms(angle)
  deg, rem = angle.divmod(1)
  min, rem = (rem * MINS_PER_DEGREE).divmod(1)
  sec = (rem * SECS_PER_DEGREE)
  format(%(#{deg}#{DEGREE}%02d'%02d"), min, sec)
end

puts dms(30)        # == %(30°00'00")
puts dms(76.73)     # == %(76°43'48")
puts dms(254.6)     # == %(254°36'00")
puts dms(93.034773) # == %(93°02'05")
puts dms(0)         # == %(0°00'00")
puts dms(360)       # == %(360°00'00") || dms(360) == %(0°00'00")
