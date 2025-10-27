import { connectDB } from "../database";
import { Resource } from "../models/resource.model";

export async function createTable() {
  const db = await connectDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS resources (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT
    )
  `);
}

export async function createResource(data: Resource) {
  const db = await connectDB();
  const result = await db.run(
    "INSERT INTO resources (name, description) VALUES (?, ?)",
    [data.name, data.description]
  );
  return { id: result.lastID, ...data };
}

export async function getAllResources(filter?: string) {
  const db = await connectDB();
  const sql = filter
    ? "SELECT * FROM resources WHERE name LIKE ?"
    : "SELECT * FROM resources";
  const rows = await db.all(sql, filter ? [`%${filter}%`] : []);
  return rows;
}

export async function getResourceById(id: number) {
  const db = await connectDB();
  return db.get("SELECT * FROM resources WHERE id = ?", [id]);
}

export async function updateResource(id: number, data: Resource) {
  const db = await connectDB();
  await db.run(
    "UPDATE resources SET name = ?, description = ? WHERE id = ?",
    [data.name, data.description, id]
  );
  return getResourceById(id);
}

export async function deleteResource(id: number) {
  const db = await connectDB();
  await db.run("DELETE FROM resources WHERE id = ?", [id]);
}
