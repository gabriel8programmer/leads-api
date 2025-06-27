<h1 align="center" style="font-weight: bold;">API de Leads (Documentando...)</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-4323d5.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="typescript" />
  <img src="https://img.shields.io/badge/Node.js-4323d5.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
  <img src="https://img.shields.io/badge/express-4323d5?style=for-the-badge&logo=express" alt="express" />
  <img src="https://img.shields.io/badge/prisma-4323d5?style=for-the-badge&logo=prisma" alt="prisma" />
  <img src="https://img.shields.io/badge/zod-4323d5?style=for-the-badge&logo=zod" alt="zod" />
  <img src="https://img.shields.io/badge/Postman-4323d5?style=for-the-badge&logo=postman&logoColor=white" alt="postman" />
  <img src="https://img.shields.io/badge/Docker-4323d5.svg?style=for-the-badge&logo=Docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Swagger-4323d5.svg?style=for-the-badge&logo=Swagger&logoColor=white" alt="swagger" />
</div>

<br/>

<p align="center">
 <a href="#started">Começando</a> • 
  <a href="#routes">Endpoints da API</a> •
  <a href="#dev">Desenvolvedor</a>
</p>

- <b>Motor</b>: Nodejs
- <b>Linguagem</b>: Typescript
- <b>Framework</b>: Express
- <b>Database</b>: Postgresql
- <b>ORM</b>: Prisma
- <b>Validação</b>: Zod
- <b>Testes</b>: Postman
- <b>Conteinerização</b>: Docker
- <b>Documentação</b>: Swagger (implementando...)

<h2 id="started">🚀 Começando</h2>

Como rodar o projeto localmente:

<h3>Pré-requisitos</h3>

Para o projeto funcionar de forma ideal, você deve ter instalado em sua máquina as seguintes elementos abaixo:

- [NodeJS](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/)

<h3>Clonando</h3>

Para clonar o projeto, obtenha a URL deste repositório no github clicando no botão verde "Code" e rode o seguinte comando em seu terminal.

```bash
git clone SUA-URL
```

<h3>Variáveis de ambiente</h3>

Crie um arquivo `.env` na raiz da pasta backend e adicione as seguintes variáveis de ambiente:

```yaml
#opcional mas recomendado
PORT=3000
#padrão:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_leads"
#lembre-se de criar a base de dados com o nome de sua escolha em (postgresql)
```

<h3>Iniciando</h3>

Para iniciar o projeto rode os seguintes comandos:

```bash
cd leads-api
npm i #instala as dependências do projeto
docker compose up -d # cria o container do banco de dados postgresql
npm run db:create #cria as tabelas necessárias para o banco
npm run dev #inicia o projeto localmente na porta 3000
```

Após isso, acesse a URL http://localhost:3000 e o projeto estará rodando.

### Testando o Projeto

Você pode testar a API utilizando a ferramenta de sua preferência, como:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)

### Recomendação: Testes via Swagger (API Interativa)

A forma mais simples de explorar e testar os endpoints da aplicação é através da interface interativa do Swagger, disponível em:

[http://localhost:3000/docs](http://localhost:3000/docs)

<h2 id="routes">📍 Endpoints da API</h2>

Aqui estão as rotas da API e quais são os corpos de solicitação esperados. Não há rotas que necessitem de autenticação ou autorização neste API.

As rotas estão divididas em grupos para uma melhor compreensão e coesão.

1. Rotas de leads

| route                             | description                                             |
| --------------------------------- | ------------------------------------------------------- |
| <kbd>GET /api/leads </kbd>        | Obtem todos os leads, veja [request details](#)         |
| <kbd>GET /api/leads/:id </kbd>    | Obtem um lead pelo seu id, veja [request details](#)    |
| <kbd>POST /api/leads </kbd>       | Cria um lead, veja [request details](#)                 |
| <kbd>PUT /api/leads/:id </kbd>    | Atualiza um lead pelo seu id, veja [request details](#) |
| <kbd>DELETE /api/leads/:id </kbd> | Remove um lead pelo seu id, veja [request details](#)   |

<br />

2. Rotas de grupos

| route                              | description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| <kbd>GET /api/groups </kbd>        | Obtem todos os grupos, veja [request details](#)         |
| <kbd>GET /api/groups/:id </kbd>    | Obtem um grupo pelo seu id, veja [request details](#)    |
| <kbd>POST /api/groups </kbd>       | Cria um grupo, veja [request details](#)                 |
| <kbd>PUT /api/groups/:id </kbd>    | Atualiza um grupo pelo seu id, veja [request details](#) |
| <kbd>DELETE /api/groups/:id </kbd> | Remove um grupo pelo seu id, veja [request details](#)   |

<br />

3. Rotas de campanhas

| route                                 | description                                                 |
| ------------------------------------- | ----------------------------------------------------------- |
| <kbd>GET /api/campaigns </kbd>        | Obtem todos os campanhas, veja [request details](#)         |
| <kbd>GET /api/campaigns/:id </kbd>    | Obtem um campanha pelo seu id, veja [request details](#)    |
| <kbd>POST /api/campaigns </kbd>       | Cria um campanha, veja [request details](#)                 |
| <kbd>PUT /api/campaigns/:id </kbd>    | Atualiza um campanha pelo seu id, veja [request details](#) |
| <kbd>DELETE /api/campaigns/:id </kbd> | Remove um campanha pelo seu id, veja [request details](#)   |

<br />

4. Rotas para leads dos grupos

| route                                                 | description                                              |
| ----------------------------------------------------- | -------------------------------------------------------- |
| <kbd>GET /api/groups/:groupId/leads </kbd>            | Obtem todos leads de um grupo, veja [request details](#) |
| <kbd>POST /api/groups/:groupId/leads </kbd>           | Adiciona um lead a um grupo, veja [request details](#)   |
| <kbd>DELETE /api/groups/:groupId/leads/:leadId </kbd> | Remove um lead de um grupo, veja [request details](#)    |

<br />

5. Rotas para leads das campanhas

| route                                                 | description                                                             |
| ----------------------------------------------------- | ----------------------------------------------------------------------- |
| <kbd>GET /api/campaigns/:campaignId/leads </kbd>      | Obtem todos leads de uma campanha, veja [request details](#)            |
| <kbd>POST /api/campaigns/:campaignId/leads </kbd>     | Adiciona um lead a uma campanha, veja [request details](#)              |
| <kbd>PUT /api/campaigns/:campaignId/:leadId </kbd>    | Atualiza o status de um lead em uma campanha, veja [request details](#) |
| <kbd>DELETE /api/campaigns/:campaignId/:leadId </kbd> | Remove um lead de uma campanha, veja [request details](#)               |

<h2 id="dev">Desenvolvedor</h2>

<a href="https://portfolio-backend-bay-two.vercel.app/" target="_blank">
  <table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/c4df01b4-a935-4613-9eb9-aaf04d07b296" height="150" /><br />
      <strong>Gabriel Pereira</strong>
    </td>
  </tr>
</table>
</a>

Sinta-se à vontade para entrar em contato em caso de dúvidas, sugestões ou propostas de colaboração!

<br>

<a href="mailto:gabriel8webprogrammer@gmail.com" target="_blank">
  <img src="https://img.shields.io/badge/Gmail-4323d5?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail"/>
</a>

<a href="https://github.com/gabriel8programmer" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-4323d5.svg?style=for-the-badge&logo=GitHub&logoColor=white" alt="Github" />
</a>

<a href="https://www.linkedin.com/in/gabrielwebprogrammer" target="_blank">
  <img src="https://img.shields.io/badge/linkedin-4323d5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin"/>
</a>

<a href="https://portfolio-backend-bay-two.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Portfolio-4323d5.svg?style=for-the-badge&logo=firefox&logoColor=white" alt="Portfólio" />
</a>
