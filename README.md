# React Locator Project

Technologies: React.js, Styled Components

Data: https://datasf.org/opendata
Map: https://www.npmjs.com/package/pigeon-maps

#### Demo: https://ejrestaurant-locator.netlify.app/

## Team: Ermias and Jesus

---

![react-component-tree](/assets/react-component-tree.jpg)

---

## Requirements:

- [ ] Your app should use `styled-components` for styling rather than scss/regular css.
- [ ] Your app should use `react-router-dom` for conditional rendering of your different "page" elements.
- [ ] Your app should use a React-specific mapping package and load search results onto the map as pushpins. Look into npm packages like [React Leaflet](https://react-leaflet.js.org/), [React Google Maps](https://www.npmjs.com/package/@react-google-maps/api), [Pigeon Maps](https://www.npmjs.com/package/pigeon-maps), [Here Maps React](https://www.npmjs.com/package/here-maps-react-v2), etc. Note that not all mapping APIs are free, so read the fine print!
- [ ] Your app should have a search bar that allows a user to specify a new location to search in. After user search, the map should recenter and show results in the new location.
- [ ] Pull data from your external API using `axios`, `fetch`, or a similar tool. Make sure that your app runs a search for results in the default location upon render, displays search results, and displays pushpins for those results on the map!
- [ ] Your app should have a separate location details "page" that the user can navigate to by clicking on a search result (and maybe even by clicking on a map pushpin). This location details component should **NOT** receive its data via props and should instead use `useEffect()` to pull location details from the API after initial render. See the [Blog App Demo](https://github.com/scullenBitwise/react-apprenticeship/tree/main/react/11_react-router/3_blog-app) for an example of how to accomplish this.
- [ ] Hide any API keys using a `.env` file. Remember to add the `.env` file to your `.gitignore` so that it is not uploaded to GitHub!
- [ ] Your app should have multiple components. Use props to pass data from parent components into child components to allow customization of the child components. (Sometimes it's easiest to start with one or two big components, and to break code out into smaller, more specific components after the core functionality is in place.)
- [ ] Make your code as DRY (**D**on't **R**epeat **Y**ourself) as possible!

---

## Use Cases for App

**User should be able to see**

1. Icon

2. Input field

3. Map

- Icon

4. Card

- Text

**User should be able to do**

1. Enter characters into input field:

- Filter Icons
- Filter Cards

2. Zoom in and out of Map

3. Click on icons displayed on Map

- PopUp Card

4. Click on Card
