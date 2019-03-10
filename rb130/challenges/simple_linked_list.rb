# Element of a linked list
class Element
  attr_reader :value, :tail, :next
  alias datum value

  def initialize(value, next_element = nil)
    @value = value
    @next = next_element
  end

  def tail?
    @next.nil?
  end
end

# LinkedList of Elements
class SimpleLinkedList
  attr_reader :list

  def initialize
    @list = []
  end

  def size
    list.size
  end

  def empty?
    list.empty?
  end

  def push(value)
    list << Element.new(value, head)
  end

  def pop
    list.pop.datum
  end

  def peek
    empty? ? nil : list.last.datum
  end

  def head
    list.last
  end

  def to_a
    list.reverse.each_with_object([]) { |x, arr| arr << x.datum }
  end

  def reverse
    SimpleLinkedList.from_a(to_a.reverse)
  end

  def self.from_a(arr)
    list = new
    arr.reverse.each { |x| list.push(x) } unless arr.nil? || arr.empty?
    list
  end
end
