def switches(n)
  # initialize lights
  lights = [false] * n
  # for each round (round number starts with 1!)
  1.upto(n).each do |round|
  #   if idx of light % round num == 0 (index starts with 1!)
    0.upto(lights.size - 1).each do |idx|
      if (idx + 1) % round == 0
  #     flip that switch
        lights[idx] = !lights[idx]
      end
    end
  end
  # return indexes of lights that are on
  result = []
  lights.each_with_index do |l, idx|
    result << idx+1 if l 
  end
  result
end

p switches(0) # => [false]
p switches(1) # => [true]
p switches(2) # => [true, false]
p switches(3) # => [true, false, false]
p switches(5) # => [true, false, false, true]
p switches(10) # => [true, false, false, true, false, false, false, false, true, false]

# Further Exploration
# Perfect squares have an odd number of factors. Numbers that are not
# perfect squares have an even number of factors.
