
# A number in octal only contains the digits 0..7

class Octal
  attr_accessor :chars
  def initialize(str)
    @chars = str.chars 
    remove_leading_zeros(chars)
  end

  def remove_leading_zeros(chars)
    while chars.first == '0'
      chars.shift
    end
  end

  def to_decimal
    return 0 unless number? and octal?
    # split number into its digits
    # reverse the array of digits
    # iterate through each digit
    # compute digit * (base ** index) 
    # have an accumulator to conduct the sum
    acc = 0
    chars.reverse.map(&:to_i).each_with_index do |x, idx|
      acc += x * (8 ** idx)
    end
    acc
  end

  def number?
    chars.join.to_i.to_s == chars.join 
  end

  def octal?
    chars.map(&:to_i).all? {|x| (0..7).include?(x)}
  end
end

# p (Octal.new('1').to_decimal        == 1)
# p (Octal.new('10').to_decimal       == 8)
# p (Octal.new('17').to_decimal       == 15) 
# p (Octal.new('11').to_decimal       == 9)
# p (Octal.new('8').to_decimal        == 0)
# p (Octal.new('carrot').to_decimal   == 0)
# p (Octal.new('6789').to_decimal     == 0)
