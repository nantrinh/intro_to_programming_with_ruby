def drop_while(arr)
  arr.each_with_index do |x, idx|
    return arr[idx..-1] unless yield(x)
  end
  []
end

p drop_while([1, 3, 5, 6]) { |value| value.odd? }  #== [6]
p drop_while([1, 3, 5, 6]) { |value| value.even? } #== [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| true }        #== []
p drop_while([1, 3, 5, 6]) { |value| false }       #== [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 }   #== [5, 6]
p drop_while([]) { |value| true }                  #== []


