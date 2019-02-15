require "pry"

class Array
  def my_reduce(acc=0)
    ctr = 0
    while ctr < self.size
      acc = yield(acc, self[ctr])
      ctr += 1
    end
    acc
  end

  def my_reduce_with_each(acc=0)
    self.each do |x|
      acc = yield(acc, x)
    end
    acc
  end
end

def reduce(arr, acc=0)
  arr.each do |x|
    acc = yield(acc, x)
  end
  acc
end

val = [1, 2, 3].reduce do |acc, num|
  acc + num
end
p val == 6

val = [1, 2, 3].my_reduce do |acc, num|
  acc + num
end
p val == 6

val = [1, 2, 3].my_reduce_with_each do |acc, num|
  acc + num
end
p val == 6

val = [1, 2, 3].my_reduce_with_each(10) do |acc, num|
  acc + num
end
p val == 16

array = [1, 2, 3, 4, 5]
p reduce(array) { |acc, num| acc + num } == 15
p reduce(array, 10) { |acc, num| acc + num } == 25
begin 
  reduce(array) { |acc, num| acc + num if num.odd? }
rescue NoMethodError
  p true
end

def enumerable_reduce(enum, acc=nil)
  acc = enum[0] if acc.nil?
  enum[1..-1].each do |x|
    acc = yield(acc, x) 
  end
  acc
end

p (enumerable_reduce(['a', 'b', 'c']) { |acc, value| acc += value })     # => 'abc'
p (enumerable_reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value }) # => [1, 2, 'a', 'b']
