function isEven(num) {
  //test for negative num, convert if needed
  if (num < 0) {
    num = Math.abs(num);
  }
  //outputs a boolean value
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}
