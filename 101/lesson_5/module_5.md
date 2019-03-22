# Q1
arr.sort { |a, b| b.to_i <=> a.to_i }

# Q2
books.sort_by { |x| x[:published] }

# Q3
arr1[2][1][3]
arr2[1][:third][0]
arr3[2][:third][0][0]
hsh1['b'][1]
hsh2[:third].keys[0]

# Q4
arr1[1][1] = 4
arr2[2] = 4
hsh1[:first][2][0] = 4
hsh2[['a']][:a][2] = 4

# Q5
munsters.values.select { |x| x['gender'] == 'male' }.sum{ |x| x['age'] }
OR
sum_ages = 0
munsters.each_value { |x| sum_ages += x['age'] if x['gender'] == 'male' }

# Q6
munsters.each do |name, details|
  puts "#{name} is a #{details['age']}-year-old #{details['gender']}."
end

# Q7
arr = [4, [3,8]]
a = 2
b = [3, 8]

# Q8
hsh.each_value do |v| 
  v.each do |word|
    puts word.chars.select{|c| 'aeiou'.include?(c.downcase)}
  end
end

# Q9
arr.map do |subarr|
  subarr.sort { |a, b| b <=> a }
end

# Q10
arr.map do |hash|
  new_hash = {}
  hash.each { |k, v| new_hash[k] = v + 1 }
  new_hash
end

# Q11
arr.map do |subarr|
  subarr.select { |x| x % 3 == 0 }
end

# Q12
arr.each_with_object({}) do |subarr, hash|
  hash[subarr[0]] = subarr[1]
end

# Q13
arr.sort_by{ |subarr| subarr.select { |x| x.odd?  } }

# Q14
```
arr = []
hsh.each_value do |details|
  if details[:type] == 'fruit'
    arr << details[:colors].map{ |color| color.capitalize }
  else
    arr << details[:size].upcase
  end
end
```

# Q15
arr.select do |hsh|
  hsh.all? { |k, v| v.all? {|x| x.even?} }
end

# Q16
```
def uuid
  chars = ((0..9).to_a << ('a'..'z').to_a).flatten
  uuid = "#{chars.sample(8).join}-"\
         "#{chars.sample(4).join}-"\
         "#{chars.sample(4).join}-"\
         "#{chars.sample(4).join}-"\
         "#{chars.sample(12).join}"
end
```
