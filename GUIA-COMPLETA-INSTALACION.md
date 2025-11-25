# 🚀 GUÍA COMPLETA DE INSTALACIÓN - APP URBANA REPORTA

## 📁 ESTRUCTURA DEL PROYECTO

\`\`\`
Urban-Report-App/
├── admin-web/          # ✅ Aplicación Web Next.js (SOLO ADMIN - PC/Monitor)
├── mobile-user/        # ✅ Aplicación Expo React Native (SOLO USUARIOS - Celular)
├── backend/            # ✅ Backend Node.js con Arquitectura Hexagonal
├── database/           # ✅ Scripts SQL de PostgreSQL
└── GUIA-COMPLETA-INSTALACION.md
\`\`\`

---

## 🗄️ PASO 1: CONFIGURAR LA BASE DE DATOS POSTGRESQL

### 1.1 Abrir pgAdmin 4

1. Abre **pgAdmin 4**
2. Conecta a tu servidor PostgreSQL local
3. Click derecho en "Databases" → "Create" → "Database"
4. Nombre: `urban_report_db`
5. Click en "Save"

### 1.2 Ejecutar el Script SQL

1. Click derecho en `urban_report_db` → "Query Tool"
2. Abre el archivo `database/schema.sql`
3. Copia TODO el contenido
4. Pega en Query Tool de pgAdmin
5. Click en el botón "▶ Execute" (F5)
6. Verifica que veas el mensaje: "Query returned successfully"

### 1.3 Verificar las Tablas Creadas

Ejecuta este query para verificar:

\`\`\`sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
\`\`\`

Deberías ver: `users`, `reports`, `comments`, `categories`

### 1.4 Verificar Datos de Prueba

\`\`\`sql
-- Ver usuarios creados
SELECT id, name, email, role FROM users;

-- Ver categorías
SELECT * FROM categories;
\`\`\`

Deberías ver:
- **Admin**: admin@urbana.com (contraseña: Admin123!)
- **Usuario**: juan@example.com (contraseña: Usuario123!)

---

## 🖥️ PASO 2: CONFIGURAR EL BACKEND

### 2.1 Navegar a la carpeta backend

\`\`\`bash
cd backend
\`\`\`

### 2.2 Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 2.3 Configurar variables de entorno

Crea un archivo `.env` en la carpeta `backend/`:

\`\`\`bash
cp .env.example .env
\`\`\`

Edita el archivo `.env` con tus credenciales de PostgreSQL:

\`\`\`env
# Puerto del servidor
PORT=3001

# Base de datos PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_NAME=urban_report_db
DB_USER=postgres
DB_PASSWORD=tu_contraseña_de_postgres

# JWT Secret (puedes dejar este por defecto o cambiarlo)
JWT_SECRET=mi_super_secreto_jwt_2024_urban_report_app_seguro
\`\`\`

### 2.4 Iniciar el backend

\`\`\`bash
npm run dev
\`\`\`

Deberías ver:

\`\`\`
✅ Database connected successfully
🚀 Server running on port 3001
\`\`\`

---

## 🌐 PASO 3: CONFIGURAR LA APLICACIÓN WEB ADMIN (Next.js)

### 3.1 Abrir una NUEVA terminal y navegar a admin-web

\`\`\`bash
cd admin-web
\`\`\`

### 3.2 Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 3.3 Configurar variables de entorno

Crea un archivo `.env.local` en la carpeta `admin-web/`:

\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:3001
\`\`\`

### 3.4 Iniciar la aplicación web

\`\`\`bash
npm run dev
\`\`\`

La aplicación web estará disponible en: **http://localhost:3000**

### 3.5 Acceder al panel de administración

1. Abre tu navegador en `http://localhost:3000`
2. Serás redirigido a `/admin/login`
3. Usa las credenciales:
   - **Email**: admin@urbana.com
   - **Contraseña**: Admin123!

---

## 📱 PASO 4: CONFIGURAR LA APLICACIÓN MÓVIL (Expo)

### 4.1 Abrir una NUEVA terminal y navegar a mobile-user

\`\`\`bash
cd mobile-user
\`\`\`

### 4.2 Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 4.3 Configurar la URL del API

Edita el archivo `mobile-user/config/api.ts`:

\`\`\`typescript
// Si estás probando en un celular físico, necesitas la IP de tu PC
// Encuentra tu IP con: ipconfig (Windows) o ifconfig (Mac/Linux)

export const API_URL = 'http://TU_IP_LOCAL:3001'; // Ejemplo: http://192.168.1.100:3001
// Para emulador Android: http://10.0.2.2:3001
// Para emulador iOS: http://localhost:3001
\`\`\`

### 4.4 Iniciar Expo

\`\`\`bash
npx expo start
\`\`\`

### 4.5 Escanear el código QR con Expo Go

1. Descarga **Expo Go** en tu celular (Android/iOS)
2. Escanea el código QR que aparece en la terminal
3. La app se cargará en tu celular

### 4.6 Probar el login de usuario

Usa las credenciales:
- **Email**: juan@example.com
- **Contraseña**: Usuario123!

O crea un nuevo usuario desde la app móvil.

---

## ✅ VERIFICACIÓN FINAL

### Deberías tener 3 terminales abiertas:

1. **Terminal 1 (Backend)**: 
   \`\`\`
   cd backend
   npm run dev
   ✅ Server running on port 3001
   \`\`\`

2. **Terminal 2 (Admin Web)**:
   \`\`\`
   cd admin-web
   npm run dev
   ✅ Next.js on http://localhost:3000
   \`\`\`

3. **Terminal 3 (Mobile App)**:
   \`\`\`
   cd mobile-user
   npx expo start
   ✅ QR Code visible
   \`\`\`

---

## 🧪 PROBAR TODO EL SISTEMA

### Desde la App Móvil (Usuario):
1. Registra un nuevo usuario
2. Inicia sesión
3. Crea un nuevo reporte
4. Sube una foto (opcional)
5. Agrega ubicación
6. Envía el reporte

### Desde la Web Admin:
1. Inicia sesión como admin
2. Ve al Dashboard
3. Verás el reporte creado desde el móvil
4. Cambia el estado del reporte
5. Agrega un comentario
6. Ve las estadísticas

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error: "Cannot connect to database"

1. Verifica que PostgreSQL esté corriendo
2. Verifica las credenciales en `backend/.env`
3. Verifica que la base de datos `urban_report_db` exista

### Error: "Network request failed" en la app móvil

1. Verifica que el backend esté corriendo
2. Verifica que usaste tu IP local correcta en `config/api.ts`
3. Verifica que tu celular y PC estén en la misma red WiFi

### Error: "Port 3000 already in use"

\`\`\`bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <número_del_proceso> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
\`\`\`

---

## 📦 COMANDOS RÁPIDOS

\`\`\`bash
# Instalar todo de una vez (ejecutar desde la raíz)
cd backend && npm install && cd ../admin-web && npm install && cd ../mobile-user && npm install && cd ..

# Iniciar backend
cd backend && npm run dev

# Iniciar admin web
cd admin-web && npm run dev

# Iniciar app móvil
cd mobile-user && npx expo start
\`\`\`

---

## 🔑 CREDENCIALES DE PRUEBA

### Admin (Web):
- Email: `admin@urbana.com`
- Contraseña: `Admin123!`

### Usuario (Móvil):
- Email: `juan@example.com`
- Contraseña: `Usuario123!`

---

## 📞 ENDPOINTS DEL BACKEND

- Base URL: `http://localhost:3001`
- Documentación completa en: `backend/README.md`

### Principales:
- POST `/auth/login` - Login
- POST `/auth/register` - Registro
- GET `/reports` - Listar reportes
- POST `/reports` - Crear reporte
- GET `/users` - Listar usuarios (admin)

---

## 🎉 ¡LISTO!

Si seguiste todos los pasos, ahora tienes:
✅ Base de datos PostgreSQL funcionando
✅ Backend con arquitectura hexagonal
✅ Panel web de administración
✅ App móvil para usuarios

**¡A reportar problemas urbanos! 🌆📱**
