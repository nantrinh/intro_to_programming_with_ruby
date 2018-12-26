# takes a string of numeric chars including an optional plus or minus sign
# returns an integer
DIGITS = {
  '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
  '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9
}

def string_to_integer(str)
  digits = str.chars.map{ |x| DIGITS[x]  }
  value = 0
  digits.each { |x| value = (10 * value) + digit }
  value
end

# jaron truman's is sleek
def string_to_signed_integer(str)
  unsigned = str.start_with?('+', '-') ? str[1..-1] : str
  number = string_to_integer(unsigned)
  str[0] == '-' ? -number : number
end
