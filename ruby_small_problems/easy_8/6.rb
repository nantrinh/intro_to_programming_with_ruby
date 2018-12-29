def fizzbuzz(num1, num2)
  arr = []
  (num1..num2).each { |n| arr << fizzbuzz_value(n) }
  puts arr.join(', ')
end

def fizzbuzz_value(number)
  case
  when number % 3 == 0 && number % 5 == 0
    'FizzBuzz'
  when number % 5 == 0
    'Buzz'
  when number % 3 == 0
    'Fizz'
  else
    number
  end
end

fizzbuzz(1, 15)
