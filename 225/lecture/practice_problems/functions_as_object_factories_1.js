function makeCar(accelerateRate, brakeRate) {
  return {
    speed: 0,
    accelerateRate: accelerateRate,
    brakeRate: brakeRate,
    accelerate: function () {
      this.speed += this.accelerateRate; 
    },
    brake: function () {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0; 
      }
    },
  }
}

// var sedan = makeCar(8);
// sedan.accelerate();
// console.log(sedan.speed);
// // 8

// var coupe = makeCar(12);
// coupe.accelerate();
// console.log(coupe.speed);
// // 12
// 
// var hatchback = makeCar(9);
// hatchback.accelerate();
// console.log(hatchback.speed);
// // 9 

var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
// 8
sedan.brake();
console.log(sedan.speed);
// 2
sedan.brake();
console.log(sedan.speed);
// 0
