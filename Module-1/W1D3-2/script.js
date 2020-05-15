// Deel A: Schrijf je eerste functie

// maakHollandsBroodjeKaas
// stap 1: 1 plakje brood.
// stap 2: 1 plakje kaas.
// stap 3: 1 plakje brood boven op.

//function Declaration
function maakBroodjeHollandseKaas() {
    console.log('Stap 1: 1 plakje brood Stap 2: 1 plakje kaas Stap 3: 1 plakje brood boven op.');
    
    console.log('Stap 1: 1 plakje brood.');
    console.log('Stap 2: 1 plakje kaas.');
    console.log('Stap 3: 1 plakje brood boven op.');
}

// const maakBroodjeHollandseKaas = () => {
//     console.log('1 plakje brood 1 plakje kaas 1 plakje brood boven op');
// }

maakBroodjeHollandseKaas();

// Deel B: Schrijf een functie met een argument
//function Declaration
function makeSandwich(topping){
    console.log('There you go, a sandwich with ' + topping);
}

// const makeSandwich = (topping) => {
//     console.log('There you go, a sandwich with ' + topping);
// }

//function call.
makeSandwich('Dutch Cheese');
makeSandwich('Beef');
makeSandwich('Cheese');