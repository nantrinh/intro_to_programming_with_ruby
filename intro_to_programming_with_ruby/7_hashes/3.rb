h = {'one': 1, 'two': 2, 'three': 3, 'four': 4}

puts "All of the keys:"
h.each_key { |x| puts x }

puts "All of the values:"
h.each_value { |x| puts x }

puts "All of the keys and values:"
h.each { |k, v| puts "#{k}: #{v}" }
