# Q1
```
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]
hash = {}
flintstones.each_with_index {|item, index| hash[item] = index}
```
the last line returns the original array, flintstones. 
hash has been modified, though.
