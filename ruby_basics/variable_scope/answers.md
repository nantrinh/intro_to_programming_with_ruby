1. 7. The reassignment in my_value does not mutate a, it only points b to the value 17. Also, numbers are immutable.

2. 7. Same as above. The a in my_value is in a different scope than the a outside of my_value. Method definitions are self-contained with respect to local variables.

3. 7. Numbers are immutable. 

4. 'Xy-zy'. Strings are mutable. String#[]= is a mutating method.

5. 'Xyzzy'. String#= is not a mutating method.

6. Error, because you are trying to assign to an uninitialized variable withn the method. Method definitions are self contained with respect to local variables.

7. 3. Blocks can use and modify local variables that are defined outside the block. 

8. Error. a was not initialized outside of the do..end block.

9. 7. The a in the do..end block is local to that block. The a outside of the scope of the block is not modified.

10. Error. a is not defined within my_value method. Method definition cannot access local variables defined outside of it.
