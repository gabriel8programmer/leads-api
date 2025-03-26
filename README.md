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
