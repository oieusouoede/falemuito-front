# falemuito-front

Esse projeto é o frontend que consome a [falemuito-api](https://github.com/oieusouoede/falemuito-api), projeto que eu desenvolvi em um desafio para um processo seletivo. É uma página que fornece um simulador de planos de telefonia, onde o usuário pode inserir uma minutagem para uma chamada entre um DDD de destino e um de origem, obtendo como retorno o valor que seria pago com e sem o plano.

## Sumário

- [Executando](#executando)
  - [Especificações](#especificaçôes)
  - [Rodando localmente](#rodando-localmente)
  - [Docker](#docker)
  - [docker-compose (recomendado)](#docker-compose-recomendado)

## Executando

### Especificações

    Angular 13.2.0
    Angular CLI 13.2.3
    Bootstrap 4.6
    npm 8.5.5

### Rodando localmente

Pra rodar localmente, primeiro é necessário instalar as dependências. Da pasta raiz do projeto, basta rodar:

    npm install

Isso demora um pouco, mas logo depois você consegue rodar a aplicação em um servidor de desenvolvimento usando o comando:

    ng serve

A aplicação vai estar disponível em http://localhost:4200/.

### Docker

Baixar a imagem:

    docker image pull edemarinho/falemuito-front

Iniciar o container:

    docker run --name falemuito-front -it edemarinho/falemuito-front

A aplicação vai estar disponível em http://localhost/

### docker-compose (recomendado)

A vantagem desse é que roda backend e frontend junto então a página estará 100% funcional.

    docker-compose -f falemuito-front.yml up

A aplicação vai estar disponível em http://localhost/ . A api vai estar disponível em http://localhost:8083/.
