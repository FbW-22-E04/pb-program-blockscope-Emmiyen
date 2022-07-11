let determiner = 86;
let x;

if (determiner < 0) {
  x = "Less than 0";
  console.log(x);
} else if (determiner >= 0) {
  x = "Greater or equal to 0";
  console.log(x);
}

let updater = "";
if (determiner >= 0) {
  updater = "greater than or equal to 0";
  let message = "positiv integer";
  console.log(message);
} else {
  updater = "less than 0";
}

console.log(updater);


//ternary is a shorter way but i prefer if/else its better to understand
