
let n1 = 10;
let n2 = 15;
let n3 = 5;
let n4 = 20;

// Check if all numbers are divisible by 5
const allDivBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`Are all numbers divisible by 5? ${allDivBy5}`);

// Check if the first number is larger than the last
const firstLargerThanLast = n1 > n4;
console.log(`Is the first number larger than the last? ${firstLargerThanLast}`);

// Perform arithmetic operations
const result = ((n2 - n1) * n3) % n4;
console.log(`Result of arithmetic operations: ${result}`);

// Change the way isOver25 is calculated
const isUnder25 = (n1 <= 25) && (n2 <= 25) && (n3 <= 25) && (n4 <= 25);
console.log(`Are all numbers under or equal to 25? ${isUnder25}`);


// Const for the road trip
const totalDistance = 1500;
const fuelEfficiency = {
  55: 30,
  60: 28,
  75: 23,
};
const fuelBudget = 175;
const fuelCostPerGallon = 3;

// Function to calculate fuel needed
function calculateFuel(speed) {
  const efficiency = fuelEfficiency[speed];
  return totalDistance / efficiency;
}

// Function to check if budget is enough
function isBudgetEnough(speed) {
  const fuelNeeded = calculateFuel(speed);
  const fuelExpense = fuelNeeded * fuelCostPerGallon;
  return fuelExpense <= fuelBudget;
}

// Function to calculate trip duration
function calculateTripDuration(speed) {
  return totalDistance / speed;
}

//Results for different speeds
const speeds = [55, 60, 75];
speeds.forEach(speed => {
  console.log(`At ${speed} mph:`);
  console.log(`- Gallons of fuel needed: ${calculateFuel(speed)}`);
  console.log(`- Is budget enough? ${isBudgetEnough(speed)}`);
  console.log(`- Trip duration: ${calculateTripDuration(speed)} hours\n`);
);
