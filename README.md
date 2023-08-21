Plan kvar att fixa till uppgiften totalt:
 * Starta en beräkningstjänst som utgår från todays date.
 * Lägg krav på knappen att den ska ändra styling/skuggning... disable
 * Spann mellan todaysdate+3 timmar; 
   * Boolean true och 
   * ändrar stylingen. (bakgrunden blir grön och knappen feidas)   
 * Spann mellan 3-4 timmar; 
   * boolean false och 
   * stylingen ändras. (bakgrunden blir orange och knappen syns)
 * Spann mer än 4 timmar; 
   * notis med meddelande i "en alert" eller div med display-none där det meddelas att ett djur behöver matas 
   * och stylingen ändras. (bakgrund röd)
   

  Klara mål under första avstämningen:
 * Planera upp uppgiften - KLAR
 * Addera komponenter jag kommer behöva i projektet - KLAR
 * Få rätt på routs och se till att de visas rätt sidor vid ändring i URLen - KLAR
 * Få rätt på hämtning - KLAR
 * Spara i Localstorage - KLAR
 * Koppla länken med djur till sidan och funktionen som hämtar från localstorage - KLAR
 * Skriv djuren på sidan med animals - KLAR
 * Lägg till styling. Valde att ha djuren i column med ett djur åt gången för att det inte ska upplevas rörigt. -KLAR
 * Flytta över enskillda djur till egen komponent!! - KLAR 
 * Gå igenom uppgiften igen planera upp resten- KLAR
 * Lägg på ett klickevent på djursidan som triggar och startar ensiltdjurkomponent med idet. - KLAR
 * Plocka upp datan från databasen med detta id. - KLAR
 * Printa ut info om djuret och lägg till matknapp. - KLAR
 * Hämta arrayn i localstorage - KLAR
 * Skriv kod för att ändra värdet i ett id gällande matdatum och boolean - KLAR
 * Lägg på event på knapp och lägg till klickevent som ändrar todays date på det djuret som   klickas på. - KLAR
  * Trasiga bildlänkar. Länkar in en ritad bild med olika djur som visas när bilderna är trasiga. 
   Väljder detta sätt då man hade varit i team hade backenden fått "laga" bildlänkarna om det hade varit ett riktigt projekt.
   därför blev valet att inte ersätta bilderna från egna bilder i assets. 
   Tog också bort alt att filtrera bort objekt med trasiga bilder då detta inte hade fungerat på tex en nätbutik. -KLAR


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/mzU6KDhq)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11559635&assignment_repo_type=AssignmentRepo)
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
