if (condition1) {
  // ...(1)
  if (condition2) {
    // ...(1 && 2) one
  } else {
    // ...(1 && !2) two
  }
} else {
  // ...(!1) three
  if (condition4) {
    // ...(!1 && 4) four
    if (condition5) {
    // ...(!1 && 4 && 5) five 
    }
  }
}
