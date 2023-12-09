# web-app-development
Basic bootstrap for developing a web app with the power of Vite.

# Degit
Copy this repository file structure to your local development environment.
`degit https://github.com/arjandemeijer/web-app-development.git`

# Aim of Repository
Each Svelte page gets its own dedicated js + css files. The css file is only generated when necessary for the page. For overall styling, use the scss files that compile to a dedicated css file. The styling css file can then be used by the majority of files.

```
# Overall Theme CSS
dist/assets/css/theme.css

# Overall Base javascript.
dist/assets/js/index.js 

# Page 1
dist/assets/pages/css/page1.css
dist/assets/pages/js/page1.js

# Page 2
dist/assets/pages/css/page2.css
dist/assets/pages/js/page2.js
```
