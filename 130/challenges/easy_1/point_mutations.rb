class DNA
  def initialize(str)
    @str = str
  end

  def hamming_distance(other_str)
    str_a, str_b = equalize_length(other_str)
    ctr = 0
    str_a.chars.each_with_index do |x, idx|
      ctr += 1 if x != str_b[idx] 
    end
    ctr
  end

  def equalize_length(other_str)
    min = [@str.size, other_str.size].min
    [@str[0, min], other_str[0, min]]
  end
end

