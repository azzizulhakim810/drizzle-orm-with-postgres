import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";

/* export const User = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  fullName: varchar("full_name", { length: 255 }),
  phone: varchar("phone", { length: 255 }),
  email: varchar("email", { length: 255 }),
}); */

export const User = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 255 }),
  email: varchar("email", { length: 255 }),
});
