require 'pry'


class CircularBuffer
  def initialize(n)
    @max_size = n
    @buffer = [] 
  end

  def read
    raise BufferEmptyException if @buffer.empty?
    @buffer.shift
  end

  def write(val)
    raise BufferFullException if full?
    @buffer << val unless val.nil?
  end

  def write!(val)
    if full?
      return if val.nil? 
      @buffer.shift
      @buffer << val
    else
      write(val) 
    end
  end

  def clear
    @buffer.clear
  end

  def full?
    @buffer.size == @max_size
  end

  class BufferEmptyException < StandardError; end
  class BufferFullException < StandardError; end
end
