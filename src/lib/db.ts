import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"
import { env } from "./env"

declare global {
    var prisma: PrismaClient | undefined
    var pool: Pool | undefined
}

const pool = globalThis.pool || new Pool({ connectionString: env.DATABASE_URL })
const adapter = new PrismaPg(pool)

const db = globalThis.prisma || new PrismaClient({
    adapter,
    log: ["warn", "error"],
})

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db
    globalThis.pool = pool
}

export default db;
