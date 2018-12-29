def buy_fruit(arr)
  arr.each_with_object([]) do |subarr, newarr| 
    subarr[1].times{ newarr << subarr[0] }
  end
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) #==
#  ["apples", "apples", "apples", "orange", "bananas","bananas"]
