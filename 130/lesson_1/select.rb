def select(arr)
  ctr = 0
  new_arr = []
  while ctr < arr.size
    new_arr << arr[ctr] if yield arr[ctr]
    ctr += 1
  end
  new_arr
end

array = [1, 2, 3, 4, 5]

p (select(array) { |num| num.odd? } == [1, 3, 5])      # => [1, 3, 5]
p (select(array) { |num| puts num } == [])      # => [], because "puts num" returns nil and evaluates to false
p (select(array) { |num| num + 1 } == [1, 2, 3, 4, 5])       # => [1, 2, 3, 4, 5], because "num + 1" evaluates to true

# instance method version
class Array
  def my_select
    ctr = 0
    new_arr = []
    while ctr < self.size
      new_arr << self[ctr] if yield self[ctr] 
      ctr += 1
    end
    new_arr
  end
end
p (array.my_select { |num| num.odd? } == [1, 3, 5])
p (array.my_select { |num| puts num } == [])
p (array.my_select { |num| num + 1 } == [1, 2, 3, 4, 5])

# instance method with each
class Array
  def my_select_with_each
    new_arr = []
    self.each do |x|
      new_arr << x if yield x 
    end
    new_arr
  end
end

p (array.my_select_with_each { |num| num.odd? } == [1, 3, 5])
p (array.my_select_with_each { |num| puts num } == [])
p (array.my_select_with_each { |num| num + 1 } == [1, 2, 3, 4, 5])

