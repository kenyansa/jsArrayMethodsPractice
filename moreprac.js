// Working with Objects
const address = ["11 Broadway", "2nd Floor", "New York", "NY", "10004"];
address[1] = "3rd Floor";

console.log(address);

// Objects with keys
const meals = {
  breakfast: "Avocado toast",
  lunch: "tea and bread",
  dinner: "Ngwaci",
};

console.log(meals.breakfast);
console.log(meals.dinner);

// demonstrating uniqueness of keys:
const chakula = {
  breakfast: "Avocado toast",
  breakfast: "Oatmeal",
  breakfast: "Scrambled eggs",
};
console.log(chakula);
// accessing values insides objects' keys
const food = {
  chamcha: "chai",
  lanchi: {
      heavy:"Oatmeal",
      light: "uji",
      medium: "mandazi", 
  },
  chajio: "Scrambled eggs",
};
console.log(food.lanchi.light);
console.log(food.car); //shows undefined return value

console.log(food["lanchi"]); //=>{ heavy: 'Oatmeal', light: 'uji', medium: 'mandazi' }
console.log(food["lanchi"]["medium"]); //=>mandazi