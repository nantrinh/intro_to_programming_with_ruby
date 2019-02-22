class Trinary
  BASE = 3
  REGEX = /[^0-2]/
  def initialize(str)
    @str = str
  end

  def to_decimal
    @str =~ REGEX ? 0 : calculate
  end

  def calculate
    # split in chars
    # reverse array
    # for each, calculate int * (base ** idx)
    # have accumulator, return acc at end
    acc = 0
    @str.chars.reverse.map(&:to_i).each_with_index {|x, idx| acc += x * (BASE ** idx)}
    acc
  end
end

p Trinary.new('1').to_decimal == 1
p Trinary.new('2').to_decimal == 2
p Trinary.new('10').to_decimal == 3
p Trinary.new('11').to_decimal == 4
p Trinary.new('100').to_decimal == 9 
p Trinary.new('112').to_decimal == 14 
p Trinary.new('222').to_decimal == 26 
p Trinary.new('1122000120').to_decimal == 32_091 
p Trinary.new('carrot').to_decimal == 0
p Trinary.new('0a1b2c').to_decimal == 0



