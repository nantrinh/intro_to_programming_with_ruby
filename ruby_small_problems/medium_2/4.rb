# +1 if (
# -1 if )
# at the end if you have 0 then return true
# if at any point you have -1 then return false

def balanced?(str)
  count = 0
  str.chars.each do |c|
    count += 1 if c == '('
    count -= 1 if c == ')'
    return false if count == -1
  end
  count == 0
end

puts balanced?('What (is) this?') == true
puts balanced?('What is) this?') == false
puts balanced?('What (is this?') == false
puts balanced?('((What) (is this))?') == true
puts balanced?('((What)) (is this))?') == false
puts balanced?('Hey!') == true
puts balanced?(')Hey!(') == false
puts balanced?('What ((is))) up(') == false
