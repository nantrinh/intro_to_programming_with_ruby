arr = (1..10).to_a
new_array = arr.select{ |x| x.odd? }
p new_array
