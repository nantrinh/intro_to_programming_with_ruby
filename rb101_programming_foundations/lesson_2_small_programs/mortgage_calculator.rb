require 'pry'

def calculate_mortgage(input)
  amount = input[:amount]
  apr = input[:apr] / 100.0
  duration_years = input[:duration_years]
  duration_months = duration_years * 12
  monthly_interest_rate = apr / 12.0
  amount * (monthly_interest_rate / (1 - \
    (1 + monthly_interest_rate)**-duration_months))
end

def test_calculator
  # Tests the calculate_mortgage function.
  ex1 = { amount: 100, apr: 5, duration_years: 1, answer: 8.56 }
  ex2 = { amount: 1007.86, apr: 2.5, duration_years: 5, answer: 17.89 }
  ex3 = { amount: 500, apr: 1, duration_years: 2, answer: 21.05 }

  puts calculate_mortgage(ex1).round(2) == ex1[:answer]
  puts calculate_mortgage(ex2).round(2) == ex2[:answer]
  puts calculate_mortgage(ex3).round(2) == ex3[:answer]
end

def valid?(number)
  number.to_f > 0
end

details = {}

puts '=> Welcome to the Mortgage Calculator!'
loop do
  loop do
    puts '=> Please enter the loan amount. (Has to be positive number)'
    amount = gets.chomp
    if valid?(amount)
      details[:amount] = amount.to_f
      break
    else
      puts '=> Please make sure your loan amount is valid.'
    end
  end

  loop do
    puts '=> Please enter the APR. (Has to be positive number)'
    apr = gets.chomp
    if valid?(apr)
      details[:apr] = apr.to_f
      break
    else
      puts '=> Please make sure your APR is valid.'
    end
  end

  loop do
    puts '=> Please enter the duration in years. (Has to be positive number)'
    duration_years = gets.chomp
    if valid?(duration_years)
      details[:duration_years] = duration_years.to_f
      break
    else
      puts '=> Please make sure your duration (in years) is valid.'
    end
  end

  puts "=> Your monthly payment will be #{calculate_mortgage(details)}."

  puts '=> Another calculation? Enter Y to do another calculation.'
  continue = gets.chomp.upcase
  break if continue != 'Y'
end
