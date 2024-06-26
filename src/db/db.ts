import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  // connectionString: "postgres://user:password@host:port/db",
  connectionString:
    "postgresql://postgres:01611725282@localhost:5432/postgres?schema=public",
});

const db = drizzle(pool);
export { db };
