require "pry"
class Array
  def my_each
    ctr = 0
    while ctr < self.size 
      yield self[ctr] 
      ctr += 1
    end
    self
  end
end

p [1, 2, 3].my_each{ |x| puts x }
# 1
# 2
# 3
# [1, 2, 3]
p [1, 2, 3].my_each{ |x| puts x }.select{ |x| x.odd? }
# 1
# 2
# 3
# [1, 3]
binding.pry
puts "hello"
