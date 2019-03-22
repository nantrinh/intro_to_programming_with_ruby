def prime?(n)
  (2...n).each do |x|
    return false if n % x == 0
  end
  true
end

p prime?(2)
p prime?(3)
