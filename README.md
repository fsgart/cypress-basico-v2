# cypress-basico-v2

Curso básico de cypress - Talking About Testing Course - Udemy

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.1.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Você pode executar os testes simulando uma aplicação desktop ou um app mobile, ou apenas executando no modo headless

## Desktop

Run `npm test` para executar os testes no modo headless

ou Run `cy:open` para abrir o cypress no modo interativo 
   
## Mobile

Run `cy:open:mobile` para abrir o cypress no modo interativo com viewportWidth=410 viewportHeight=860 

> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
