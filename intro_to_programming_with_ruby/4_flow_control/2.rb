def caps_it(string)
  (string.length > 10) ? string.upcase : string
end

puts caps_it("I am longer than 10")
puts caps_it("I'm not")
