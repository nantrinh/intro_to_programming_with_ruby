require 'pry'
class RunLengthEncoding
  def self.encode(input)
    idx = 0
    res = ''
    letter = input[0]
    while idx < input.size
      char_array = input.chars[idx..-1]
      num = char_array.find_index {|x| x != letter} || char_array.size 
      num == 1 ? res << letter : res << "#{num}#{letter}"  
      idx += num
      letter = input[idx]
    end
    res
  end

  def self.decode(input)
    idx = 0
    res = ''
    # some loop
    while idx < input.size
      char_array = input.chars[idx..-1]
      next_letter_idx = char_array.find_index {|x| x =~ /[^0-9]/}
      num = char_array[0..next_letter_idx].join.to_i
      letter = char_array[next_letter_idx]
      res << letter * num
      idx += next_letter_idx
      idx += 1 unless num == 1
#       p idx
#       p res
#       p input.chars[idx..-1]
#       binding.pry
    end
    res
  end
end


# 'AABBBCCCC'
# input = '2A3B4C'
# p RunLengthEncoding.decode(input)
