function buyFruit(groceryList) {
  var fruit;
  var quantity;
  return groceryList.map(function (listItem){
    fruit = listItem[0];
    quantity = listItem[1];
    return new Array(quantity).fill(fruit);
  }).flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
