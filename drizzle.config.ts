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
    /**
     * TODO-0 : add table to pull schema
     */
    // 'product_config'
  ],
  schemaFilter: ['public'],
  introspect: {
    casing: 'camel',
  },
});
