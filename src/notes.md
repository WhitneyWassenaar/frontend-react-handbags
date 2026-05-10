- props: alleen in React components, niet in helpers
- parameters: overal in JavaScript
- react/prop-type error:`ESLint: 'text' is missing in props validation (react/prop-types)`
  - gebruik `// eslint-disable-next-line react/prop-types` om error te negeren.
  - Of installeer prop-types . PropTypes laat je de types van je props definiëren, zodat React kan controleren of je component de juiste data krijgt.
- componenten gebruiken jsx (UI), helper-functies js (logica)
- `&&` betekent : Als de conditie voor de && true is voer dan alles uit wat na de && staat. Is het false dan wordt er niets uitgevoerd en er ontstaat geen error
- Haakjes zijn optioneel voor leesbaarheid. Bijvoorbeeld bij: 
  - ``{imgUrl && (
                  <img src={imgUrl} alt={alternativeText}/>
              )}``

- Als je bepaalde props niet wil weergeven in een component, dan laat je het gewoon weg.
- Waar precies zit de HEAD in een React project?
- 