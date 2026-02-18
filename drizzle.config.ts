import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    port: 5555,
    user: 'postgres',
    password: 'postgres',
    database: 'training-nest-101',
    ssl: false,
  },
  verbose: true,
  strict: true,
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
