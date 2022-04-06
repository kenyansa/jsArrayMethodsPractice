//try1
 function add() {
   const num1 = 5;
   const num2 = 3;

   // adding two numbers
   const sum = num1 + num2;

   console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
 }
 // call function
 add();
 //try2
// const englishMusicByCity = {
//   manchester: [
//     {
//       bandName: "The Smiths",
//       memberNames: ["Morrissey", "Johnny", "Andy", "Mike"],
//     },
//     {
//       bandName: "Joy Division",
//       memberNames: ["Peter", "Stephen", "Bernard", "Ian"],
//     },
//   ],
// };
//  console.log("englishMusicByCity");

// Working with Data Strucures 

//  const firstNumber = 32;
//  const secondNumber = 9;
//  const thirdNumber = 14;
//  const fourthNumber = 33;
//  const fifthNumber = 48;
//  const powerBall = 5;

//  function logWinningNumbers(first, second, third, fourth, fifth, power) {
//    console.log("Winning numbers:", first, second, third, fourth, fifth, power);
//  }

//  logWinningNumbers(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber,powerBall
//  );
// //  Array Lists

// const winningNumbers = [32, 9, 14, 33, 48, 5];
// winningNumbers[2];

// const string = "Hello";

// string.toUpperCase();

// Using push method
const superheroes = ["Catwoman", "She-Hulk", "Jessica Jones"];

superheroes.push("Wonder Woman");
console.log(superheroes);

// using unshift method
const cities = ["New York", "San Francisco"];
cities.unshift("Boston", "Chicago");
console.log(cities);

// Using spread operator (elipsis)
const coolCities = ["New York", "San Francisco", "Nairobi", "Mombasa", "Kisii"];
const copyOfCoolCities = [...coolCities];
console.log(copyOfCoolCities);
const newCities =["Pretoria", "Melboune", "Shanghai", ...copyOfCoolCities];
console.log(newCities);

// Pop () method
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.pop();
console.log(days);

// Shift() and pop() Method
const siku = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
siku.shift();
siku.pop();
console.log(siku);
// using slice () method without arguments
const primes = [2, 3, 5, 7];
primes.slice();
primes.push(11);
console.log(primes);

// using slice () with arguments
const tuko = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
tuko.slice(2);
console.log("answer is: "+ tuko);

// Using splice () method with 3 arguments
const cards = [
  "Ace of Spades",
  "Jack of Clubs",
  "Nine of Clubs",
  "Nine of Diamonds",
  "Three of Hearts",
];

cards.splice(2, 1, "Ace of Clubs");

console.log(cards);
// Splice method to remove second and third element in an array and replace it with more elements
const menu = [
  "Jalapeno Poppers",
  "Cheeseburger",
  "Fish and Chips",
  "French Fries",
  "Onion Rings",
];

menu.splice(1, 2, "Veggie Burger", "House Salad", "Teriyaki Tofu");

console.log(menu);
// Removed "Cheeseburger", & "Fish and Chips"

// Using bracket notation to replace Elements

const kadi = [
  "Spades",
  "Jack of Clubs",
  "Nine of Clubs",
  "Nine of Diamonds",
  "Three of Hearts",
];

kadi[2] = "Ace of Clubs";
console.log(kadi);