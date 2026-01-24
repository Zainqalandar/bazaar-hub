import clientPromise from "./mongodb";
import { Db, Collection } from "mongodb";

const DB_NAME = process.env.MONGODB_DB ?? "bazaar-hub";

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(DB_NAME);
}

export async function getCollection<T = any>(name: string): Promise<Collection<T>> {
  const db = await getDb();
  return db.collection<T>(name);
}