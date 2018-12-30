def diamond(n)
  # print new line
  puts ''
  # initialize line array (false for space, true for asterisk)
  # all to false (all spaces)
  line = [false] * n
  # put asterisk in middle of the array
  line[n/2] = true
  # print that line
  puts fill_in_stars(line)
  # example n=3
  #
  # GROWING THE TRIANGLE
  # until all elements are true do
  until line.all? do
  # identify index of first true 
    idx1 = line.find_index(true)
  # set the element right before it to true
    line[idx1 - 1] = true 
  # identify index of last true
    idx2 = (n - 1) - idx1
  # set the element right after it to true
    line[idx2 + 1] = true
  # puts the line
    puts fill_in_stars(line)
  end
  #
  # SHRINKING THE TRIANGLE
  until line.count(true) == 1 do
    # identify index of first true 
    idx1 = line.find_index(true)
    # replace that with false 
    line[idx1] = false
    # identify index of last true 
    idx2 = (n-1) - idx1
    # replace that with false 
    line[idx2] = false
    # map to asterisk and spaces and print out result
    puts fill_in_stars(line)
  end
end

def fill_in_stars(line)
  # replace true with '*', false with ' '
  line.map { |x| x ? '*' : ' '}.join
end

diamond(3)
diamond(5)
