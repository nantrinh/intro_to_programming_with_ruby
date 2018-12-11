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
