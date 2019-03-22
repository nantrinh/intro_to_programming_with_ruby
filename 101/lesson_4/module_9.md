# Q1
[1, 2, 3]
last statement evaluated is always truthy, so all elements are selected 
and returned in a new array

# Q2
2
If a block is given, counts the number of elements yielding a true value.

# Q3
[1, 2, 3] because puts always returns nil, which is a falsey value.
Array#reject returns a new array containing the items in self for which the 
block is not true. If no block is given, an enumerator is returned instead.

# Q4
{'a':'ant', 'b':'bear', 'c':'cat'}
initially given a hash
for each element in array, adds first letter of string as key, entire string 
as value
Iterates the given block for each element with an arbitrary object given, and 
returns the initially given object. If no block is given, returns an 
enumerator.

# Q5
[:a, 'ant']
Removes first element of hash and returns it as the two-item array [key, value].

# Q6
11
pop removes and returns last item of array. size returns the length of the element.

# Q7
true
block returns true for the first item. any? stops iterating after the first item
because it got one true and doesn't need to go any further.
return value of any? is true because the block returned true for at least one 
value

# Q8
[1, 2]
take returns first n elements from the array. It is not destructive.

# Q9
[nil, 'bear']
block returns nil, then value

# Q10
[1, nil, nil]
if the element is greater than 1, the block returns the element. else it returns nil (puts returns nil)

