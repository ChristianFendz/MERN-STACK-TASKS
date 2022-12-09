## MERN Stack Curso - Mongodb, Express, React y Nodejs

## Configuración inicial

- Instalar **node.js**
  ```linux
  sudo apt install nodejs
  sudo apt install npm
  ```
- Crear Configuración básica de aplicación
  ```npm init --yes```
- Configuración de framework para node **Express**
  ```npm install express```
- Arrancar servidor. Con esto se puede visualizar en _localhost:3000_
  ```js

  const express = require('express');
  const app = express();

  app.listen(3000,() => {
      console.log('Server on port 3000');
  })
  ```
  Postereior en consola: `node src/index.js`

- En **package.json** se puede escribir script para posterior ejecutar desde consola con el nombre del script: `npm start` para otros comandos se ejecuta con `npm run [comando]`

- Configuración de ambiente de desarrollo para auto refresco/despliegue:

  1. Instalar `npm install nodemon -D` (-D excluye como dependencia de proyecto)
  2. Ejecutar despliegue `npm run dev`

  ```js
      {
      "name": "MERN-STACK-TASKS",
      "version": "1.0.0",
      "description": "Curse for node and react",
      "main": "index.js",
      "scripts": {
        "start": "node src/index.js",
        "dev": "nodemon src/index.js"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.18.2"
      },
      "devDependencies": {
        "nodemon": "^2.0.20"
      }
    }
  ```
- Instalar modulo para imprimir todas las peticiones que entran al servidor `npm install morgan` y aplicar en middlewares `app.use(morgan("dev"));`
