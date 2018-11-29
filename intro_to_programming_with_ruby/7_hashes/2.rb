# merge! mutates the caller while merge does not.

h1 = {one: 1, two: 2}
h2 = {three: 3, four: 4}

h1.merge(h2)
puts "After using 'merge'"
p h1
p h2

puts "After using 'merge!'"
h1.merge!(h2)
p h1
p h2
