require "pry"

def calculate_mortgage(input)
  amount = input[:amount]
  apr = input[:apr] / 100.0
  duration_years = input[:duration_years]
  duration_months = duration_years * 12
  monthly_interest_rate = apr / 12.0
  monthly_payment = amount * (monthly_interest_rate / (1 - (1 + monthly_interest_rate) ** (-duration_months)))
  # puts "Your monthly payment will be #{monthly_payment}."
end

ex1 = {amount: 100, apr: 5, duration_years: 1, answer: 8.56}
ex2 = {amount: 1007.86, apr: 2.5, duration_years: 5, answer: 1007.86}
ex3 = {amount: 500, apr: 1, duration_years: 2, answer: 21.05}

puts calculate_mortgage(ex1).round(2) == ex1[:answer] 
puts calculate_mortgage(ex2).round(2) == ex2[:answer]
puts calculate_mortgage(ex3).round(2) == ex3[:answer]
