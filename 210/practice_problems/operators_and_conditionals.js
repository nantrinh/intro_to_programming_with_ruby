// 1 - 6
//
// let apples = 3;
// let bananas = "3";
// if (apples === bananas) {
//   console.log("They are strictly equal");
// }
// else {
//   if (apples == bananas){
//     console.log("They are the same value but of different types");
//   }
//   else {
//     console.log("They are not equal");
//   }
// }
// when you are comparing a string and a number using
// the non-strict equality operator, JavaScript converts the string
// value to a number and perfoms the comparison
// Here, 3 == 3, which evaluates to true

// if you use the strict equality operator, 3 === "3" evaluates to false,
// because this operator checks to see if both operands are of the same
// type and value. No conversion is perfomed.

// 7
// let apples = 3;
// let bananas = 3;
// areEqual = (apples === bananas);
// console.log(areEqual); // false 

// 8
// let apples = 3;
// let bananas = undefined;
// eitherOr = (apples || bananas);
// console.log(eitherOr); // 3, because 3 is truthy and || short-circuits 

// 9
// let apples = 3;
// let bananas = 1;
// eitherOr = (apples || bananas);
// console.log(eitherOr); // 3, because 3 is truthy and || short-circuits 
// eitherOr = (bananas || apples);
// console.log(eitherOr); // 1, because 1 is truthy and || short-circuits 

// 10
let lastName = "Trinh";
familyMessage = (lastName == "Trinh") ? "You're part of the family!" : "You're not family." 
console.log(familyMessage);
