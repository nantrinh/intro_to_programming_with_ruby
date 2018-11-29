a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'salted roads', 'white trees']
new_array = a.map { |x| x.split(' ') }.flatten
p new_array
