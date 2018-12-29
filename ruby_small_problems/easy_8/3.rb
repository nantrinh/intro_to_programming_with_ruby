def substrings_at_start(str)
  substr = []
  (1..str.size).each do |len|
    substr << str.slice(0, len)
  end
  substr
end

p substrings_at_start('abc')# == ['a', 'ab', 'abc']
p substrings_at_start('a')# == ['a']
p substrings_at_start('xyzzy')# == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
