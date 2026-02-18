import { Module, Global } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../../drizzle/schema';
import { DRIZZLE } from './database.constants';
import { DatabaseService } from './database.service';
import { ProductConfigRepository } from './repositories/product-config.repository';
import { ProductRiderRepository } from './repositories/product-rider.repository';

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
    ProductConfigRepository,
    ProductRiderRepository,
    DatabaseService,
  ],
  exports: [DRIZZLE, DatabaseService],
})
export class DatabaseModule {}
