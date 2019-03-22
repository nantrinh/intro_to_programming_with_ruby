def one?(collection)
  ctr = 0
  collection.each do |x|
    ctr += 1 if yield(x)
    return false if ctr > 1
  end
  ctr == 1
end

p (one?([1, 3, 5, 6]) { |value| value.even? }    == true  )
p (one?([1, 3, 5, 7]) { |value| value.odd? }     == false )
p (one?([2, 4, 6, 8]) { |value| value.even? }    == false )
p (one?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true  )
p (one?([1, 3, 5, 7]) { |value| true }           == false )
p (one?([1, 3, 5, 7]) { |value| false }          == false )
p (one?([]) { |value| true }                     == false )
