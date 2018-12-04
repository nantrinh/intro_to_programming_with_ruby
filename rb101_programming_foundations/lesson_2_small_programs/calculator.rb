require "pry"

def prompt(message)
  puts "=> #{message}"
end

def valid_number?(number)
  (number.to_i.to_s == number) && (number.to_i != 0) 
end

def number?(number)
  (number.to_f.to_s == input) && (number.to_f != 0)
end

def operation_to_message(op)
  result = case op
           when 1
             'Adding'
           when 2
             'Subtracting'
           when 3
             'Multiplying'
           when 4
             'Dividing'
           end
  result
end

prompt 'Welcome to Calculator! Please enter your name:'
name = ''
loop do
  name = gets.chomp
  break unless name.empty?
  prompt 'Make sure to use a valid name.'
end

puts "Hello #{name}"

loop do
  number1 = nil
  number2 = nil
  operator = nil
  operator_str = ''

  loop do
    prompt 'What is the first number (Enter nonzero integer)?'
    number1 = gets.chomp
    break if valid_number?(number1)
    prompt 'That is not a valid number.'
  end

  loop do
    prompt 'What is the second number (Enter nonzero integer)?'
    number2 = gets.chomp
    break if valid_number?(number2)
    prompt 'That is not a valid number.'
  end

  operator_prompt = <<-MSG
    What operation would you like to perform?
    1) add
    2) subtract
    3) multiply
    4) divide
  MSG

  prompt operator_prompt

  loop do
    operator = gets.chomp
    break if %w(1 2 3 4).include?(operator)
    prompt 'Must choose 1, 2, 3, or 4'
  end

  number1 = number1.to_i
  number2 = number2.to_i
  operator = operator.to_i

  prompt "#{operation_to_message(operator)} the two numbers..."

  result = case operator
           when 1
             operator_str = '+'
             number1 + number2
           when 2
             operator_str = '-'
             number1 - number2
           when 3
             operator_str = '*'
             number1 * number2
           when 4
             operator_str = '/'
             number1.to_f / number2.to_f
           end

  prompt "#{number1} #{operator_str} #{number2} is #{result}."

  prompt 'Do you want to perform another calculation?'\
         '(Y to calculate again)'
  answer = gets.chomp.upcase
  break unless answer == 'Y'
end

prompt 'Goodbye.'
