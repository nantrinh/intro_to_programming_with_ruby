def select_fruit(produce)
  produce.select { |k,v| v == 'Fruit' }
end

produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'broccoli' => 'Vegetable'
}

puts select_fruit(produce).inspect
puts produce.inspect
