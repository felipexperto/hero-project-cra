# **Hero Project CRA**

Projeto com base na famosa [API da Marvel](https://developer.marvel.com/docs), permitindo consultar personagens e favoritá-los. Criado com [Create React App](https://github.com/facebook/create-react-app).

### **[Confira o LIVE DEMO clicando aqui](https://fxdev-heroproject.netlify.app/)**

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/29200d34-e4b3-4a12-a108-be37e1dde8ee/deploy-status)](https://app.netlify.com/sites/fxdev-heroproject/deploys)

![React](https://github.com//aleen42/badges/raw/master/src/react.svg)
![Tamanho do repositório](https://img.shields.io/github/repo-size/felipexperto/hero-project-cra)
![Quantidade de linhas de código do repositório](https://img.shields.io/tokei/lines/github/felipexperto/hero-project-cra)
![Quantidades de linguagens no repositório](https://img.shields.io/github/languages/count/felipexperto/hero-project-cra)
![Linguagem principal do repositório](https://img.shields.io/github/languages/top/felipexperto/hero-project-cra)

![Tipo de licença do projeto](https://img.shields.io/github/license/felipexperto/hero-project-cra)
![Versão do projeto no package.json](https://img.shields.io/github/package-json/v/felipexperto/hero-project-cra)
![Data do último commit](https://img.shields.io/github/last-commit/felipexperto/hero-project-cra)

## **Stack**

- [React](https://pt-br.reactjs.org/) & [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html) são as bibliotecas de componentes;
- [Styled Components](https://styled-components.com/) para escrever CSS-in-JS;
- [PropTypes](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html) para typechecking;
- [Husky versão 4](https://github.com/typicode/husky) + [Lint Staged](https://github.com/okonet/lint-staged) para rodar Prettier, lint e testes unitários nos arquivos em stage ( `git add .` ) ao executar `git commit`, buscando diminuir a quantidade de commits com erros.
- [eslint](https://eslint.org/) + [prettier](https://prettier.io/) para manter um padrão e boas práticas na escrita do código;
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testes unitários;
- [Cypress](https://www.cypress.io/) para testes end-to-end;

## **Dependências**

Para o ambiente de desenvolvimento e testes você vai precisar de:

- [Node](https://nodejs.org/en/) - versão recomendada `14.16.0`;
- [Cypress](https://www.cypress.io/);

## **Arquivos .env:**

Para rodar o projeto localmente é necessário criar um arquivo `.env` com suas respectivas variáveis de ambiente.

Estando na pasta do projeto, você poderá rodar o comando abaixo em seu Terminal para utilizar o arquivo `.env.example` como modelo:

- `cp .env.example .env`

Agora basta editar o valor da chave `REACT_APP_MARVEL_PUBLIC_KEY` pela sua `PUBLIC_KEY` da Marvel.

## **Rodando o projeto:**

Após clonar o repositório, instale as dependências:

- `yarn install`

Visualizando o projeto em modo de desenvolvimento:

- `yarn start`
- Acessar http://localhost:3000/ para visualizar no navegador.

## **Testes:**

Rodando testes unitários:

- `yarn unit`

Visualizar a cobetura dos testes unitários:

- `yarn coverage`

Rodando testes End-to-End:

- `yarn e2e` (a aplicação deve estar em execução)

## **Linters:**

Rodando **Prettier** para formatar seu código de maneira consistente seguindo um estilo:

- `yarn prettier:fix`

Rodando **Prettier** para verificar se existem arquivos fora do estilo estabelecido:

- `yarn prettier:check`

Rodando a verificação do **eslint** em arquivos `.js` procurando más práticas:

- `yarn lint`

Rodando o **eslint** para tentar corrigir pequenos problemas, como warnings:

- `yarn lint:fix`

Rodando a verificação do **prettier** em arquivos `.js` procurando inconsistências:

- `yarn prettier:check`

Rodando o **prettier** para tentar corrigir inconsistências no padrão de escrita de código:

- `yarn prettier:fix`

## **Deploy**

- `yarn build`

Este é o comando padrão de build do projeto que disponibiliza o React em modo de produção e arquivos otimizados.  
Ao rodar o comando, o resultado é uma pasta `build` criada no diretório raíz ( `/` ).
