## Template para automação de testes E2E

#### Requisitos
[NodeJS](https://nodejs.org)

[Cypress](https://cypress.io)

##

#### Instalação de dependências
`npm install`

##

#### Execução
##### Executando em modo Gráfico
`npm run cy:open` (irá rodar sobre a baseUrl definida em cypress.config.js)
##### Executando em modo Headless
`npm run cy:run` (irá rodar sobre a baseUrl definida em cypress.config.js)
##### Executando em modo Headless em vários ambientes
Em package.json há o script `cy:run:local`, seguindo como exemplo, dá para configurar para rodar os testes em vários ambientes

##

#### Report
O reporter utilizado é o [mochawesome](https://www.npmjs.com/package/mochawesome).

O report é gerado quando os testes são executados em modo headless. Está configurado para gerar em HTML, pode ser alterado no arquivo cypress.config.js.
