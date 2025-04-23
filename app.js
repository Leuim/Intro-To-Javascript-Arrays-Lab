// Exercise 1
const foods = []

console.log('Exercise 1 result:' , foods)

// Exercise 2
foods.splice(0, 0, 'pizza', 'cheeseburger')
console.log('Exercise 2 result:', foods)

// Exercise 3 
foods.unshift('Taco')
console.log('Exercise 3 result:', foods)

// Exercise 4
favFood = foods[1]
console.log('Exercise 4 result:', favFood)

// Exercise 5
foods.splice(2,0,'tofu')
console.log('Exercise 5 result:', foods)

// Exercise 6
foods.splice(1, 1, 'sushi', 'cupcake')
console.log('Exercise 6 result:', foods)

// Exercise 7 
let yummy =foods.slice(1, 3)
console.log('Exercise 7 result:', yummy)

// Exercise 8
let soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx)

// Exercise 9
let allFoods =foods.join(' ->')
console.log('Exercise 9 result:', allFoods)

// Exercise 10
let hasSoup = foods.includes('soup')
console.log('Exercise 10 result:', hasSoup)