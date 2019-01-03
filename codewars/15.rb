def prime?(n)
  [*2..n-1].each { |x| return false if n % x == 0 }
  true
end

def check_goldbach(n)
  # if n is odd and less than or equal to 2, return empty array
  return [] if n.odd? || n <= 2
  # if n is even and greater than 2, return a two-element array
  # with two prime numbers whose sum is the given input
  addends(n)
end

def addends(n)
  # for each subtrahend in arr, get the diff: n - subtrahend 
  # if arr includes the diff, then return the
  # diff and the number (subtrahend)
  [*2..n-1].each do |x|
    return [x, n - x] if prime?(x) && prime?(n - x) 
  end
end

p check_goldbach(2)
p check_goldbach(15)
p check_goldbach(4)
p check_goldbach(8)
p check_goldbach(10)
p check_goldbach(24)
