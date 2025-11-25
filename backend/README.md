# 🔧 Urban Report Backend API

Backend con arquitectura hexagonal para la aplicación App Urbana Reporta.

## 📋 Características

- **Arquitectura Hexagonal** (Puertos y Adaptadores)
- **TypeScript** para type safety
- **Express.js** para el servidor HTTP
- **PostgreSQL** como base de datos
- **JWT** para autenticación
- **Bcrypt** para hasheo de contraseñas
- **CORS** configurado para frontend web y mobile

## 🏗️ Estructura del Proyecto

\`\`\`
backend/
├── src/
│   ├── domain/                    # Capa de Dominio (Lógica de Negocio)
│   │   ├── entities/              # Entidades del dominio
│   │   │   ├── User.ts
│   │   │   ├── Report.ts
│   │   │   └── Comment.ts
│   │   └── ports/                 # Interfaces (Puertos)
│   │       ├── IUserRepository.ts
│   │       ├── IReportRepository.ts
│   │       ├── ICommentRepository.ts
│   │       └── IAuthService.ts
│   │
│   ├── application/               # Capa de Aplicación (Casos de Uso)
│   │   └── usecases/
│   │       ├── auth/
│   │       │   ├── LoginUseCase.ts
│   │       │   └── RegisterUseCase.ts
│   │       └── reports/
│   │           ├── CreateReportUseCase.ts
│   │           ├── GetReportsUseCase.ts
│   │           ├── UpdateReportUseCase.ts
│   │           └── DeleteReportUseCase.ts
│   │
│   └── infrastructure/            # Capa de Infraestructura (Adaptadores)
│       ├── database/
│       │   └── connection.ts      # Pool de conexiones PostgreSQL
│       ├── repositories/          # Implementaciones de repositorios
│       │   ├── PostgresUserRepository.ts
│       │   ├── PostgresReportRepository.ts
│       │   └── PostgresCommentRepository.ts
│       ├── adapters/
│       │   └── AuthService.ts     # JWT y Bcrypt
│       └── http/
│           ├── server.ts          # Configuración Express
│           ├── middleware/
│           │   └── authMiddleware.ts
│           └── routes/
│               ├── authRoutes.ts
│               ├── reportRoutes.ts
│               ├── userRoutes.ts
│               ├── commentRoutes.ts
│               └── categoryRoutes.ts
\`\`\`

## 🚀 Instalación

### 1. Instalar Dependencias

\`\`\`bash
cd backend
npm install
\`\`\`

### 2. Configurar Variables de Entorno

Copia el archivo `.env.example` a `.env`:

\`\`\`bash
cp .env.example .env
\`\`\`

Edita `.env` con tus credenciales:

\`\`\`env
PORT=3000
NODE_ENV=development

# PostgreSQL
DATABASE_URL=postgresql://postgres:tu_password@localhost:5432/urban_report_db
DB_HOST=localhost
DB_PORT=5432
DB_NAME=urban_report_db
DB_USER=postgres
DB_PASSWORD=tu_password

# JWT
JWT_SECRET=clave_secreta_super_segura_minimo_32_caracteres_aleatorios
JWT_EXPIRES_IN=7d

# CORS
FRONTEND_URL=http://localhost:3001
MOBILE_URL=http://localhost:19000
\`\`\`

### 3. Crear la Base de Datos

1. Abrir pgAdmin 4
2. Crear base de datos: `urban_report_db`
3. Ejecutar el script: `../database/schema.sql`

### 4. Correr el Servidor

\`\`\`bash
# Modo desarrollo (con hot reload)
npm run dev

# Compilar para producción
npm run build

# Correr producción
npm start
\`\`\`

## 📡 Endpoints de la API

### 🔐 Autenticación (`/api/auth`)

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| POST | `/login` | Login de usuario | ❌ |
| POST | `/register` | Registro de usuario | ❌ |

**Ejemplo Login:**
\`\`\`bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"usuario@urbana.com","password":"usuario123"}'
\`\`\`

**Respuesta:**
\`\`\`json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1",
    "name": "Usuario Demo",
    "email": "usuario@urbana.com",
    "role": "user"
  }
}
\`\`\`

### 📋 Reportes (`/api/reports`)

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/` | Listar reportes | ✅ |
| POST | `/` | Crear reporte | ✅ |
| GET | `/:id` | Ver reporte | ✅ |
| PUT | `/:id` | Actualizar reporte | ✅ |
| DELETE | `/:id` | Eliminar reporte | ✅ Admin |

**Ejemplo Crear Reporte:**
\`\`\`bash
curl -X POST http://localhost:3000/api/reports \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "categoryId": "1",
    "title": "Basura acumulada",
    "description": "Hay basura en la esquina",
    "address": "Calle 50 #10-20",
    "latitude": 4.6486259,
    "longitude": -74.0742257,
    "imageUrls": []
  }'
\`\`\`

### 👥 Usuarios (`/api/users`)

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/` | Listar usuarios | ✅ Admin |
| GET | `/me` | Ver perfil propio | ✅ |
| PUT | `/me` | Actualizar perfil | ✅ |
| DELETE | `/:id` | Eliminar usuario | ✅ Admin |

### 💬 Comentarios (`/api/comments`)

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/report/:reportId` | Listar comentarios | ✅ |
| POST | `/` | Crear comentario | ✅ |

### 🏷️ Categorías (`/api/categories`)

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/` | Listar categorías | ❌ |
| GET | `/:id` | Ver categoría | ❌ |
| GET | `/stats/summary` | Estadísticas | ❌ |

### ❤️ Health Check

\`\`\`bash
curl http://localhost:3000/api/health
\`\`\`

Respuesta:
\`\`\`json
{
  "status": "ok",
  "message": "Urban Report API is running"
}
\`\`\`

## 🔑 Autenticación

La API usa **JWT (JSON Web Tokens)** para autenticación.

### Obtener Token

\`\`\`bash
POST /api/auth/login
{
  "email": "usuario@urbana.com",
  "password": "usuario123"
}
\`\`\`

### Usar Token en Requests

Agrega el header `Authorization` con el token:

\`\`\`bash
Authorization: Bearer YOUR_JWT_TOKEN
\`\`\`

## 🧪 Credenciales de Prueba

\`\`\`
Usuario Normal:
- Email: usuario@urbana.com
- Password: usuario123

Administrador:
- Email: admin@urbana.com
- Password: admin123
\`\`\`

## 🔒 Roles y Permisos

- **user**: Puede crear y ver sus propios reportes
- **admin**: Puede ver todos los reportes, cambiar estados, y gestionar usuarios

## 🐛 Debugging

El servidor muestra logs en consola:

\`\`\`
🚀 Starting Urban Report API...
✅ Conectado a PostgreSQL
🔍 Test de conexión exitoso: 2024-01-15T10:30:00.000Z
✅ Server running on port 3000
📍 Health check: http://localhost:3000/api/health
\`\`\`

## 🛠️ Tecnologías

- **Express** - Framework web
- **TypeScript** - Lenguaje tipado
- **PostgreSQL** - Base de datos
- **pg** - Cliente PostgreSQL
- **JWT** - Autenticación
- **Bcrypt** - Hash de contraseñas
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Variables de entorno

## 📝 Arquitectura Hexagonal

Este proyecto sigue los principios de arquitectura hexagonal:

1. **Dominio**: Lógica de negocio pura, sin dependencias externas
2. **Aplicación**: Casos de uso que orquestan la lógica
3. **Infraestructura**: Adaptadores para DB, HTTP, etc.

**Beneficios:**
- ✅ Fácil de testear
- ✅ Desacoplamiento de tecnologías
- ✅ Fácil de mantener y extender
- ✅ Cambiar PostgreSQL por otro DB es trivial

## 🚨 Solución de Problemas

### Error: "Cannot connect to database"
- Verifica que PostgreSQL esté corriendo
- Revisa las credenciales en `.env`
- Verifica que la base de datos existe

### Error: "Port 3000 already in use"
- Cambia el puerto en `.env`: `PORT=3001`

### Error: "Invalid token"
- El token expiró, haz login nuevamente
- Verifica que el header sea correcto

## 📚 Próximos Pasos

- [ ] Agregar tests unitarios
- [ ] Agregar documentación Swagger/OpenAPI
- [ ] Implementar rate limiting
- [ ] Agregar logs estructurados
- [ ] Agregar validación con Zod
- [ ] Implementar caché con Redis

---

**¡Listo para desarrollar!** 🎉
