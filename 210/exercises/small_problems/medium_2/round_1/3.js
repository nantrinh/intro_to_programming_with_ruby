function isValidTriangle(angles) {
  if (
    angles.some(angle => typeof angle !== 'number' || angle <= 0)
    || angles.reduce((a, b) => a + b) !== 180
  ) {
    return false; 
  }
  return true;
}

function triangle(angle1, angle2, angle3) {
  var angles = [angle1, angle2, angle3];
  if (!isValidTriangle(angles)) {
    return 'invalid'; 
  }

  if (angles.every(angle => angle < 90)){
    return 'acute'; 
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"

// 'invalid'
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));
console.log(triangle(50));
console.log(triangle([120, 50, 10]));
console.log(triangle('120, 50, 10'));
