class Series
  attr_accessor :str

  def initialize(str)
    @str = str
  end

  def slices(n)
    # return array of consecutive slices of string
    # split into chars, map to integer, each_cons
    raise ArgumentError if n > str.size
    res = []
    str.chars.map(&:to_i).each_cons(n) {|x| res << x}
    res
  end
end
