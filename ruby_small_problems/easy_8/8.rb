def double_consonants(str)
  consonants = ('a'..'z').to_a.reject{ |c| %w(a e i o u).include?(c) }
  str.chars.map{ |c| consonants.include?(c.downcase) ? c * 2 : c }.join
end

puts double_consonants('String')       # == "SSttrrinngg"
puts double_consonants("Hello-World!") # == "HHellllo-WWorrlldd!"
puts double_consonants("July 4th")     # == "JJullyy 4tthh"
puts double_consonants('')             # == ""
