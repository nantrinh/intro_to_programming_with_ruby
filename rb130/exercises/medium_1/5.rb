items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

gather(items) do |*x,y|
  puts x.join(', ')
  puts y
end

gather(items) do |x ,*y ,z |
  puts x
  puts y.join(', ')
  puts z
end

gather(items) do |x ,*y |
  puts x
  puts y.join(', ')
end

gather(items) do |x ,y,z,a |
  puts  [x,y,z].join(", ") + " and #{a}"
end
