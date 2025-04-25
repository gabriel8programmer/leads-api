<h1 align="center" style="font-weight: bold;">API de Leads (Documentando...)</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="typescript" />
  <img src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
  <img src="https://img.shields.io/badge/express-000?style=for-the-badge&logo=express" alt="express" />
  <img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma" alt="prisma" />
  <img src="https://img.shields.io/badge/zod-3E67B1?style=for-the-badge&logo=zod" alt="zod" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="postman" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=black" alt="swagger" />
</div>

<br/>

<p align="center">
 <a href="#started">Começando</a> • 
  <a href="#routes">Endpoints da API</a> •
  <a href="#docs">Documentação</a>
<!--   <a href="#folders">Pastas da Aplicação</a> • -->
<!--  <a href="#colab">Desenvolvedor</a> -->
</p>

  - <b>Motor</b>: Nodejs
  - <b>Linguagem</b>: Typescript
  - <b>Framework</b>: Express
  - <b>Database</b>: MySQL
  - <b>ORM</b>: Prisma
  - <b>Validação</b>: Zod
  - <b>Testes</b>: Postman
  - <b>Documentação</b>: Swagger (implementando...)

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

#lembre-se de criar a base de dados com o nome de sua escolha em (postgresql)
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

Aqui estão as rotas da API e quais são os corpos de solicitação esperados. Não há rotas que necessitem de autenticação ou autorização neste API.

As rotas estão divididas em grupos para uma melhor compreensão e coesão.

1. Rotas de leads

| route                             | description                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------- |
| <kbd>GET /api/leads </kbd>        | Obtem todos os leads, veja [request details](#)                  |
| <kbd>GET /api/leads/:id </kbd>    | Obtem um lead pelo seu id, veja [request details](#)       |
| <kbd>POST /api/leads </kbd>       | Cria um lead, veja [request details](#)                       |
| <kbd>PUT /api/leads/:id </kbd>    | Atualiza um lead pelo seu id, veja [request details](#) |
| <kbd>DELETE /api/leads/:id </kbd> | Remove um lead pelo seu id, veja [request details](#)   |

<br />

2. Rotas de grupos

| route                              | description                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| <kbd>GET /api/groups </kbd>        | Obtem todos os grupos, veja [request details](#)                  |
| <kbd>GET /api/groups/:id </kbd>    | Obtem um grupo pelo seu id, veja [request details](#)       |
| <kbd>POST /api/groups </kbd>       | Cria um grupo, veja [request details](#)                       |
| <kbd>PUT /api/groups/:id </kbd>    | Atualiza um grupo pelo seu id, veja [request details](#) |
| <kbd>DELETE /api/groups/:id </kbd> | Remove um grupo pelo seu id, veja [request details](#)   |

<br />

3. Rotas de campanhas

| route                              | description                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| <kbd>GET /api/campaigns </kbd>        | Obtem todos os campanhas, veja [request details](#)                  |
| <kbd>GET /api/campaigns/:id </kbd>    | Obtem um campanha pelo seu id, veja [request details](#)       |
| <kbd>POST /api/campaigns </kbd>       | Cria um campanha, veja [request details](#)                       |
| <kbd>PUT /api/campaigns/:id </kbd>    | Atualiza um campanha pelo seu id, veja [request details](#) |
| <kbd>DELETE /api/campaigns/:id </kbd> | Remove um campanha pelo seu id, veja [request details](#)   |

<br />

4. Rotas para leads dos grupos

| route                                           | description                                                                     |
| ----------------------------------------------- | ------------------------------------------------------------------------------- |
| <kbd>GET /api/groups/:groupId/leads </kbd>            | Obtem todos leads de um grupo, veja [request details](#)  |
| <kbd>POST /api/groups/:groupId/leads </kbd>           | Adiciona um lead a um grupo, veja [request details](#) |
| <kbd>DELETE /api/groups/:groupId/leads/:leadId </kbd> | Remove um lead de um grupo, veja [request details](#)   |

<br />

5. Rotas para leads das campanhas

| route                                              | description                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <kbd>GET /api/campaigns/:campaignId/leads </kbd>            | Obtem todos leads de uma campanha, veja [request details](#)                     |
| <kbd>POST /api/campaigns/:campaignId/leads </kbd>           | Adiciona um lead a uma campanha, veja [request details](#)                    |
| <kbd>PUT /api/campaigns/:campaignId/:leadId </kbd>    | Atualiza o status de um lead em uma campanha, veja [request details](#) |
| <kbd>DELETE /api/campaigns/:campaignId/:leadId </kbd> | Remove um lead de uma campanha, veja [request details](#)                      |

<h2 id="docs">Documentação</h2>

<h3>Documentação via Swagger</h3>

<a href="#" style="cursor: pointer">
  <img src="https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=black" alt="Swagger" />
</a>




