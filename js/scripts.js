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
//utilities

function reverseString(string){
  let strArray = string.split(" ");
  let output = "";
  for (let i = strArray.length-1; i>=0; i--){
    output = output + " " + strArray[i];
  }
  return output;
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
  if ($("#reverse").is(':checked')){
    if (pathfinder(number) > 3){
      for (let i = number; i>0;i--){
        output = output + " " + returnFormattedValues(pathfinder(i));
      }
    }else{
      output = returnFormattedValues(number);
    }
  }else{
    if (pathfinder(number) > 3){
    for (let i = 1; i<=number;i++){
      output = output + " " + returnFormattedValues(pathfinder(i));
    }
  }else{
    output = returnFormattedValues(number);
  }
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