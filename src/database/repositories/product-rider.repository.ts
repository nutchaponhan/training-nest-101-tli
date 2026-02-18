import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../../drizzle/schema';
import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from '../database.constants';

@Injectable()
export class ProductRiderRepository {
  constructor(
    @Inject(DRIZZLE)
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async findAll() {
    return this.db.select().from(schema.productRider);
  }

  async findByPlanCode(planCode: string) {
    return this.db
      .select()
      .from(schema.productRider)
      .where(eq(schema.productRider.planCode, planCode));
  }
}
