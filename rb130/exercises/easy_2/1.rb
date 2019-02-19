def step(first, last, step_val)
  while first <= last
    yield(first)
    first += step_val
  end
  nil
end

step(1, 10, 3) { |value| puts "value = #{value}" }
