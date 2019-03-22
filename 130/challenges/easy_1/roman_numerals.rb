# watched the solution because my code was turning very complicated
# I like the last solution shown

class Integer
  def to_roman
    hundreds_numerals = %w(C CC CCC CD D DC DCC DCCC CM)
    tens_numerals = %w(X XX XXX XL L LX LXX LXXX XC)
    ones_numerals = %w(I II III IV V VI VII VIII IX)

    thousands = self / 1000
    hundreds = self % 1000 / 100
    tens = self % 1000 % 100 / 10 
    ones = self % 1000 % 100 % 10

    res = ''
    thousands.times { res << 'M' }
    res << hundreds_numerals[hundreds - 1] if hundreds > 0
    res << tens_numerals[tens - 1] if tens > 0
    res << ones_numerals[ones - 1] if ones > 0
    res
  end
end
