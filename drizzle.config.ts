import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/database/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  tablesFilter: [
    // base-plan
    'product_config',

    // base-rider
    'product_rider',
  ],
  schemaFilter: ['public'],
  introspect: {
    casing: 'camel',
  },
});
