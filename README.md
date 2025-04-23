# 🚦 API CTB - Infrações do Código de Trânsito Brasileiro

Esta é uma API pública para consulta de infrações do CTB (Código de Trânsito Brasileiro), construída com Node.js, Express e documentada com Swagger.

## 🧰 Tecnologias utilizadas

- Node.js
- Express
- Swagger (swagger-ui-express + swagger-jsdoc)
- ESM (ECMAScript Modules)

## 🔗 Rotas disponíveis

- `GET /infracoes` – Lista todas as infrações
- `GET /infracoes/:codigo` – Consulta por código de infração
- `GET /api-docs` – Acesso à documentação Swagger

## 🚀 Como rodar localmente

```bash
git clone https://github.com/mpfarias/ctb-api.git
cd ctb-api
npm install
npm run dev