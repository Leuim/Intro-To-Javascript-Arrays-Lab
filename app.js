// Exercise 1
const foods = [];
console.log("Exercise 1 result:", foods);

// Exercise 2
foods.splice(0, 0, "pizza", "cheeseburger");
console.log("Exercise 2 result:", foods);

// Exercise 3
foods.unshift("Taco");
console.log("Exercise 3 result:", foods);

// Exercise 4
favFood = foods[1];
console.log("Exercise 4 result:", favFood);

// Exercise 5
foods.splice(2, 0, "tofu");
console.log("Exercise 5 result:", foods);

// Exercise 6
foods.splice(1, 1, "sushi", "cupcake");
console.log("Exercise 6 result:", foods);

// Exercise 7
let yummy = foods.slice(1, 3);
console.log("Exercise 7 result:", yummy);

// Exercise 8
let soyIdx = foods.indexOf("tofu");
console.log("Exercise 8 result:", soyIdx);

// Exercise 9
let allFoods = foods.join(" ->");
console.log("Exercise 9 result:", allFoods);

// Exercise 10
let hasSoup = foods.includes("soup");
console.log("Exercise 10 result:", hasSoup);

// Exercise 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
nums.forEach((num, i) => {
  if (num % 2 !== 0) {
    odds.push(num);
  }
});
 console.log('Exercise 11 result:', odds)

const fizz = [];
const buzz = [];
const fizzbuzz = [];
nums.forEach((num, i) => {
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);
  }
  if (num % 3 === 0) {
    fizz.push(num);
  } else if (num % 5 === 0) {
    buzz.push(num);
  }
});
console.log('Exercise 12 result:')
console.log(' fizz:',fizz);
console.log(' buzz:',buzz);
console.log(' fizzbuzz', fizzbuzz);

// Exercise 13
const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
]
const numlist = numArrays.at(-1)

console.log('Exercise 13 result:', numlist)

// Exercise 14
let num = numArrays[2][1]
console.log('Exercise 14 result:', num)

// Exercise 15
let total = 0
numArrays.forEach((array, i)=>{
    array.forEach((num, i)=>{
        total = num + total
    })
})

console.log('Exercise 15 result:', total)