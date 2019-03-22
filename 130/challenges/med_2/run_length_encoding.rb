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
      if char_array[0] =~ /[^0-9]/
        res << char_array[0] 
        idx += 1
      else
        next_letter_idx = char_array.find_index {|x| x =~ /[^0-9]/}
        num = char_array[0..next_letter_idx].join.to_i
        res << char_array[next_letter_idx] * num
        idx += next_letter_idx + 1
      end
    end
    res
  end
end


# 'AAZBBBCCCC'
# input = '2AZ3B4C'
# p RunLengthEncoding.decode(input)
