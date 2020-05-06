let colors = ['yellow', 'blue', 'red', 'orange'];

// While Loop - Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++
}
// For Loop - Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
// forEach() - Gebruik de forEach array method, om alle items in je array te loggen naar de console. 
colors.forEach(element => console.log(element));

// Q: Hoeveel regels neemt mijn for loop in beslag? 
// A: 3

// Q: Hoeveel regels neemt mijn forEach method in beslag? 
// A: 1

// Q: Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
// Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? 
// A: Het is een veel nettere snellere methode,

// Q: Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken hoe je die 45 properties kunt `console.log`-en zonder elke property handmatig te `console.log` en. 
// Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?
//A: JA

const catBreeds = {
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15"
};

for (const property in catBreeds) {
    console.log(`${property}: ${catBreeds[property]}`);
}