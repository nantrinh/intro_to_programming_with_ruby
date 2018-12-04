def prompt(message)
  puts "=> #{message}"
end

prompt 'Welcome to Calculator!'
prompt 'What is the first number?'
number1 = gets.chomp.to_i
prompt 'What is the second number?'
number2 = gets.chomp.to_i
prompt 'What operation would you like to perform? 1) add 2) subtract '\
     '3) multiply 4) divide'
operator = gets.chomp.to_i

result = case operator
         when 1
           number1 + number2
         when 2
           number1 - number2
         when 3
           number1 * number2
         when 4
           number1.to_f / number2.to_f
         end

prompt "The answer is #{result}."
