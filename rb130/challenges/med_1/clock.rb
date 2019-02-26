require 'pry'
class Clock
  include Comparable

  def initialize(hr, min)
    @time = Time.new(1970, 1, 1, hr, min)
  end

  def self.at(hr=0, min=0)
    self.new(hr, min)
  end

  def to_s
    @time.strftime("%H:%M")
  end

  def +(min)
    seconds = min * 60
    @time = @time + seconds
    self
  end

  def -(min)
    seconds = min * 60
    @time = @time - seconds
    self
  end

  def <=>(other)
    @time <=> other.time
  end

  protected
  attr_reader :time
end

