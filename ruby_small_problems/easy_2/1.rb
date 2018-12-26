# generate random number between 20 and 200
# print string with number interpolated

def print_age(name='Teddy')
  puts "#{name} is #{[*20..200].sample} years old!"
  puts "#{name} is #{rand(20..200)} years old!"
end

print_age
print_age('Bertha')

