class Palindromes
  attr_accessor :max_factor, :min_factor, :palindromes

  def initialize(max_factor: 1, min_factor: 1)
    @max_factor = max_factor
    @min_factor = min_factor
    @palindromes = []
  end

  def generate
    if max_factor < 10
      palindromes << max_factor
    else
      # TODO 
    end
  end

  def largest
    Struct.new(:value, :factors) \
          .new(palindromes.last, factors(palindromes.last))
  end

  def factors(n)
    (min_factor..max_factor/2).each_with_object([]) do |x, res|
      res << [x, n/x] if n % x == 0
    end
  end
end
