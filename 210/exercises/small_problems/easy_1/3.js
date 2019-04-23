const SQUARE_FEET_PER_METER = 10.7639;
let length = Number(prompt('Enter the length of the room in meters: '));
let width = Number(prompt('Enter the width of the room in meters: '));
let areaInSquareMeters = length * width;
let areaInSquareFeet = areaInSquareMeters * SQUARE_FEET_PER_METER; 
console.log(`The area of the room is ${areaInSquareMeters} square meters (${areaInSquareFeet.toFixed(2)} square feet).`);
