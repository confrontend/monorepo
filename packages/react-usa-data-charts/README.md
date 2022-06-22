# Getting Started with Create React App


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

## TODO

- Grid
- Testing
- Fetch data optimization
- Sortable table
  - table cell
  - search
- Security
- Provider data cache
- Loading spinner

## Sources

https://worldpopulationreview.com/states

## Analyzing bundle size

"build": "react-scripts build --stats",
"analyze": "webpack-bundle-analyzer build/bundle-stats.json"

## linting

.eslintrc.json
https://www.npmjs.com/package/eslint-config-react-app

see:
.eslintignore
.eslintrc.js

## Performance

- Code splitting with React.lazy & Suspense
  - Lazy loading
  - Lazy loading (event based)
  - Preloading using webpack "prefetch" comment
