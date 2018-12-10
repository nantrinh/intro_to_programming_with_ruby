# Q1
nil

# Q2
{a: 'hi there'}

# Q3
A uses assignment. Doesn't mess with variables.
B uses assignment. Doesn't mess with variables.
C one is two, two is three, three is one. String#gsub! modifies caller.

# Q4
```
def dot_separated_ip_address?(input_string)
  dot_separated_words = input_string.split(".")
  return false unless dot_separated_words.size == 4
  while dot_separated_words.size > 0
    word = dot_separated_words.pop
    return false unless is_an_ip_number?(word)
  end
  true
end
```
