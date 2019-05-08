function flipLights(lights, round) {
  return lights.map((light, index) => (index + 1) % round === 0 ? !light : light); 
}

function lightsOn(numberOfLights) {
  var lights = new Array(numberOfLights).fill(false);
  for (i = 1; i <= numberOfLights; i += 1) {
    lights = flipLights(lights, i); 
  }

  var indexesOn = [];
  lights.forEach(function (light, index) {
    if (light) {
      indexesOn.push(index + 1); 
    } 
  });
  return indexesOn;
}

console.log(lightsOn(1)); // [1]
console.log(lightsOn(2)); // [1] 
console.log(lightsOn(3)); // [1] 
console.log(lightsOn(3)); // [1] 
console.log(lightsOn(4)); // [1, 4]
console.log(lightsOn(5)); // [1, 4] // [t, f, f, t, f]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off);     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off); 1 and 5 are on
// Round 4: lights 2 and 3 are now off);     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off); 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
