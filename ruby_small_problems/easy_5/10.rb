# takes a short line of text
# puts it in a box three rows long, 
# whitespace is as wide as length of string + 2

def box_width(len, char)
  char * (len + 2)
end

def print_in_box(str)
  puts "+#{box_width(str.size, '-')}+"
  puts "|#{box_width(str.size, ' ')}|"
  puts "| #{str} |"
  puts "|#{box_width(str.size, ' ')}|"
  puts "+#{box_width(str.size, '-')}+"
end

print_in_box('To boldly go where no one has gone before.')
print_in_box('')
