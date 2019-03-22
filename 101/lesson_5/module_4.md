# Example 1
For each element in the array, print the the first element of that element.

The Array#each method is being called on the multi-dimensional array 
[[1, 2], [3, 4]]. Each inner array is passed to the block in turn and assigned 
to the varialbe arr. The Array#first method is called on arr and returns the 
object at index 0 of the current array -- in this case, the integers 1 and 3, 
respectively. The puts method then outputs a string representation of the 
integer. puts returns nil and since this is the last evaluated statement 
within the block, the return value of the block is therefore nil. each doesn't 
do anything with this returned value though, and since the return value of each
is the calling object -- in this case the nested array [[1, 2], [3, 4]], this 
is what is ultimately returned. 

# Example 2
The Array#map method is being called on the multi-dimensional array 
[[1, 2], [3, 4]]. Each inner array is passed to the block in turn and assigned 
to the variable arr. The Array#first method is called on arr and returns the 
object at index 0 of the current array -- in this case, the integers 1 and 3, 
respectively. The puts method then outputs a string representation of the 
integer. puts returns nil and since this is the last evaluated statement 
within the block, the return value of the block is therefore nil. map takes the
return value and inserts it into an array. since the return value of each
is nil, the array [nil, nil] is ultimately returned.

# Example 3
The Array#map method is being called on the multi-dimensional array 
[[1, 2], [3, 4]]. Each inner array is passed to the block in turn and assigned 
to the variable arr. The Array#first method is called on arr and returns the 
object at index 0 of the current array -- in this case, the integers 1 and 3, 
respectively. The puts method then outputs a string representation of the 
integer. puts returns nil. In the next line, the Array#first method is called on
arr again and returns the object at index 0 of the current array, the integers 1
and 3 respectively, in this case. Since this is the last evaluated statement 
within the block, the return values of the block are therefore 1 and 3. map 
takes the return values and inserts them into an array. [1, 3] is returned. 

# Example 4
The Array#each method is being called on the multi-dimensional array 
[[18, 7], [3, 12]]. Each inner array is being passed to the block in turn and
assigned to the variable arr. The Array#each method is being called on the arr
variable. Each element of the inner array is being passed to the block in turn
and assigned to the variable num. If num is greater than 5, the puts method
outputs a string representation of the intgeter and returns nil. The return
values of the inner block are nil. The Array#each methods do not care about the
return values and return the caller. So, this entire piece of code returns the
original array [[18, 7], [3, 12]]. 
You will see these integers printed out
18
7
12
3 is not shown because it did not meet the criteria in the if block.


# Example 5
[[2, 4], [6, 8]]

# Example 6
{c: 'cat'}
checks to see if, for every key:value pair, the first letter of the value is
equal to the key, when key is converted to a string.
This is true for the second hash here, so true is returned in the inner loop.
Array#select returns the elements for which the block evaluates to true, 
and only the second element is evaluated to true in this case, so the second
element is returned.

# Example 10
[
  [[2, 3], [4, 5]], 
  [6, 7]
]
