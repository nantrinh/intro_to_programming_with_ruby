def test(n)
  case n
  when 1 then true == true
  when 2 then true == false
  else false == false
  end
end

p test(1)
p test(2)
p test(3)
