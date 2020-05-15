// The Fortune Teller

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const tellFortune = (numberOfChildren, partnersName, geoLocation, jobTitle) => {
    console.log('You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partnersName + ' with ' + numberOfChildren + ' kids.');
}

tellFortune(4, 'Jane', 'Londen', 'Doctor');
tellFortune(16, 'John', 'Amsterdam', 'Front End Developer');
tellFortune(2, 'Freddie', 'Londen', 'Manager');