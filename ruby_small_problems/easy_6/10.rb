# argument: positive integer n
# displays a right triangle whose sides have n stars
#
# approach
# loop n times
# for the first time, print n-1 spaces, 1 asterisk
# second time, print n-2 spaces, 2 asterisks
# etc

def triangle(n)
  n.times{ |i| puts "#{' ' * (n-i+1)}#{'*' * (i+1)}" }
end

triangle(5)
triangle(9)
