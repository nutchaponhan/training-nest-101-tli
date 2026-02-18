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
