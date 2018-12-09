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

#Q4
number % dividend == 0 checks to see if dividend is a factor of number.
It is a factor if number can be divided by dividend with a 0 remainder.
% is the modulo operator.

factors serves as the return statement. the return value of the last line executed in a ruby method is returned from the method.

`<<` modifies the caller in place. changes the input array that was passed in.
`+` points the variable to a new array. input array is not changed. 

# Q5
