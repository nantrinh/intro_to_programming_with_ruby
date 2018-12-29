# takes a string as an argument
# returns a string that contains the original value using a staggered
# capitalization scheme in which every other char is capitalized.
# remaining chars are lowercase
# chars that are not letters are not changed but counts as chars in the alternating
# scheme
#
# iterate through each character in string
# use if else statements, look at index
# join at the end and return

def switch(upcase)
  !upcase
end

def staggered_case(str)
  upcase = true
  new_str = ''
  str.chars.each_with_index do |c, idx|
    if c =~ /[a-zA-Z]/
      if upcase 
        new_str << c.upcase
        upcase = switch(upcase)
      else
        new_str << c.downcase
        upcase = switch(upcase)
      end
    else
      new_str << c
    end
  end
  new_str
end

puts staggered_case('I Love Launch School!')     #== 'I lOvE lAuNcH sChOoL!'
puts staggered_case('ALL CAPS')                  #== 'AlL cApS'
puts staggered_case('ignore 77 the 444 numbers') #== 'IgNoRe 77 ThE 444 nUmBeRs'
