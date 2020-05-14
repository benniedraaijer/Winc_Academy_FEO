# Winc Academy - Front-end Development

### Opdrachtcode: W2D4-2

## Opdracht: DOM Manipulatie: dynamisch elementen toevoegen aan de DOM

In deze opdracht ga je kijken naar het dynamisch toevoegen en verwijderen van elementen aan een HTML pagina.

Gebruik de onderstaande HTML pagina en maak er je eigen script file aan vast. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>List of Animals</title>
    <script defer type="text/javascript" src="script.js"></script>
  </head>

  <body>
    <div>
      <h1>The Big Five</h1>
      <ul class="big-five-list">
        <li class="big-five-list-item">
          <button class="big-five-button">Lion</button>
        </li>
        <li class="big-five-list-item">
          <button class="big-five-button">Leopard</button>
        </li>
        <li class="big-five-list-item">
          <button class="big-five-button">Elephant</button>
        </li>
        <li class="big-five-list-item">
          <button class="big-five-button">Rhino</button>
        </li>
        <li class="big-five-list-item">
          <button class="big-five-button">Buffalo</button>
        </li>
      </ul>

      <h1>Animals spotted 🦁🐆🐘🦏 🐃:</h1>
      <ul id="spotted-animals-list">
        <li class="spotted-animals-list-item">Duck</li>
      </ul>

      <button id="remove-first-item-button">Remove the first</button>
      <button id="remove-all-button">
        Remove all animals from the spotted list
      </button>
    </div>
  </body>
</html>
```

# Deel 1 - Elementen toevoegen aan de DOM

Je bent op safari en gaat The Big Five spotten. Het enige dier dat je tot nu toe hebt gespot is een eend.

**Opdracht**: Wanneer ik als gebruiker op een button van een van de Big 5 klik, wil ik dat die verschijnt in mijn lijstje met "animals spotted".

**Todo list voor deze opdracht:**

1. Maak een eventlistener vast aan de buttons
2. Maak een functie die gecalled wordt op het moment dat er op 1 van de buttons wordt geklikt. Check dit met een console.log.
3. Zorg dat het `click event` mee wordt gegeven als parameter aan de eventlistener functie. 
4. Zorg dat je toegang hebt tot de waarde (value) van de button waar op is geklikt in deze functie. Check dit met console.log. De uitkomst die je wilt zien in de console wanneer je klikt is: Leopard / Lion / Elephant / Rhino of Buffalo.
5. Creeer een nieuw list-item met JavaScript met de bovenstaande waarde (namelijk het dier waar je op hebt geklikt.
6. Selecteer het parent-element waar je dit nieuwe list-item aan vast wilt maken (de spotted animals list).
7. Maak het nieuwe list-item vast aan het parent-element.

# Deel 2 - 1 element verwijderen uit de DOM

Opdracht: Wanneer ik als gebruiker op de "remove the first item" knop klik wordt de eend die ik op mijn tocht naar het vliegveld heb gespot verwijderd (het is toch een beetje een vreemde eend in dit lijstje van de big five). De gebruiker kan op deze knop blijven klikken, telkens wordt het eerste item verwijderd.

Todo list:

- Maak een eventlistener vast aan de button
- Maak een functie vast aan de eventlistener
- In de functie: selecteer de eend (het element)
- selecteer ook de parent
- gebruik `parent.removeChild(child)`.
- Alternatief: [Verwijder het element](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) met `ChildNode.remove()`

# Deel 3 - Meerdere element verwijderen uit de DOM

Opdracht: Wanneer ik als gebruiker op de "remove all spotted animals" knop klik worden alle dieren die ik heb gespot verwijderd.

**Todolist:**

- Maak een eventlistener vast aan de button
- Maak een functie vast aan de eventlistener
- In de functie: selecteer de parent
- Verwijder alle kinderen van de parent
👉 De simpele manier: set de innerHTML van de parent naar een empty string
👉 [De chique manier](https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb): selecteer de parent en gebruik een loop om elk element 1 voor 1 te verwijderen met .remove() of met `.removeChild()`