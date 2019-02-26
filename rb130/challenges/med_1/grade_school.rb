require 'pry'
class School
  def initialize
    @roster = {}
  end

  def to_h
    roster.sort.map {|k, v| [k, v.sort]}.to_h
  end

  def add(name, grade)
    begin
      roster[grade] << name
    rescue StandardError
      roster[grade] = [name]
    end
  end

  def grade(n)
    roster[n] || []
  end

  private
  attr_accessor :roster
end
