# Q1
```
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]
hash = {}
flintstones.each_with_index {|item, index| hash[item] = index}
```
the last line returns the original array, flintstones. 
hash has been modified, though.

# Q2
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
ages.values.sum

# Q3
ages.delete_if { |_, v| v >= 100 }

# Q4
ages.values.min

# Q5
flintstones.index { |x| x[0, 2] == 'Be' }

# Q6
flintstones.map!{ |x| x[0,3] }

# Q7
statement = "The Flintstones Rock"
hash = {}
statement.chars.each do |x|
  if hash.has_key?(x)
    hash[x] += 1
  else
    hash[x] = 1
  end
end
puts hash.inspect

# Q8
That's bad practice.
print 1
1 is removed
print 3
2 is removed

print 1
4 is removed
print 2
3 is removed

# Q9
def titleize(string)
  string.split.map {|word| word.capitalize}.join(' ')
end

# Q10
munsters.each do |k, v|
  case v['age']
  when (0..17)
    v['age_group'] = 'kid' 
  when (18..64)
    v['age_group'] = 'adult'
  else
    v['age_group'] = 'senior'
  end
end
