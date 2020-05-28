# Opdracht: Testen - Basic Jest Functies

Nu jullie de basis van een Jest Test hebben gezien wordt het tijd om zelf een paar tests te schrijven! 🚀

❗ **First things first:** maak je omgeving klaar om Jest te gebruiken.

Je gaat voor het eerst gebruik maken van Node Package Manager.
NPM hebben we op de eerste dag samen geïnstalleerd.  
Met Node Package Manager kun je vervolgens andere pakketten gaan installeren!

Bekijk de volgende module nog even aandachtig voordat je verder gaat.

[NPM - Wat is het? Hoe gebruik je het?](https://www.notion.so/NPM-Wat-is-het-Hoe-gebruik-je-het-a15cd7d158564c6abec382da405fc35f)

Klaar met lezen van de bovenstaande module?
Je weet wat **package.json** is?
Waarom je `npm init -y`  runt?
En waarom je `npm install` runt?
Echt?
Oke.
Dan mag je verder.
🙃

We gaan Jest gebruiken voor Unit testing.
Je raadt het waarschijnlijk al:

Jest is een npm package.

## Set-up

**❗ Volg exact de stappen die Brad ook maakt. Tip: doe mee met Brad 🎥❗**

Link naar de video met Brad:

[Testen met Jest - de basics](https://www.notion.so/Testen-met-Jest-de-basics-7508ee13d93641dcb70bfa94e397b956)

Link naar de uitgeschreven stappen om je omgeving klaar te maken voor Jest:

[Testen met Jest - De set-up](https://www.notion.so/Testen-met-Jest-De-set-up-09f43bae6d2346f793bfaeff24bcc8d4)

## Opdracht: Testen met Jest

Je gaat je eerste tests schrijven met Jest.
Wanneer je begint met testen kom je nieuwe termen tegen. Twee daarvan zijn de volgende:

1. **Truthy & Falsy (10min)**

    [JS: Truthy and Falsy values](https://www.notion.so/JS-Truthy-and-Falsy-values-5bb04f3097ce418489e68e99d1fb1d47)

2. **Regex**
    - [Wat is Regex?](https://nl.wikipedia.org/wiki/Reguliere_expressie) (Link)

    (Weet wat Regex is, maar ga aub geen tijd steken in het leren van Regex, dat is alleen voor tovenaars 🧙‍♂️)

    Gebruik [https://regex101.com/](https://regex101.com/) om regex te interpreteren te schrijven of te vertalen naar normale mensentaal (dit is er eentje om te bookmarken).

Je gaat aan de slag met de method **expect().toBe()**

Naast de method expect().toBe() zijn er nog vele andere functies:

[Expect · Jest](https://jestjs.io/docs/en/expect)

**Opdracht**:
**Stap 1:** Bekijk de onderstaande functies die in een object zijn gestopt: isNull, checkValue, createUser. Kopieer deze functies naar een eigen file genaamd **functions.js**

```jsx
const functions = {
  isNull: function() {
    return null;
  },
  checkValue: function(x) {
    return x;
  },
  createUser: function() {
    const user = { 
      firstName: 'Brad'
    };
    user['lastName'] = 'Traversy';
    return user;
  }
};

module.exports = functions;
```

Je gaat nu een aantal tests aanvullen en compleet maken om te controleren of deze 3 functies wel echt doen wat ze zéggen dat ze doen.

**Stap 2:** Maak een nieuwe file **functions.test.js (de file name is belangrijk).** Importeer de functies vanuit het bestand **functions.js** in een nieuwe file **functions.test.js.** Door middel van:

```jsx
//Bestand functions.js
module.exports = functions;

//Bestand functions.test.js:
const functions = require('./functions.js')

```

Problemen met importeren en exporteren?
Check de documentatie:

[Understanding module.exports and exports in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

**Stap 3:** Kopieer en plak **delen van** de onderstaande JavaScript naar het `functions.test.js` bestand.

```jsx
const functions = require('./functions.js')

test('Should be null', () => {
	// Begin met expect()
	// Binnen de eerste haken zet je hetgeen je wilt testen. Dat zal een functie zijn.
	// Daarna volgt je .toBeSomethingSomething functie,
  // zoek de geschikte functie in de documentatie.
	// In dit geval willen we checken of de functie "isNull()" ook daadwerkelijk
	// Null returned. Dus "toBeNull()" makes the most sense.
  expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {

});

test('User should be Brad Traversy object', () => {

});

// Tests zijn eigenlijk gewoon functies. Om dat te laten zien laten we je
// nu tests maken die werken zonder input van buitenaf:

// Less than or greater than
test('Should be under or equal to 1600', () => {
	const load1 = 800;
  const load2 = 800;
	// expect(load1 + load2).toBe.....
});

// Regex
test('There is no I in team', () => {
	//  expect('team').not.to..........;
});

// Arrays
test('Admin should be in usernames', () => {
 usernames = ['john', 'karen', 'admin'];
 // expect(usernames).to......
});
```

**Stap 4:** Fill in the blanks!

Om je op weg te helpen hebben we de eerste alvast voor je ingevuld! Zodat je  `npm test` kunt runnen en kan zien dat de eerste test alvast slaagt. 

Je krijgt ook meteen een idee van hoe Jest ongeveer werkt (en hoe leesbaar het is).

- Maak de tests 1 voor 1
- Pak de documentatie van Jest erbij.
- Run je test elke keer. Slaagt je test? Kun je de test ook niet laten slagen?