# 🧭 Sistema de Monitoramento de Pessoas

Este projeto é uma aplicação web desenvolvida com **Angular 19** e **Tailwind CSS**, com a responsabilidade de gerenciar pessoas desaparecidas e encontradas.

---

## 🚀 Tecnologias Utilizadas

- [Angular 19](https://angular.io/)
- [Tailwind CSS 3.4](https://tailwindcss.com/)
- [Node.js + Express](https://expressjs.com/)
- [RxJS](https://rxjs.dev/)
- [Jest](https://jestjs.io/pt-BR/)
- [ESlint](https://jestjs.io/pt-BR/) +  [Prettier](https://jestjs.io/pt-BR/)


## ⚙️ Baixando o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Cristianotx/localiza-pessoas.git
```

## 🐳 Rodando via Docker (recomendado)

### 📦 Requisitos

- [Docker](https://docs.docker.com/desktop/setup/install/)

### 1. Acesse o projeto
```bash
cd localiza-pessoas
```

### 2. Rode o seguinte comando
```bash
docker-compose up --build
```

## 🅰️ Rodando via Angular CLI

### 📦 Requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [Angular CLI](https://angular.io/cli) `npm install -g @angular/cli`
- Gerenciador de pacotes (npm ou yarn)

### 1. Acesse o projeto
```bash
cd localiza-pessoas
```

### 2. Instale os pacotes
```bash
npm i
```
### 3. Rodando o projeto
```bash
npm start
```
## 🧱 Estrutura do Projeto
```bash
.
├── src/
│   ├── app/
│   │   ├── core/   
│   │   │   └── layout/   
│   │   ├── pages/ 
│   │   │   ├──  home/
│   │   │   └──  persons/
│   │   └── shared/  
│   │       ├──  bases/
│   │       ├──  helpers/
│   │       ├──  interfaces/
│   │       └──  services/
│   └── tailwind.config.js
└── README.md
```

### 🖼️ Funcionalidades
* Painel estatístico
* Lista de pessoas desaparecidas com filtros e paginação
* Página de detalhes com status (viva/morta, encontrada/desaparecida)
* Layout 100% Tailwind

### 🔄 O que pode ser melhorado?
* Testes automatizado
* Utilização de biblioteca para gerenciamento de estado
* Renderização SSR