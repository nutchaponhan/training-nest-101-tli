## Steps

### 1. Install dependencies

```bash
npm install
```

### 2. Start Docker Compose

Starts the postgres container in detached mode.

```bash
docker compose up
```

### 3. Import SQL dump into database

Loads `ms-sale-db.sql` into the `training-nest-101` database.

```bash
docker compose exec -T postgres psql -U postgres -d training-nest-101 < ms-sale-db.sql
```

### 4. Create .env file

```bash
cp .env.example .env
```

### 5. Run NestJS Application

```bash
npm run start:dev
```

App runs at http://localhost:8000

### 6. Test Route

```bash
at http://localhost:8000/product-configs
```
