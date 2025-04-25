
# API de Infrações do CTB

![Status](https://img.shields.io/website?url=https://ctb-api.onrender.com&label=API%20Online&style=flat)
![Node.js](https://img.shields.io/badge/Node.js-ESM-green)
![Express](https://img.shields.io/badge/Express.js-API-lightgrey)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![CI](https://github.com/mpfarias/ctb-api/actions/workflows/nodejs.yml/badge.svg)

Esta é uma API pública que fornece as infrações previstas no Código de Trânsito Brasileiro (CTB), estruturadas em JSON, com base legal, pontuação, valores e medidas administrativas. Desenvolvida com Node.js, Express e documentada com Swagger.

## 🔗 Links

- [API Principal](https://ctb-api.onrender.com)
- [Documentação Swagger](https://ctb-api.onrender.com/api-docs)

## 📦 Tecnologias Utilizadas

- Node.js + Express (ESM)
- Swagger UI (documentação)
- express-rate-limit (controle de requisições)
- morgan (log de requisições)
- node-cache (cache em memória)

## 📖 Endpoints Disponíveis

### `GET /infracoes`
Lista todas as infrações disponíveis no CTB.

### `GET /infracoes/:artigo`
Retorna os dados da infração com base no número do artigo.

### `GET /infracoes/codigo/:codigo`
Retorna a infração com base no código RENAINF.

## 🛡️ Segurança e Performance

- Limite de requisições: 60 por minuto por IP (Rate Limit).
- Cache em memória por 5 minutos para resposta rápida e escalável.
- Logs de todas as requisições com Morgan.

## ⚙️ Como Rodar Localmente

```bash
git clone https://github.com/mpfarias/ctb-api
cd nome-do-repo
npm install
node app.js
```

Acesse em: http://localhost:3000

## 📝 Licença

Este projeto está licenciado sob a licença MIT. Use livremente para fins educativos ou informativos.
