def url?(str)
  regex = /\Ahttps?:\/\/\S+\.com\z/
  !!str.match(regex)
end

p url?('http://launchschool.com')   # -> true
p url?('https://example.com')       # -> true
p url?('https://example.com hello') # -> false
p url?('   https://example.com')    # -> false
