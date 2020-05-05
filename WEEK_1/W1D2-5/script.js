// Bezoeker 1
const age_1 = 34,
    name_1 = 'Bram',
    isFemale_1 = false,
    driverStatus_1 = 'bob',
    orderAmount_1 = 25;

if (age_1 >= 18) {
    console.log(name_1 + ' is 18 jaar of ouder, en mag naar binnen');
} else {
    console.log(name_1 + ' is jonger dan 18 jaar en mag daarom niet naar binnen');
}

if (age_1 >= 18 && age_1 <= 25) {
    console.log(name_1 + ' krijgt 50% korting!');
} else {
    console.log(name_1 + ' krijgt geen 50% korting!');
}

if (name_1 === 'Bram' || name_1 === 'Sarah') {
    console.log(name_1 + ' heeft de naam ' + name_1 + ' en krijgt daarom een heerlijk gratis biertje');
} else {
    console.log(name_1 + ' heeft geen recht op een gratis biertje');
}

if (isFemale_1) {
    console.log(name_1 + ' is een vrouw en mag een ticket bestellen voor de Ladys Night');
} else {
    console.log(name_1 + ' is geen vrouw en mag geen ticket bestellen voor de Ladys Night');
}

if (orderAmount_1 >= 25) {
    console.log(name_1 + ' heeft een bestelling gedaan van €25 of meer, en krijg daarom een gratis portie Vega-bitterballen');
} else if (orderAmount_1 >= 50) {
    console.log(name_1 + ' heeft een bestelling gedaan van €50 of meer, en krijg daarom een gratis portie Nachos');
} else if (orderAmount_1 >= 100) {
    console.log(name_1 + ' heeft een bestelling gedaan van €100 of meer, en krijg daarom een gratis fles Champagne');
} else {
    console.log(name_1 + ' heeft een bestelling gedaan met een te laag bedrag, en krijg daarom geen cadeau');
}

if (driverStatus_1 === 'bob') {
    console.log(name_1 + ' is vandaag de BOB en mag daarom de auto besturen');
} else {
    console.log(name_1 + ' is vandaag geen BOB en mag daarom niet de auto besturen');
}

const age_2 = 16,
    name_2 = 'Annie',
    isFemale_2 = true,
    driverStatus_2 = 'Annie',
    orderAmount_2 = 0;

if (age_2 >= 18) {
    console.log(name_2 + ' is 18 jaar of ouder, en mag naar binnen');
} else {
    console.log(name_2 + ' is jonger dan 18 jaar en mag daarom niet naar binnen');
}

if (age_2 >= 18 && age_2 <= 25) {
    console.log(name_2 + ' krijgt 50% korting!');
} else {
    console.log(name_2 + ' krijgt geen 50% korting!');
}

if (name_2 === 'Bram' || name_2 === 'Sarah') {
    console.log(name_2 + ' heeft de naam ' + name_2 + ' en krijgt daarom een heerlijk gratis biertje');
} else {
    console.log(name_2 + ' heeft geen recht op een gratis biertje');
}

if (isFemale_2) {
    console.log(name_2 + ' is een vrouw en mag een ticket bestellen voor de Ladys Night');
} else {
    console.log(name_2 + ' is geen vrouw en mag geen ticket bestellen voor de Ladys Night');
}

if (orderAmount_2 >= 25) {
    console.log(name_2 + ' heeft een bestelling gedaan van €25 of meer, en krijg daarom een gratis portie Vega-bitterballen');
} else if (orderAmount_2 >= 50) {
    console.log(name_2 + ' heeft een bestelling gedaan van €50 of meer, en krijg daarom een gratis portie Nachos');
} else if (orderAmount_2 >= 100) {
    console.log(name_2 + ' heeft een bestelling gedaan van €100 of meer, en krijg daarom een gratis fles Champagne');
} else {
    console.log(name_2 + ' heeft een bestelling gedaan met een te laag bedrag, en krijg daarom geen cadeau');
}

if (driverStatus_2 === 'bob') {
    console.log(name_2 + ' is vandaag de BOB en mag daarom de auto besturen');
} else {
    console.log(name_2 + ' is vandaag geen BOB en mag daarom niet de auto besturen');
}