require 'pry'

class Luhn
  def initialize(n)
    @n = n
  end

  def addends
    # counting from rightmost digit and moving left, double
    # the value of every other digit
    # for any digits that become 10 or more, subtract 9 from the result
    # return array
    # 12121
    # 1 + 4 + 1 + 4 + 1
    @n.to_s.chars.map(&:to_i).reverse.each_with_index.map do |x, idx|
      if idx.odd?
        new = 2 * x
        new > 10 ? new -= 9 : new
      else
        x
      end
    end.reverse
  end

  def checksum
    addends.sum
  end

  def valid?
    checksum % 10 == 0
  end

  def self.create(n)
    # "append" a 0 to the end of the number
    # calculate checksum
    # take checksum modulo 10. if 0, then return 0 
    checksum = self.new(concat(n, 0)).checksum
    return concat(n, 0) if checksum % 10 == 0
    return concat(n, 10 - checksum.to_s[-1].to_i)
    # may fail with higher numbers
    # if not 0 then find next number that ends in 10
    # do this by extracting the tens digit, replace with
    # that digit plus one, replace ones place with a zero 
    # e.g., 5349. extract 4, replace with 5, replace 9 with 0
    # you get 5350
    # take that next_tens minus the sum, return the difference
  end

  def self.concat(n, tail)
    (n.to_s << tail.to_s).to_i
  end
end
