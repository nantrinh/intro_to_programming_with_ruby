class Octal
  BASE = 8
  def initialize(str)
    @str = str 
  end

  def to_decimal
    valid? ? calculate : 0
  end

  def valid?
    @str =~ /\A[0-7]+\z/
  end

  def calculate
    res = 0 
    @str.chars.reverse.map(&:to_i).each_with_index do |x, idx|
      res += x * (BASE ** idx)
    end
    res
  end
end
