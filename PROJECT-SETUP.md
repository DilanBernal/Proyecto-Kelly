# 🚀 App Urbana Reporta - Guía Completa de Instalación

## 📁 Estructura del Proyecto

\`\`\`
urban-report-app/
├── admin-web/          # 🖥️ Frontend Web (Next.js) - Panel de Administración
├── user-mobile/        # 📱 Frontend Mobile (Expo) - App de Usuario
├── backend/            # ⚙️ Backend API (Node.js + Express + TypeScript)
├── database/           # 🗄️ Scripts SQL para PostgreSQL
└── PROJECT-SETUP.md    # 📖 Esta guía
\`\`\`

---

## ⚡ Instalación Rápida

### 1️⃣ Requisitos Previos

- **Node.js** v18 o superior → [Descargar](https://nodejs.org/)
- **PostgreSQL** 14 o superior → [Descargar](https://www.postgresql.org/download/)
- **pgAdmin 4** → [Descargar](https://www.pgadmin.org/download/)
- **Git** → [Descargar](https://git-scm.com/)
- **Expo Go** (app móvil) → [iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

### 2️⃣ Configurar la Base de Datos

1. **Abrir pgAdmin 4**
2. Crear una nueva base de datos llamada `urban_report_db`
3. Click derecho en la base de datos → **Query Tool**
4. Abrir el archivo `database/schema.sql` y copiar todo el contenido
5. Pegar en Query Tool y ejecutar (F5)
6. Verificar que se crearon las tablas y datos de prueba

**Credenciales de prueba creadas:**
- **Usuario:** usuario@urbana.com / password: usuario123
- **Admin:** admin@urbana.com / password: admin123

---

### 3️⃣ Configurar y Correr el Backend

\`\`\`bash
# 1. Ir a la carpeta del backend
cd backend

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env
cp .env.example .env

# 4. Editar .env con tus datos de PostgreSQL
nano .env  # O abre con tu editor favorito

# 5. Correr el servidor
npm run dev
\`\`\`

**El backend estará corriendo en:** `http://localhost:3000`

---

### 4️⃣ Configurar y Correr el Admin Web (Next.js)

\`\`\`bash
# 1. Ir a la carpeta admin-web
cd admin-web

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env.local

# 4. Correr la aplicación
npm run dev
\`\`\`

**La app web estará en:** `http://localhost:3001`

**Acceso:** Ingresa con `admin@urbana.com` / `admin123`

---

### 5️⃣ Configurar y Correr el User Mobile (Expo)

\`\`\`bash
# 1. Ir a la carpeta user-mobile
cd user-mobile

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env
echo "API_URL=http://TU_IP_LOCAL:3000" > .env

# 4. Obtener tu IP local
# En Windows: ipconfig
# En Mac/Linux: ifconfig

# 5. Correr Expo
npx expo start
\`\`\`

**Escanea el QR con Expo Go** en tu celular

**Acceso:** Ingresa con `usuario@urbana.com` / `usuario123`

---

## 🔧 Configuración de Variables de Entorno

### Backend (.env)
\`\`\`env
PORT=3000
DATABASE_URL=postgresql://postgres:tu_password@localhost:5432/urban_report_db
JWT_SECRET=tu_clave_secreta_super_segura_cambiar_en_produccion
\`\`\`

### Admin Web (.env.local)
\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

### User Mobile (.env)
\`\`\`env
API_URL=http://TU_IP_LOCAL:3000
\`\`\`

---

## 📱 Cómo Obtener tu IP Local

### Windows (CMD o PowerShell)
\`\`\`bash
ipconfig
# Busca "IPv4 Address" en tu conexión WiFi/Ethernet
\`\`\`

### Mac/Linux (Terminal)
\`\`\`bash
ifconfig
# Busca "inet" en tu conexión WiFi/Ethernet
\`\`\`

**Ejemplo:** Si tu IP es `192.168.1.10`, usa `API_URL=http://192.168.1.10:3000`

---

## ✅ Verificar que Todo Funciona

### 1. Backend
\`\`\`bash
curl http://localhost:3000/api/health
# Debería responder: {"status":"ok"}
\`\`\`

### 2. Admin Web
- Abre `http://localhost:3001`
- Login con `admin@urbana.com` / `admin123`
- Deberías ver el dashboard con estadísticas

### 3. User Mobile
- Abre Expo Go en tu celular
- Escanea el QR
- Login con `usuario@urbana.com` / `usuario123`
- Deberías ver la pantalla de inicio

---

## 🐛 Solución de Problemas Comunes

### ❌ Error: "Cannot connect to database"
- Verifica que PostgreSQL esté corriendo
- Verifica las credenciales en `backend/.env`
- Verifica que la base de datos `urban_report_db` existe

### ❌ Error: "Network request failed" en mobile
- Verifica que usaste tu IP local (no localhost)
- Verifica que el backend está corriendo
- Verifica que tu celular y PC están en la misma red WiFi

### ❌ Error: "Port 3000 already in use"
- Cambia el puerto en `backend/.env` y actualiza las URLs en los frontends

---

## 📚 Estructura de Carpetas Detallada

### Backend (Arquitectura Hexagonal)
\`\`\`
backend/
├── src/
│   ├── domain/              # Entidades y puertos (interfaces)
│   │   ├── entities/        # User, Report, Comment
│   │   └── ports/           # Interfaces de repositorios
│   ├── application/         # Casos de uso (lógica de negocio)
│   │   └── usecases/        # Login, Register, CRUD Reports
│   └── infrastructure/      # Adaptadores (DB, HTTP, JWT)
│       ├── database/        # Repositorios PostgreSQL
│       ├── http/            # Routes, Controllers, Middleware
│       └── adapters/        # JWT, Bcrypt
\`\`\`

### Admin Web (Next.js)
\`\`\`
admin-web/
├── app/
│   ├── dashboard/           # Panel principal
│   ├── reports/             # Gestión de reportes
│   ├── users/               # Gestión de usuarios
│   └── settings/            # Configuración
└── components/              # Componentes reutilizables
\`\`\`

### User Mobile (Expo)
\`\`\`
user-mobile/
├── app/
│   ├── (tabs)/              # Navegación por tabs
│   │   ├── home/            # Pantalla principal
│   │   ├── reports/         # Mis reportes
│   │   └── profile/         # Perfil
│   └── create-report/       # Crear reporte
└── components/              # Componentes reutilizables
\`\`\`

---

## 🎯 Próximos Pasos

1. ✅ Instalar todos los requisitos
2. ✅ Configurar la base de datos
3. ✅ Correr el backend
4. ✅ Correr admin web
5. ✅ Correr user mobile
6. 🚀 ¡Empezar a desarrollar!

---

## 📞 Soporte

Si tienes problemas, verifica:
1. Todos los servicios estén corriendo (PostgreSQL, Backend)
2. Las variables de entorno estén configuradas correctamente
3. Las dependencias estén instaladas (`node_modules` existe)
4. Los puertos no estén siendo usados por otras aplicaciones

---

**¡Listo! Ahora tienes la aplicación completa funcionando** 🎉
