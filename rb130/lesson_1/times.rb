require "pry"

class Integer
  def my_times
    num = 0
    while num < self
      yield num
      num += 1
    end
    self
  end
end

5.my_times do |num|
  puts num
end

binding.pry
puts "hello"
