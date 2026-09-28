# Node TypeScript API

![CI](https://img.shields.io/github/actions/workflow/status/WisemanTsusi/node-typescript-api/ci.yml?branch=main&label=CI&logo=githubactions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![OpenAPI](https://img.shields.io/badge/OpenAPI-3.1-6BA539?logo=openapiinitiative&logoColor=white)

A production-oriented **Node.js + TypeScript REST API reference implementation** for demonstrating backend engineering, API design, validation, authentication, authorization, observability and cloud-ready architecture.

This is generic portfolio code. It contains no proprietary Ceribro™, Genius Geeks, employer or client source code.

## Features
- Express 5
- TypeScript
- REST API versioning
- Zod request validation
- JWT bearer authentication
- Role-aware authorization primitive
- Service/repository separation
- Centralized error handling
- Request IDs and structured logs
- OpenAPI 3.1 contract
- Automated API tests
- Docker
- GitHub Actions CI
- Health/readiness endpoints
- Provider-neutral persistence boundary

## API
`GET /health`, `GET /ready`, `POST /api/v1/auth/token`, `GET /api/v1/users/me`, CRUD `/api/v1/tasks`, and `GET /openapi.json`.

Demo credentials: `admin@example.com` or `user@example.com`, password `change-me`. These are for local demonstration only.

## Start
```bash
npm install
cp .env.example .env
npm run dev
```

Then visit `http://localhost:3000/health`.

## Scripts
`npm run dev` · `npm run typecheck` · `npm test` · `npm run build` · `npm run lint`

## Architecture
```text
Client
  |
  v
Express 5
  |-- Security / Request ID / Logging
  |-- Authentication / Validation
  v
Routes -> Services -> Repository -> Persistence
```

The in-memory repository is intentionally replaceable with PostgreSQL, MySQL, DynamoDB, MongoDB or an external service adapter.

## Production evolution
Add a managed identity provider, secure password hashing where applicable, asymmetric JWT key rotation, rate limiting, secret management, database migrations, observability, API gateway/WAF, security scanning and audit logging.

See `docs/architecture.md`, `docs/security.md` and `docs/api-design.md`.

## Portfolio relevance
This reference implementation demonstrates backend engineering for full-stack applications, SaaS platforms, enterprise APIs, integration services, AI platform backends and cloud-native systems.

## License
MIT.
