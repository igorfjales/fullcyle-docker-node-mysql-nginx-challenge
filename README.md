# fullcyle-docker-node-mysql-nginx-challenge

## Desafio - Utilizando Nginx como Proxy Reverso com Docker

Neste desafio do curso Docker, você terá a oportunidade de aplicar os conhecimentos adquiridos em relação à utilização do Nginx como proxy reverso. O objetivo principal é configurar o Nginx para encaminhar as requisições de um usuário para uma aplicação Node.js. Essa aplicação, por sua vez, será responsável por adicionar um registro ao banco de dados MySQL, cadastrando um nome na tabela "people".

### Descrição do Desafio:

- Configure o Nginx como proxy reverso para uma aplicação Node.js.
- Quando um usuário acessar o servidor Nginx, este deve fazer uma chamada para a aplicação Node.js.
- A aplicação Node.js deverá adicionar um registro ao banco de dados MySQL, contendo um nome cadastrado na tabela "people".
- O retorno da aplicação Node.js para o Nginx deve ser o seguinte conteúdo:

Full Cycle Rocks!
- Lista de nomes cadastrada no banco de dados.

### Instruções:
- Gere um arquivo docker-compose.yml contendo a configuração necessária para que, ao executar "docker-compose up -d", todos os serviços estejam funcionando corretamente e disponíveis na porta 8080.

- Utilize a linguagem de programação Node.js para implementar a aplicação que será acessada pelo Nginx e fará a interação com o banco de dados MySQL.

- Crie um repositório para o desafio e faça o upload de todos os arquivos necessários, incluindo o arquivo docker-compose.yml, as configurações do Nginx, o código da aplicação Node.js e quaisquer outros arquivos relevantes.

- Linguagem de programação para este desafio: Node/JavaScript.
