class PerfectNumber
  def self.classify(n)
    raise RuntimeError if n < 0
    sum = sum_of_divisors(n)
    case
    when sum == n then return 'perfect'
    when sum > n then return 'abundant'
    when sum < n then return 'deficient'
    end
  end

  def self.sum_of_divisors(n)
    (1...n).select {|x| n % x == 0}.sum
  end
end
