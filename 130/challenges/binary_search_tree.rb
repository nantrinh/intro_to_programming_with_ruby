require 'pry'
class Bst
  attr_reader :current, :left, :right

  alias :data :current

  def initialize(value)
    @current = value
    @left = nil
    @right = nil
  end

  def insert(value)
    if value <= current
      left.nil? ? @left = Bst.new(value) : left.insert(value)
    else
      right.nil? ? @right = Bst.new(value) : right.insert(value)    
    end
  end

  def each
    return to_enum(:each) unless block_given?
    if left
      left.each {|x| yield x}
    end
    yield current 
    if right
      right.each {|x| yield x}
    end
  end
end
