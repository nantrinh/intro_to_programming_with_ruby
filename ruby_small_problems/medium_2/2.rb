# case insensitive
# array of arrays : the word cannot use two objects from the same subarray
# the word cannot use any subarray twice
# for example, 
# 'BO' is not allowed
# 'BB' is not allowed
# 'BG' is allowed

# initialize array of blocks (CONSTANT)
BLOCKS = ['BO', 'GT', 'VI',
          'XK', 'RE', 'LY',
          'DQ', 'FS', 'ZM',
          'CP', 'JW', 'NA',
          'HU']

def block_word?(word)
  # upcase the word
  # go through each block, does count of letters from this block 
  # in this word exceed 1?
  BLOCKS.each do |block|
    return false if word.upcase.count(block) > 1
  end
  true
end

puts block_word?('BO') == false
puts block_word?('bo') == false
puts block_word?('BB') == false
puts block_word?('BG') == true
puts block_word?('BATCH') == true
puts block_word?('BUTCH') == false
puts block_word?('jest') == true
