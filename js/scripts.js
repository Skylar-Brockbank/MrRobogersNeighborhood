//business logic
function pathfinder(userInput) {
  let functionInput = userInput.toString();
  for (let i = 3; i>0; i--){
  if (functionInput.includes(i)) {
    return i;
  }
}
return userInput;
}

//user interface logic

function returnFormattedValues(number) {
  let comparison = ["Beep!","Boop!","Won't you be my neighbor?"]
  if((number-1)<comparison.length){
    $("#outputs").prepend("<li>" + comparison[number-1] + "</li>");
  }
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let input = pathfinder($("#userInputBox").val())
    returnFormattedValues(input);
    this.reset();
  });
});