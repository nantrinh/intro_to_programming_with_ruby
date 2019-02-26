class PhoneNumber
  INVALID = '0' * 10
  def initialize(str)
    @str = str 
  end

  def number
    return INVALID if @str.chars.any? {|x| x =~ /[A-za-z]/} 
    arr = @str.chars.reject {|x| x =~ /[^0-9]/}
    arr.shift if arr.size == 11 and arr.first == '1'
    res = arr.join
    valid?(res) ? res : INVALID 
  end

  def valid?(str)
    str.size == 10
  end

  def to_s
    res = number
    "(#{res[0,3]}) #{res[3,3]}-#{res[6,4]}"
  end

  def area_code
    res = number
    res[0,3]
  end
end
