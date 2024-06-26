import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "../src/db/db";
import path from "path";

// this will automatically run needed migrations on the database
migrate(db, { migrationsFolder: path.resolve("migration") })
  .then(() => {
    console.log("Migration Complete!");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Migration Failed", err);
    process.exit(1);
  });
