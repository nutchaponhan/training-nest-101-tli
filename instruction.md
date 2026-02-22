## TODO-0 : add table to pull schema

add 'product_config' and run

```
npm run db:pull
```

---

## TODO-1: create repository file for product_config

create `src/database/repositories/product-config.repository.ts`

```
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../../drizzle/schema';

import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from '../database.constants';

@Injectable()
export class ProductConfigRepository {
  constructor(
    @Inject(DRIZZLE)
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async findAll() {
    return this.db.select().from(schema.productConfig);
  }
}
```

---

## TODO-2: Export ProductConfigRepository

`at src/database/repositories/index.ts`

## TODO-3: Import ProductConfigRepository and add into providers

`at src/database/database.module.ts`

## TODO-4: query data using repository

`at src/app.controller.ts`
