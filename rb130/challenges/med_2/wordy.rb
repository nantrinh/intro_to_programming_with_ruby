class WordProblem
  OPERATIONS = {
    plus: '+',
    minus: '-',
    multiplied: '*',
    divided: '/'
  }.freeze
  attr_accessor :str

  def initialize(str)
    @str = str
  end

  def answer
    parse
    calculate
  end

  def parse
    cleaned_arr = str[8...-1].split
    @ints = cleaned_arr.select { |x| x =~ /-*[0-9]/ }.map(&:to_i)
    @ops = cleaned_arr.each_with_object([]) do |x, res|
      res << OPERATIONS[x.to_sym] if OPERATIONS.keys.include?(x.to_sym)
    end
  end

  def calculate
    raise ArgumentError if @ints.empty? || @ops.empty?
    res = @ints.first
    @ops.each_with_index do |_op, idx|
      res = res.send(@ops[idx], @ints[idx + 1])
    end
    res
  end
end
