function pathfinder(userInput) {
  let functionInput = userInput.toString();
  if (functionInput.includes(3)) {
    return 3;
  }else if (functionInput.includes(2)) {
    return 2;
  }else if (functionInput.includes(1)) {
    return 1;
  }else{
    return userInput;
  }
}