def compute
  block_given? ? yield : "Does not compute"
end

p compute { 5 + 3 }# == 8
p compute { 'a' + 'b' }# == 'ab'
p compute# == 'Does not compute.'

def compute2(x)
  block_given? ? yield(x) : "Does not compute"
end

p compute2(2) {|x| x + 5} #== 7
p compute2('a') {|x| x + 'b'}#== 'ab'
p compute2('hello') #"Does not compute"
