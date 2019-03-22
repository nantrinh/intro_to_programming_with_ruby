require 'pry'
# needed to look at solution for this...
class Palindromes
  attr_reader :max_factor, :min_factor, :palindromes
  def initialize(max_factor: 1, min_factor: 1)
    @max_factor = max_factor
    @min_factor = min_factor
    @palindromes = Hash.new { |hash, key| hash[key] = [] }
  end

  def generate
    (min_factor..max_factor).to_a.repeated_combination(2) do |x,y|
        palindromes[x * y] << [x,y] if palindrome?(x * y)
    end
  end

  def palindrome?(value)
    value.to_s == value.to_s.reverse
  end

  def largest
    Struct.new(:value, :factors).new(largest_product, palindromes[largest_product])
  end

  def smallest
    Struct.new(:value, :factors).new(smallest_product, palindromes[smallest_product])
  end

  def smallest_product
    palindromes.keys.min
  end

  def largest_product
    palindromes.keys.max
  end
end
