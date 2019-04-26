function incrementProperty(object, string) {
  if (Object.keys(object).includes(string)) {
    object[string] += 1; 
  } else {
    object[string] = 1; 
  }
  return object[string];
}

var wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
