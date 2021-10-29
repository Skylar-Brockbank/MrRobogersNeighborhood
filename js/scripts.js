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

function returnFormattedValues(input) {
  let comparison = ["Beep!","Boop!","Won't you be my neighbor?"]
  if(parseInt(input-1) < comparison.length){
   return comparison[input-1];
  }else{
    return input;
  }
}

function lister(number) {
  let output ="";
  if (number > 3){
  for (let i = 1; i<=number;i++){
    console.log(i);
    console.log(returnFormattedValues(pathfinder(i)));
    output = output + " " + returnFormattedValues(pathfinder(i));
  }
}else{
  output = returnFormattedValues(number);
}
return output;
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let input = pathfinder($("#userInputBox").val())
    $("#outputs").prepend("<li class='output'>" + lister(input) + "</li>");
    this.reset();
  });
});