// The Puppy Age Calculator

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = (age, conversion) => {
    console.log('Your puppy is ' + (age * conversion) + ' years old in dog Years!')
}

calculateDogAge(5, 7);
calculateDogAge(3, 7);
calculateDogAge(0.5, 7);