def my_method(arr)
  yield(arr)
end

arr = %w(raven finch hawk eagle)
raptors = []
my_method(arr) {|x| raptors = x[2..-1]}
p raptors
