# CLI Start-Up Guide

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Docker](https://www.docker.com/) & Docker Compose
- npm

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Environment Variables

Create a `.env` file in the project root (or copy the example below):

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5555/training_nest_101
```

## 3. Start PostgreSQL

Start the PostgreSQL container using Docker Compose:

```bash
docker compose up -d
```

This starts PostgreSQL on **port 5555** with:
- **User:** `postgres`
- **Password:** `postgres`
- **Database:** `training_nest_101`

To verify the container is running:

```bash
docker compose ps
```

## 4. Generate & Run Database Migrations

Generate migration files from the Drizzle schema:

```bash
npm run db:generate
```

Apply migrations to the database:

```bash
npm run db:migrate
```

## 5. Start the Application

Development mode (with hot-reload):

```bash
npm run start:dev
```

Production mode:

```bash
npm run build
npm run start:prod
```

The app will be available at **http://localhost:3000**.

Visit `GET /` to see the **Hello World!** response.

## Useful Commands

| Command              | Description                          |
|----------------------|--------------------------------------|
| `npm run start:dev`  | Start in watch mode (development)    |
| `npm run build`      | Compile TypeScript to JavaScript     |
| `npm run start:prod` | Start compiled app (production)      |
| `npm run db:generate`| Generate Drizzle migration files     |
| `npm run db:migrate` | Apply migrations to the database     |
| `npm run db:studio`  | Open Drizzle Studio (DB GUI)         |
| `docker compose up -d`   | Start PostgreSQL container       |
| `docker compose down`    | Stop PostgreSQL container        |

## Stopping Everything

```bash
docker compose down
```

To also remove the persisted database volume:

```bash
docker compose down -v
```
