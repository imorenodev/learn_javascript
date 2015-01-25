switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly."); //no break statement will print "Dress lightly" AND "Go outside" if user enters "sunny".
  case "cloudy": 
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

// for (var number = 0; number <= 12; number = number +2)
//   console.log(number);

// for (var newNumber = 1; newNumber <= 100; newNumber++){
//   if (newNumber % 7 ==0)
//     console.log(newNumber);
// }

// var result = 1;
// var counter = 0;

// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);

// var number = 0;
// while (number < 12) {
//   console.log(number);
//   number = number + 2;
// }

// alert("Hello World");

// var num = Number(prompt("Pick a number", "0"));

// if (num < 10)
//   alert("Small");
// else if (num < 100)
//   alert("Medium");
// else
//   alert("Large");