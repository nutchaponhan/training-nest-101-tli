import { Module, Global } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../../drizzle/schema';
import { DRIZZLE } from './database.constants';
import { DatabaseService } from './database.service';

/**
 * TODO-3: Import ProductConfigRepository and add into providers
 */
// import { ProductConfigRepository } from './repositories/product-config.repository';

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      useFactory: () => {
        const pool = new Pool({
          connectionString: process.env.DATABASE_URL,
        });
        return drizzle(pool, { schema });
      },
    },
    DatabaseService,
  ],
  exports: [DRIZZLE, DatabaseService],
})
export class DatabaseModule {}
