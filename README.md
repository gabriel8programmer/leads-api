<h1 align="center" style="font-weight: bold;">API de Leads (Documentando...)</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/typescript-000?style=for-the-badge&logo=typescript" alt="typescript" />
  <img src="https://img.shields.io/badge/Nodejs-000?style=for-the-badge&logo=node.js" alt="nodejs" />
  <img src="https://img.shields.io/badge/tsnode-000?style=for-the-badge&logo=tsnode" alt="tsnode" />
  <img src="https://img.shields.io/badge/express-000?style=for-the-badge&logo=express" alt="express" />
  <img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma" alt="prisma" />
  <img src="https://img.shields.io/badge/zod-3E67B1?style=for-the-badge&logo=zod" alt="zod" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="postman" />
</div>

<br/>

<p align="center">
 <a href="#started">Começando</a> • 
  <a href="#routes">Endpoints da API</a>
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
| <kbd>GET /api/leads </kbd>        | Obtem todos os leads, veja [request details](#get-leads-detail)                  |
| <kbd>GET /api/leads/:id </kbd>    | Obtem um lead pelo seu id, veja [request details](#get-single-lead-detail)       |
| <kbd>POST /api/leads </kbd>       | Cria um lead, veja [request details](#create-leads-detail)                       |
| <kbd>PUT /api/leads/:id </kbd>    | Atualiza um lead pelo seu id, veja [request details](#update-single-lead-detail) |
| <kbd>DELETE /api/leads/:id </kbd> | Remove um lead pelo seu id, veja [request details](#delete-single-lead-detail)   |

<br />

2. Rotas de grupos

| route                              | description                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| <kbd>GET /api/groups </kbd>        | Obtem todos os grupos, veja [request details](#get-groups-detail)                  |
| <kbd>GET /api/groups/:id </kbd>    | Obtem um grupo pelo seu id, veja [request details](#get-single-group-detail)       |
| <kbd>POST /api/groups </kbd>       | Cria um grupo, veja [request details](#create-groups-detail)                       |
| <kbd>PUT /api/groups/:id </kbd>    | Atualiza um grupo pelo seu id, veja [request details](#update-single-group-detail) |
| <kbd>DELETE /api/groups/:id </kbd> | Remove um grupo pelo seu id, veja [request details](#delete-single-group-detail)   |

<br />

3. Rotas de campanhas

| route                              | description                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| <kbd>GET /api/campaigns </kbd>        | Obtem todos os campanhas, veja [request details](#get-campaigns-detail)                  |
| <kbd>GET /api/campaigns/:id </kbd>    | Obtem um campanha pelo seu id, veja [request details](#get-single-campaign-detail)       |
| <kbd>POST /api/campaigns </kbd>       | Cria um campanha, veja [request details](#create-campaigns-detail)                       |
| <kbd>PUT /api/campaigns/:id </kbd>    | Atualiza um campanha pelo seu id, veja [request details](#update-single-campaign-detail) |
| <kbd>DELETE /api/campaigns/:id </kbd> | Remove um campanha pelo seu id, veja [request details](#delete-single-campaign-detail)   |

<br />

4. Rotas para leads dos grupos

| route                                           | description                                                                     |
| ----------------------------------------------- | ------------------------------------------------------------------------------- |
| <kbd>GET /api/groups/:groupId/leads </kbd>            | Obtem todos leads de um grupo, veja [request details](#get-lead-groups-detail)  |
| <kbd>POST /api/groups/:groupId/leads </kbd>           | Adiciona um lead a um grupo, veja [request details](#create-lead-groups-detail) |
| <kbd>DELETE /api/groups/:groupId/leads/:leadId </kbd> | Remove um lead de um grupo, veja [request details](#delete-lead-group-detail)   |

<br />

5. Rotas para leads das campanhas

| route                                              | description                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <kbd>GET /api/campaigns/:campaignId/leads </kbd>            | Obtem todos leads de uma campanha, veja [request details](#get-lead-campaigns-detail)                     |
| <kbd>POST /api/campaigns/:campaignId/leads </kbd>           | Adiciona um lead a uma campanha, veja [request details](#create-lead-campaigns-detail)                    |
| <kbd>PUT /api/campaigns/:campaignId/:leadId </kbd>    | Atualiza o status de um lead em uma campanha, veja [request details](#update-lead-status-campaign-detail) |
| <kbd>DELETE /api/campaigns/:campaignId/:leadId </kbd> | Remove um lead de uma campanha, veja [request details](#delete-lead-campaign-detail)                      |

<br />

<h3 id="get-leads-detail">GET api/leads</h3>

**RESPONSE**

```json
{
    "leads": [
        {
            "id": 1,
            "name": "Gabriel",
            "email": "gabriel@gmail.com",
            "phone": "00000-0000",
            "status": "New",
            "createdAt": "2025-03-26T20:11:34.150Z",
            "updatedAt": "2025-03-26T20:11:34.150Z"
        }
    ],
    "meta": {
        "page": 1,
        "pageSize": 10,
        "total": 1,
        "totalPages": 1
    }
}
```

<h3 id="get-single-lead-detail">GET api/leads/:id </h3>

**RESPONSE**

```json
{
    "lead": {
        "id": 1,
        "name": "Gabriel",
        "email": "gabriel@gmail.com",
        "phone": "00000-0000",
        "status": "New",
        "createdAt": "2025-03-26T20:11:34.150Z",
        "updatedAt": "2025-03-26T20:11:34.150Z",
        "campaigns": [
            {
                "campaignId": 1,
                "leadId": 1,
                "status": "New"
            }
        ],
        "groups": [
            {
                "id": 1,
                "name": "Grupo A",
                "description": "Grupo A..."
            }
        ]
    }
}
```

<h3 id="create-leads-detail">POST api/leads </h3>

**REQUEST**

```json
{
    "name": "John Doe",
    "email": "john@gmail.com",
    "phone": "00000-0000",
    "status": "New"
}
```

**RESPONSE**

```json
{
    "id": 2,
    "name": "John Doe",
    "email": "john@gmail.com",
    "phone": "00000-0000",
    "status": "New",
    "createdAt": "2025-03-28T22:15:49.122Z",
    "updatedAt": "2025-03-28T22:15:49.122Z"
}
```

<h3 id="update-single-lead-detail">PUT api/leads/:id </h3>

**REQUEST**

```json
{
    "name": "John Doe Updated",
    "email": "johnupdated@gmail.com",
    "phone": "00000-0001",
    "status": "Contacted"
}
```

**RESPONSE**

```json
{
    "updatedLead": {
        "id": 2,
        "name": "John Doe Updated",
        "email": "johnupdated@gmail.com",
        "phone": "00000-0001",
        "status": "Contacted",
        "createdAt": "2025-03-28T22:15:49.122Z",
        "updatedAt": "2025-03-28T22:19:26.314Z"
    }
}
```

<h3 id="delete-single-lead-detail">DELETE api/leads/:id </h3>

**RESPONSE**

```json
{
    "deletedLead": {
        "id": 3,
        "name": "John Doe",
        "email": "john@gmail.com",
        "phone": "00000-0000",
        "status": "New",
        "createdAt": "2025-03-28T22:21:09.072Z",
        "updatedAt": "2025-03-28T22:21:09.072Z"
    }
}
```

<h3 id="get-groups-detail">GET api/groups</h3>

**RESPONSE**

```json
[
    {
        "id": 1,
        "name": "Grupo A",
        "description": "Grupo A..."
    }
]
```

<h3 id="get-single-group-detail">GET api/groups/:id</h3>

**RESPONSE**

```json
{
    "id": 1,
    "name": "Grupo A",
    "description": "Grupo A...",
    "leads": [
        {
            "id": 1,
            "name": "Gabriel",
            "email": "gabriel@gmail.com",
            "phone": "00000-0000",
            "status": "New",
            "createdAt": "2025-03-26T20:11:34.150Z",
            "updatedAt": "2025-03-26T20:11:34.150Z"
        }
    ]
}
```

<h3 id="create-groups-detail">POST api/groups</h3>

**REQUEST**

```json
{
    "name": "Grupo C",
    "description": "Grupo C..."
}
```

**RESPONSE**

```json
{
    "newGroup": {
        "id": 4,
        "name": "Grupo C",
        "description": "Grupo C..."
    }
}
```

<h3 id="update-single-group-detail">PUT api/groups/:id</h3>

**REQUEST**

```json
{
    "name": "Grupo D",
    "description": "Grupo D"
}
```

**RESPONSE**

```json
{
    "updatedGroup": {
        "id": 4,
        "name": "Grupo D",
        "description": "Grupo D"
    }
}
```

<h3 id="delete-single-group-detail">DELETE api/groups/:id</h3>

**RESPONSE**

```json
{
    "deletedGroup": {
        "id": 4,
        "name": "Grupo D",
        "description": "Grupo D"
    }
}
```


<h3 id="get-campaigns-detail">GET api/campaigns</h3>
<h3 id="get-single-campaign-detail">GET api/campaings/:id</h3>
<h3 id="create-campaigns-detail">POST api/campaigns<h3>
<h3 id="update-single-campaign-detail">PUT api/campaings/:id</h3>
<h3 id="delete-single-campaign-detail">DELETE api/campaigns/:id</h3>

<h3 id="get-lead-groups-detail">GET api/groups/:groupId/leads</h3>
<h3 id="create-lead-groups-detail">POST api/groups/:groupId/leads</h3>
<h3 id="delete-lead-group-detail">DELETE api/groups/:groupId/leads/:leadId</h3>

<h3 id="get-lead-campaigns-detail">GET api/campaigns/:campaignId/leads</h3>
<h3 id="create-lead-campaigns-detail">POST api/campaigns/:campaignId/leads <h3>
<h3 id="update-lead-campaign-detail">PUT api/campaings/:campaignId/leads/:leadId</h3>
<h3 id="delete-lead-campaign-detail">DELETE api/campaigns/:campaignId/leads/:leadId</h3>



