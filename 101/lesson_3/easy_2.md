- good
ages.include?('Spot')
ages.key?('Spot')
ages.member?('Spot')
- not so good
ages.keys.include?('Spot')
!!ages.assoc('Spot')

munsters_description.swapcase!
munsters_description.capitalize!
munsters_description.downcase!
munsters_description.upcase!

ages.merge!(additional_ages)

advice.match("Dino")

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

`flintstones << 'Dino'`
flintstones.append('Dino')
flintstones.push('Dino')
flintstones.concat('Dino')

flintstones.append('Dino', 'Hoppy')
flintstones.push('Dino', 'Hoppy')
flintstones.concat(['Dino', 'Hoppy'])

advice.slice!('Few things in life are as important as ')
advice.slice!(0...advice.index('house'))

statement.count('t')

title.center(40)

