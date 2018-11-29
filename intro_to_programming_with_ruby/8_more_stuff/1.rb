words = ['laboratory', 'experiment', 'Pans Labyrinth',
         'elaborate', 'polar bear']

def check(words)
  words.each do |word|
     if /lab/ =~ word
       puts "lab is in #{word}"
     else
       puts "lab is not in #{word}"
     end
  end
end

check(words)
