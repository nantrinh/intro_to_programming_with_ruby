require 'pry'

class Series
  attr_accessor :str

  def initialize(str)
    @str = str
  end

  def slices(n) 
    raise ArgumentError if n > str.size
    res = []
    int_arr = str.chars.map(&:to_i)
    int_arr[0..-n].each_with_index do |x, idx|
      res << int_arr[idx, n] 
    end
    res
  end
end
