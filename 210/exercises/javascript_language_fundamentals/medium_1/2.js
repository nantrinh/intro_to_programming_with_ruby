var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// It should increment i regardless of whether i is a multiple of 3 or not
// otherwise you enter an infinite loop, printing 0 forever 
