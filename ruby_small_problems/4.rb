YEAR = 2018
print 'What is your age? '
age = gets.chomp.to_i
print 'At what age would you like to retire? '
retire_age = gets.chomp.to_i
diff = retire_age - age
puts "It's #{YEAR}. You will retire in #{YEAR + diff}." 
puts "You only have #{diff} years to go!"
