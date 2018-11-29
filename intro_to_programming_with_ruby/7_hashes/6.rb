words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

def anagrams(words)
  h = {}
  words.each do |word|
    sorted = word.split('').sort.join
    if h.has_key? sorted
      h[sorted] << word
    else
      h[sorted] = [word]
    end
  end
  h.values.each { |x| p x }
end

anagrams(words)
