# takes an array of strings
# returns an array of the same string values,
# except with the vowels removed
#
# for each str in array,
# remove vowels (delete)
# put in new array
# return new array

VOWELS = 'aeiouAEIOU'

def remove_vowels(arr)
  arr.map{ |x| x.delete(VOWELS) }
end

p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz))# == %w(bcdfghjklmnpqrstvwxyz)
p remove_vowels(%w(green YELLOW black white))# == %w(grn YLLW blck wht)
p remove_vowels(%w(ABC AEIOU XYZ))# == ['BC', '', 'XYZ']
