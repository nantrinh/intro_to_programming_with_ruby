require 'pry'
class Prime
  def self.nth(n)
    raise ArgumentError if n < 1
    arr = [2]
    candidate = 3 
    while arr.size < n
      arr << candidate if self.my_prime?(candidate)
      candidate += 2
    end
    arr.last
  end

  def self.my_prime?(n)
    (2..Math.sqrt(n)).each do |x|
      return false if n % x == 0
    end
    true
  end
end
