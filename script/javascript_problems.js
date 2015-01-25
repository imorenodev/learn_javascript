console.log("\n" + "7-line Pound Sign Triangle" + "\n" + "\n");
/* 7-line Pound Sign Triangle */
var poundSign = "#";

for (var number = 0; number < 7; number++) {
  console.log(poundSign);
  poundSign = poundSign + "#";
  //console.log(number);
}

console.log("\n" + "FizzBuzz" + "\n" + "\n");
/* FizzBuzz */
for(number = 1; number <= 100; number++) {
  if (number % 15 == 0)
    console.log("FizzBuzz");
  else if (number % 3 == 0)
    console.log("Fizz");
  else if (number % 5 == 0)
    console.log("Buzz")
  else
    console.log(number);
}


console.log("\n" + "FizzBuzz Another Way" + "\n" + "\n");
/* FizzBuzz Another Way */
for (number = 1; number <= 100; number++) {
  var printOut = "";
  if (number % 3 === 0)
    printOut += "Fizz";
  if (number % 5 === 0)
    printOut += "Buzz";
  console.log(printOut || number);
}

console.log("\n" + "8x8 Chess Grid" + "\n" + "\n");
/* 8x8 Chess Grid */
var size = 15;
var grid = "";

for (count = 1; count <= size / 2; count++) {
  for (firstRow = 1; firstRow <= size / 2; firstRow++) {
    grid += " #";
  }
  grid += "\n";
  for (secondRow = 1; secondRow <= size / 2; secondRow++) {
    grid += "# ";
  }
  grid += "\n";
}
console.log(grid);