import { Pool } from "pg"

// Configuración del pool de conexiones a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  max: 20, // Máximo de conexiones en el pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Evento de conexión exitosa
pool.on("connect", () => {
  console.log("✅ Conectado a PostgreSQL")
})

// Evento de error
pool.on("error", (err) => {
  console.error("❌ Error inesperado en PostgreSQL:", err)
  process.exit(-1)
})

// Función para verificar la conexión
export async function testConnection() {
  try {
    const client = await pool.connect()
    const result = await client.query("SELECT NOW()")
    client.release()
    console.log("🔍 Test de conexión exitoso:", result.rows[0].now)
    return true
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error)
    return false
  }
}

export default pool
