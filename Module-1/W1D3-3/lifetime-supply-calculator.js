// The Lifetime Supply Calculator

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.+
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calcSupply = (maxAge, amountPerDay) => {
    console.log('You will need ' + Math.round(((maxAge * 365) * amountPerDay)) + ' of your favorite snack to last you until the ripe old age of ' + age)
}

calcSupply(80, 3);
calcSupply(99, 2.5);
calcSupply(65, 6.2);