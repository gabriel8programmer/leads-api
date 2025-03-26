<h1 align="center" style="font-weight: bold;">API de Leads (Documentando...)</h1>

<div align="center">
  <img src="https://img.shields.io/badge/typescript-000?style=for-the-badge&logo=typescript" alt="typescript" />
  <img src="https://img.shields.io/badge/Nodejs-000?style=for-the-badge&logo=node.js" alt="nodejs" />
  <img src="https://img.shields.io/badge/tsnode-000?style=for-the-badge&logo=tsnode" alt="tsnode" />
  <img src="https://img.shields.io/badge/express-000?style=for-the-badge&logo=express" alt="express" />
  <img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma" alt="prisma" />
  <img src="https://img.shields.io/badge/zod-3E67B1?style=for-the-badge&logo=zod" alt="zod" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="postman" />
</div>

<p align="center">
 <a href="#started">Começando</a> • 
  <a href="#routes">Endpoints da API</a> •
  <a href="#folders">Pastas da Aplicação</a> •
<!--  <a href="#colab">Desenvolvedor</a> -->
</p>

  - <b>Motor</b>: Nodejs
  - <b>Linguagem</b>: Typescript
  - <b>Framework</b>: Express
  - <b>Database</b>: MySQL
  - <b>ORM</b>: Prisma
  - <b>Validação</b>: Zod
  - <b>Testes</b>: Postman


<h2 id="started">🚀 Começando</h2>

Como rodar o projeto localmente:

<h3>Pré-requisitos</h3>

Para o projeto funcionar de forma ideal, você deve ter instalado em sua máquina as seguintes elementos abaixo:

- [NodeJS](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)
- [PostgreSQL](https://www.postgresql.org/download/)

<h3>Clonando</h3>

Para clonar o projeto, obtenha a URL deste repositório no github clicando no botão verde "Code" e rode o seguinte comando em seu terminal.

```bash
git clone SUA-URL
```

<h3>Variáveis de ambiente</h3>

Crie um arquivo `.env` na raiz da pasta backend e adicione as seguintes variáveis de ambiente:

```yaml
DATABASE_URL= #padrão: "postgresql://user:password@localhost:5432/nome_banco"
```

<h3>Iniciando</h3>

Para iniciar o projeto rode os seguintes comandos:

```bash
cd leads-api
npm i #instala as dependências do projeto
npm run db:create-tables #cria as tabelas necessárias para o banco
npm run dev #inicia o projeto localmente na porta 3000
```

Após isso, acesse a URL http://localhost:3000 e o projeto estará rodando.

<h2 id="routes">📍 Endpoints da API</h2>

Aqui estão as rotas da API e quais são os corpos de solicitação esperados.
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /user/register</kbd>     | Cadastra um usuário, veja [response details](#post-user-register-detail)
| <kbd>POST /user/login</kbd>     | Faça login de um usuário, veja [request details](#post-user-login-detail)
| <kbd>🔒 POST /user/register/set</kbd>     | Salva um registro, veja [request details](#post-user-register-set-detail)
| <kbd>🔒 GET /user/registers</kbd>     | Obtém os registros do usuário, veja [request details](#get-user-registers-detail)
| <kbd>GET /user/confirm/:id/:secret/:token</kbd>     | Ativa a conta de um usuário, veja [response details](#get-user-confirm-detail)

<h3 id="post-user-register-detail">POST /user/register</h3>

**REQUEST**
```json
{
  "name": "arthur candeia",
  "email": "arthurheher@hotmail.com",
  "password": "Abc123**" //Min de 8, minúsculas, maiúsculas, números, especiais
}
```

**RESPONSE**
```json
{
  "success": true
}
```

<h3 id="post-user-login-detail">POST /user/login</h3>

**REQUEST**
```json
{
  "email": "arthurheher@hotmail.com",
  "password": "Abc123**"
}
```

**RESPONSE**
```json
{
  "token": "OwoMRHsaQwyAgVoc3OXmL1JhMVUYXGGBbCTK0GBgiYitwQwjf0gVoBmkbuyy0pSi"
}
```

<h3 id="post-user-register-set-detail">🔒 POST /user/register/set</h3>

**REQUEST**
```json
{
  "id": 1,
  "fields": [10, 40, 20, 50]
}
```

**RESPONSE**
```json
{
  "success": true
}
```

<h3 id="get-user-registers-detail">🔒 GET /user/registers</h3>

**RESPONSE**
```json
{
  "registers": [
    {"id": 1, "fields": [10, 40, 20, 50]},
    {"id": 2, "fields": []},
    {"id": 3, "fields": []},
    {"id": 4, "fields": []},
    {"id": 5, "fields": []},
    {"id": 6, "fields": []},
    {"id": 7, "fields": []},
    {"id": 8, "fields": []},
    {"id": 9, "fields": []},
    {"id": 10, "fields": []},
    {"id": 11, "fields": []},
    {"id": 12, "fields": []}
  ]
}
```

<h3 id="get-user-confirm-detail">🔒 GET /user/confirm/:id/:secret/:token</h3>

**RESPONSE**
```js
redirect("FRONTEND_URL/api/confirmation/:token")
```

<h2 id="folders">📂 Pastas da Aplicação (SRC)</h2>
Além de src, existem as seguintes pastas: <br>
DATABASE - Armazena os arquivos relacionados a conexão com o Banco de Dados. <br>
<p>Aqui estão descritas as pastas da aplicação dentro de src.</p>
<p>
  <b>Arquitetura: <br>
  API / Express -> Router -> Router Espec. -> Middleware (Opc.) -> Controller -> Service (Core) -> Entity -> DB
  </b>
</p>

<h3>ROUTES</h3>

- <b>Responsabilidade</b>: Camada responsável por montar a API com as rotas disponíveis na aplicação e direcioná-las.
- <b>Arquivos</b>: *.router.ts
- <b>Nomes</b>: *Router

<h3>MIDDLEWARES</h3>

- <b>Responsabilidade</b>: Camada responsável pelo processamento de requisições antes de fornece-las ao controller. Geralmente utilizada para autenticação.
- <b>Arquivos</b>: *.middleware.ts
- <b>Nomes</b>: *Middleware

<h3>CONTROLLERS</h3>

- <b>Responsabilidade</b>: Camada responsável pelo recebimento da requisição enviada pelo route, entrega ao service para processamento e envio da resposta.
- <b>Arquivos</b>: *.controller.ts
- <b>Nomes</b>: *Controller

<h3>SERVICES</h3>

- <b>Responsabilidade</b>: Coração da aplicação. Recebe os dados do controller e faz todo o processamento necessário. Chama as entities quando necessita de comunicação com o DB. É o núcleo/core/domínio da aplicação.
- <b>Arquivos</b>: *.service.ts
- <b>Nomes</b>: *Service

<h3>ENTITIES</h3>

- <b>Responsabilidade</b>: Camada responsável pela conexão com banco de dados, é utilizada pelos services.
- <b>Arquivos</b>: *.entity.ts
- <b>Nomes</b>: *Entity

<h3>SCHEMAS</h3>

- <b>Responsabilidade</b>: Camada responsável por montar os contratos da aplicação (DTO). Ela é quem fornece as tipagens e os schemas para validação dos dados inseridos pelos usuários.
- <b>Arquivos</b>: *.schema.ts
- <b>Nomes</b>: *Schema

<h3>UTILITIES</h3>

- <b>Responsabilidade</b>: Ferramentas utilitárias da aplicação, como geração de token, manipulação de erro, exclusão de arquivos.
- <b>Arquivos</b>: *.utility.ts
- <b>Nomes</b>: *Utility

<h3>API</h3>

- <b>Responsabilidade</b>: Camada responsável pela comunicação com outras API's, por meio de algum protocolo, ex: envio de e-mail, gateway de pagamentos.
- <b>Arquivos</b>: *.api.ts
- <b>Nomes</b>: *API


<h2 id="colab">🤝 Desenvolvedor</h2>

Este projeto foi desenvolvido por:

<table>
  <tr>
    <td align="center">
      <a href="https://arthur-candeia.com.br">
        <img src="https://avatars.githubusercontent.com/u/111158174?s=400&u=a6636557734b988b22507520278c7d467a054f47&v=4" width="100px;" alt="Fernanda Kipper Profile Picture"/><br>
        <sub>
          <b>Arthur Candeia</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h3>Ajuda da documentação</h3>

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
