# API de Gestão de Leads (Documentação em construção)

Aplicação criada no curso de Prisma ORM com NodeJS e Typescript da empresa OneBitCode.

Esta aplicação é uma API de gestão de leads, grupos e campanhas.

## Tecnologias Utilizadas

- NodeJS
- Typescript
- Express
- Prisma
- Zod
- Postman (Testes e documentação)

## Uso da API

[![Documentação da API](https://img.shields.io/badge/Postman-API%20Docs-orange?logo=postman)](https://go.postman.co/workspace/My-Workspace~1d21932c-7a79-4efd-88ad-a5fe0e3d3d5b/documentation/32350193-c8312e8c-2b91-413f-b0d6-867d0d5f89ff?entity=folder-40fe5421-0403-4869-a51a-6f7e28a76de6)

## Instalação (Em desenvolvimento)

## Rotas da API

### Rotas para Leads

- **`POST /leads`** – Criar um novo lead.
- **`GET /leads`** – Listar todos os leads.
- **`PUT /leads/:id`** – Atualizar um lead.
- **`DELETE /leads/:id`** – Remover um lead.

### Rotas para Grupos

- **`POST /groups`** – Criar um novo Grupo.
- **`GET /groups`** – Listar todos os Grupos.
- **`PUT /groups/:id`** – Atualizar um Grupo.
- **`DELETE /groups/:id`** – Remover um Grupo.

### Rotas para Campanhas

- **`POST /campaigns`** – Criar uma nova Campanha.
- **`GET /campaigns`** – Listar todos as Campanhas.
- **`PUT /campaigns/:id`** – Atualizar uma Campanha.
- **`DELETE /campaigns/:id`** – Remover uma Campanha.

### Rotas para Leads de Grupos

- **`POST /groups/:groupId/leads`** – Adcionar um Lead em um grupo.
- **`GET /groups/:groupId/leads`** – Pegar todos os Leads de um grupo.
- **`DELETE /groups/:groupId/leads/:leadId`** – Remover um lead de um grupo.

### Rotas para Leads de Campanhas

- **`POST /campaigns/:campaignId/leads`** – Adcionar um Lead em uma campanha.
- **`GET /campaigns/:campaignId/leads`** – Pegar todos os Leads de uma campanha.
- **`PUT /campaigns/:campaignId/leads/:leadId`** – Atualizar status de uma lead na sua campanha
- **`DELETE /campaigns/:campaignId/leads/:leadId`** – Remover um lead de uma campanha.



