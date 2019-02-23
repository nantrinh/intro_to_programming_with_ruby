class SumOfMultiples
  DEFAULT = [3, 5]

  def initialize(*arr)
    @arr = arr
  end

  def to(n)
    self.class.to(n, @arr)
  end

  def self.to(n, arr=DEFAULT)
    # Finds the sum of all the multiples of numbers up to but not
    # including that number
    res = []
    arr.each do |x|
      curr = x
      while curr < n
        res << curr unless res.include?(curr)
        curr += x
      end
    end
    res.sum
  end
end
