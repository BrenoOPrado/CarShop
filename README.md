# Car-Shop 🚗 🏍️

Car-Shop é uma aplicação Back-End de uma concessionária que vende carros e motos, que foi desenvolvida com o `Mongoose` (ODM), `Node.js`, `Express.js` e `TypeScript`. Nela é possível Listar, Criar, Atualizar e Deletar os veículos.

## Rodando com Docker

<details>
  <summary>Clique para expandir</summary>
  
  ## É necessário ter o Docker instalado em sua máquina.
  
- Clone o projeto

```bash
  git clone git@github.com:Joaogustavo789/Car-Shop.git
```

- Entre no diretório do projeto

```bash
  cd Car-Shop
```

- Crie os Containers

```js
  docker-compose up -d  // Ele irá rodar dois serviços, um do node e um do db!
```

Se estiver usando `macOS` será necessário colocar manualmente uma opção `platform: linux/amd64` no serviço do banco de dados no arquivo docker-compose.yml desse projeto.

- Entre no container do projeto

```bash
docker exec -it car_shop bash
```

- Caso queira entrar no container do db, basta rodar

```bash
docker exec -it car_shop_db bash
```

- Instale as dependências dentro do container

```bash
  npm install
```
</details>

## Rodando localmente

<details>
  <summary>Clique para expandir</summary>
  
## É necessário ter o Node.js, MongoDB e o Mongoose instalados em sua máquina.

- Clone o projeto

```bash
  git clone git@github.com:Joaogustavo789/Car-Shop.git
```

- Entre no diretório do projeto

```bash
  cd Car-Shop
```

- Instale as dependências

```bash
  npm install
```
</details>

## Rodando os testes

<details>
  <summary>Clique para expandir</summary>
  <br>
  
Para rodar os testes, rode o seguinte comando

```bash
  npm test
```
</details>


## Ferramentas e Tecnologias

<br>
<br>
<table width="320px" align="center">
  <tbody>
    <tr valign="top">
      <td width="80px" align="center">
        <span><strong>Docker</strong></span>
        <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>Mongoose</strong></span><br>
        <img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" />
      </td>
      <td width="80px" align="center">
        <span><strong>Node.js</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>Express</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>TypeScript</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      </td>
    </tr>
  </tbody>
</table>

## Documentação

- [Docker](https://docs.docker.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de breno.o.prado@hotmail.com


<!--
## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.
-->

<!-- 
## Uso/Exemplos

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```
-->
