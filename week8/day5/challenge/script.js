function allTruthy(...args) {
    // Check if every argument is truthy
    return args.every(Boolean);
  }
  
  // Examples
  console.log(allTruthy(true, true, true)); // true
  console.log(allTruthy(true, false, true)); // false
  console.log(allTruthy(5, 4, 3, 2, 1, 0)); // false
  