// Creating a var that prompts the user for his name
let nameInput = window.prompt("What is your name?");

// Creating a var that prompts the user for a duration in minutes
let userInput = window.prompt("Input the value of minutes to be converted");

// The line of code below writes the name and input duration to the document
document.write(
  "Hello " +
    nameInput +
    ", Your input was " +
    userInput +
    " minutes" +
    "<br>" +
    "<br>" +
    "</br>"
);

// Creating the time converter function
function timeConverter(amountOfMinutes) {
  // Creating a variable that takes the amount of minutes divide by 60 and rounds down the result by using Math.floor
  const hours = Math.floor(amountOfMinutes / 60);
  // Creating a variable that represents the amount of minutes remainder's
  const minutes = amountOfMinutes % 60;
  // This codeline its return the hours and minutes already formatted
  return `${hours} hours and ${doubleDigitsConverter(minutes)} minutes`;
}

// Creating the doubleDigitsConverter
function doubleDigitsConverter(number) {
  // toString is a built in function to convert the value to a string
  // padStart is a method that fills the original string with a determined character
  // the first parameter's value is the length and the second is a character to be added
  return number.toString().padStart(2, "0");
}

document.write("Output: " + timeConverter(userInput));
