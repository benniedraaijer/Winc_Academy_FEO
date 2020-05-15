
// A: zet de functie om naar een arrow functie
// 
// const ikRockArrowFunctions = function () {
//     console.log("Joe, ik rock de arrow functions!");
// };
// 
// ikRockArrowFunctions();

const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions();

//------------------------------------------------------------------------------------//

// B: Opdracht: schrijf de onderstaande functie om naar een arrow functie op 1 regel.
// 
// const fivePlusSeven = function () {
//     return 5 + 7
//   };
  
//   fivePlusSeven();


const fivePlusSeven = () => 5 + 7;

fivePlusSeven();

//------------------------------------------------------------------------------------//

// C: Er zijn er nog meer eigenschappen van een arrow function die je weg kunt laten. Net als gewone functies, hóéft een arrow function geen naam te hebben (anonymous function)

// Opdracht: schrijf een zo kort mogelijke arrow function, zonder naam  (je hoeft het dus ook niet in een const te stoppen), die 1 + 2 bij elkaar optelt.  

() => 1 + 2 