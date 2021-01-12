# DS Delivery
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/DenisonMartins/dsdelivery/blob/main/LICENSE) 

# Sobre o projeto

https://sds2-michael.netlify.app

DS Delivery é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema de pedidos de comidas, onde os pedidos são realizados pela web, e depois listados no mobile com opções para os entregadores de inciar a entrega, finalizar a entregar.

## Layout mobile
![Mobile 1](https://github.com/DenisonMartins/dsdelivery/blob/main/assets/telaPrincipalMobile-min.png) ![Mobile 2](https://github.com/DenisonMartins/dsdelivery/blob/main/assets/listagemPedidosMobile-min.png) ![Mobile 3](https://github.com/DenisonMartins/dsdelivery/blob/main/assets/pedidoMobile-min.png)

## Layout web
![Web 1](https://github.com/DenisonMartins/dsdelivery/blob/main/assets/telaPrincipal-min.png)

![Web 2](https://github.com/DenisonMartins/dsdelivery/blob/main/assets/telaPedidos-min.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/DenisonMartins/dsdelivery/blob/main/assets/modelo-conceitual-min.png)

# Tecnologias utilizadas
## Backend
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Frontend
- ReactJS
- Axios
- Leaflet
- React-Toastify
- React Select
## Frontend mobile
- React Native
- React Navigation
- Axios
- dayjs
## Implantação em produção
- Backend: Heroku
- Frontend web: Netlify
- Banco de dados: MySQL

# Como executar o projeto

## Backend
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/DenisonMartins/dsdelivery

# entrar na pasta do projeto backend
cd backend

# alterar o profile no arquivo application.yml
spring.profiles.active = test

# executar o projeto
./mvnw spring-boot:run
```

## Frontend web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/DenisonMartins/dsdelivery

# entrar na pasta do projeto frontend web
cd frontend-web

# instalar dependências
yarn install

# executar o projeto
npm start
```

## Frontend mobile
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/DenisonMartins/dsdelivery

# entrar na pasta do projeto frontend mobile
cd frontend-mobile

# instalar dependências
yarn install

# executar o projeto
npm start

# abrir a url disponibilizada no console no celular
```

# Autor

Michael Denison Lemos Martins

https://www.linkedin.com/in/michael-dl-martins/