# prompt for a bill amount and tip rate
# compute the tip
# display the tip and total bill

print "What is the bill? "
bill = gets.chomp.to_f
print "What is the tip percentage? "
pct = gets.chomp.to_f
tip = (pct/100 * bill).round(2)
puts "The tip is $#{tip}"
puts "The total is $#{tip + bill}" 
