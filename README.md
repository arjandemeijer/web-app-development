# WebApp Development
Basic bootstrap for developing a web app with the power of Svelte and Vite.

# Degit
Copy this repository file structure to your local development environment.
`degit https://github.com/arjandemeijer/web-app-development.git`

# Aim of Repository
Svelte pages compile to own dedicated js and css files. Project files are generated to general `{theme}` files that are reused in the project.

## Project CSS
Contains shared stylesheet.
```
dist/assets/css/theme.css
```

## Project JS
Contains shared javascript.
```
dist/assets/js/theme.js
```

## Add page to ViteJs
Inside the `vite.config.js` file add the following syntax to `rollupOptions.input`:
```
{page}: fileURLToPath(new URL('{page}.html', import.meta.url)),
```

## Page with style
If a page is developed and one of the files contains a stylesheet, ViteJS will generate a separate css file for the page. It will also incorporate styles referencing to `node_modules` or `imports`. The name <b>wizard</b> is an example.
```
dist/assets/css/pages/wizard.css
dist/assets/js/pages/wizard.js
```

## Page without style
When a page does not contain any styling, no css file is generated. The name <b>upload</b> is an example.
```
dist/assets/js/pages/upload.js
```
