[![vscode-logo]][vscode-site] [![cypress-logo]][cypress-site] [![javascript-logo]][javascript-site]



# CHALLENGE AUTOMATION CYPRESS - NEORIS

- Prueba para demostrar mis habilidades en Automation

---

# CÓMO EMPEZAR:

---

## Precondiciones

- instalar [Node.js][node-site]

    - para verificar la instalación de Node.js , abre la terminal y ejecuta `node --version`

- instalar el IDE [Visual studio code][vscode-site]

---

1. ***Clona el Proyecto***
```
git clone https://github.com/PabloCz9/cypress-start.git
```

---

2. ***Instala todas las dependencias del proyecto***
```
npm ci
```

---

3. ***Abre la app de cypress***
```
npm test
```
---

- también puedes usar `npx cypress open` (en el archivo package.json la variable "test" es igual a "cypress open")

3.1 ***Elije el navegador***

- navegadores disponibles : `chrome` `firefox` `edge` `electron`

---

3.2 ***Elije el archivo de pruebas a ejecutar***

- para este proyecto los archivos de pruebas terminan con `cy.js`

---

4. ***Ejecutar el test por consola y generar un reporte HTML***
```
npm run execute-file <ruta/a/tu/archivoDePrueba> 
```
- ejemplo `npm run execute-file cypress/e2e/PDP/ProductDetailPage-test.cy.js`

- el reporte HTML se generara dentro de la carpeta `reports` en la raiz del proyecto



[node-site]: https://www.nodejs.org/
[vscode-logo]: https://img.shields.io/badge/Visual%20Studio%20Code-blue?logo=visualstudiocode&style=for-the-badge
[vscode-site]: https://code.visualstudio.com/
[cypress-logo]: https://img.shields.io/badge/cypress-black?logo=cypress&style=for-the-badge
[cypress-site]: https://www.cypress.io
[javascript-logo]: https://img.shields.io/badge/javaScript-black?logo=javascript&style=for-the-badge
[javascript-site]: https://www.javascript.com/