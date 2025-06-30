# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Node verison V22.0.0

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Tests Disponibles

El proyecto incluye tests unitarios para los componentes principales:

**SearchFormComponent Tests:**
- ✅ Activación del botón de búsqueda cuando se escribe texto
- ✅ Aparición del botón de limpiar cuando hay texto en el input
- ✅ Funcionalidad de limpiar el input al hacer clic en el botón "✕"
- ✅ Carga de datos iniciales desde el store de Redux

**FooterComponent Tests:**
- ✅ Renderizado correcto del texto "Animal Finder" en el footer

Para ejecutar tests específicos:
```bash
# Ejecutar solo los tests de SearchFormComponent
npm test -- --testPathPattern=SearchFormComponent.test.js --watchAll=false

# Ejecutar solo los tests de FooterComponent
npm test -- --testPathPattern=FooterComponent.test.js --watchAll=false

# Ejecutar todos los tests sin modo watch
npm test -- --watchAll=false
```

**Configuración de Testing:**
- React Testing Library para renderizado y interacciones
- MemoryRouter para proporcionar contexto de React Router
- Redux Mock Store para simular el estado de la aplicación
- Compatible con React 18.2.0 y React Router DOM 6.x

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## No Results pages

To load the "No results" page
In the input, type noResults
To load the "No search terms exist" page
Type the url http://localhost:3000/search/

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
