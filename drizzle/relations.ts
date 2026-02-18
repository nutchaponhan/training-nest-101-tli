import { relations } from 'drizzle-orm/relations';
import { productConfig, productRider } from './schema';

export const productRiderRelations = relations(productRider, ({ one }) => ({
  productConfig: one(productConfig, {
    fields: [productRider.planCode],
    references: [productConfig.planCode],
  }),
}));

export const productConfigRelations = relations(productConfig, ({ many }) => ({
  productRiders: many(productRider),
}));
