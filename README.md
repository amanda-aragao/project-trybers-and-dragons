# Trybers and Dragons

O projeto **Trybers and Dragons** é uma aplicação inspirada em jogos RPG (Role Playing Game), na qual foi usado os principios de SOLID e Programação Orientada a Objetos (POO).

## Tecnologias Utilizadas
- TypeScript
- Docker 
- Nodemon

## Instruções

1. Clone este repositório:

   ```bash
   git clone git@github.com:amanda-aragao/project-trybers-and-dragons.git
Acesse o diretório do projeto e instale as dependências:

2. Acesse o diretório do projeto e instale as dependências:

   ```bash
   npm install 

3. Inicie os containers do compose trybers_and_dragons:

   ```bash
     npm run compose:up

4. Acesse o terminal interativo do container trybers_and_dragons:

   ```bash
    docker-compose exec it trybers_and_dragons bash

5. Instale as dependências dentro do container:

   ```bash
   npm install 

6. Inicie a aplicação com ts-node usando o comando abaixo.

   ```bash
   npm start 

7. Para iniciar a aplicação com o nodemon, use o script abaixo.

   ```bash
   npm run dev

#### Desenvolvido por Amanda Aragão - 2023.