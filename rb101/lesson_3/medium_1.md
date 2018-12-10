# Q1
10.times{|i| puts (' ' * i) + 'The Flintstones Rock!'}

# Q2
use string interpolation
puts "the value of 40 + 2 is #{40 + 2}"

# Q3
```
def factors(number)
  divisor = number
  factors = []
  while divisor > 0
    factors << number / divisor if number % divisor == 0
    divisor -= 1
  end 
  factors
end
```
number % dividend == 0 checks to see if dividend is a factor of number.
It is a factor if number can be divided by dividend with a 0 remainder.
% is the modulo operator.

factors serves as the return statement. the return value of the last line executed in a ruby method is returned from the method.

# Q4
`<<` modifies the caller in place. changes the input array that was passed in.
`+` points the variable to a new array. input array is not changed. 

# Q5
limit is not initialized within the fib method or passed in as an argument. method scope is self-contained so it cannot access local variables initialized
outside of its scope.

can pass it in as an argument.
def fib(first_num, second_num, limit)

# Q6
```
def tricky_method(a_string_param, an_array_param)
  a_string_param += "rutabaga"
  an_array_param << "rutabaga"
end

my_string = "pumpkins"
my_array = ["pumpkins"]
tricky_method(my_string, my_array)

puts "My string looks like this now: #{my_string}" #=> "pumpkins" because += does not modify the caller
puts "My array looks like this now: #{my_array}" #=> ["pumpkins", "rutabaga"]
```

```
def print_string_rutabaga(string)
  string += "rutabaga"
end

def append_rutabaga(array)
  array << 'rutabaga'
end
```

# Q7
new_answer = 50
prints => 34

# Q8
Yes because hashes are mutable. Hash#[]= method and Hash#[]+= method modifies the caller.

# Q9
rps(rps('paper', 'rock'), 'rock')
rps('paper', 'rock')
'paper'

# Q10
bar('yes')
'no'
