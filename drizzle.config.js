import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './configs/schema.jsx', // Update the extension to .js if your schema is in JavaScript
  dialect: 'postgresql', // Ensure dialect is correct; 'postgres' is typically used for Drizzle
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING, // Remove the non-null assertion operator (!), not used in JavaScript
  },
});
