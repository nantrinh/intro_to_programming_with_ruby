require "yaml"
require "pry"
MESSAGES = YAML.load_file('calculator_messages.yml')

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

prompt MESSAGES["welcome"] 
name = ''
loop do
  name = gets.chomp
  break unless name.empty?
  prompt MESSAGES["valid_name"] 
end

puts "Hello #{name}"

loop do
  number1 = nil
  number2 = nil
  operator = nil
  operator_str = ''

  loop do
    prompt MESSAGES['first_number'] 
    number1 = gets.chomp
    break if valid_number?(number1)
    prompt MESSAGES['not_valid'] 
  end

  loop do
    prompt MESSAGES['second_number'] 
    number2 = gets.chomp
    break if valid_number?(number2)
    prompt MESSAGES['invalid_prompt'] 
  end

  prompt MESSAGES['operator_prompt'] 

  loop do
    operator = gets.chomp
    break if %w(1 2 3 4).include?(operator)
    prompt MESSAGES['invalid_prompt'] 
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

  prompt MESSAGES['calculate_again']
  answer = gets.chomp.upcase
  break unless answer == 'Y'
end

prompt 'Goodbye.'
