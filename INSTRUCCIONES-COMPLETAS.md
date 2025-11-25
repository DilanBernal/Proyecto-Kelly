# 🚀 Guía Completa de Instalación - App Urbana Reporta

Este proyecto está dividido en 3 partes independientes:

## 📁 Estructura del Proyecto

\`\`\`
/
├── admin-web/          # Aplicación web Next.js para ADMINISTRADORES (PC)
├── mobile-user/        # Aplicación Expo React Native para USUARIOS (Celular)
├── backend/            # API REST con arquitectura hexagonal (Node.js + TypeScript)
└── database/           # Scripts SQL de PostgreSQL
\`\`\`

---

## 🗄️ PASO 1: Configurar la Base de Datos

### 1.1 Instalar PostgreSQL
- Descarga PostgreSQL desde: https://www.postgresql.org/download/
- Instala pgAdmin 4 (viene incluido)

### 1.2 Crear la Base de Datos
1. Abre pgAdmin 4
2. Click derecho en "Databases" → "Create" → "Database"
3. Nombre: `urbana_reporta`
4. Click en "Save"

### 1.3 Ejecutar el Script SQL
1. Click derecho en la base de datos `urbana_reporta`
2. Selecciona "Query Tool"
3. Abre el archivo `database/schema.sql`
4. Copia TODO el contenido
5. Pégalo en el Query Tool
6. Click en el botón "Execute/Run" (▶️) o presiona F5
7. Verifica que dice "Query returned successfully"

### 1.4 Verificar Tablas Creadas
Deberías ver estas tablas:
- ✅ users
- ✅ reports
- ✅ categories
- ✅ comments

**Datos de prueba incluidos:**
- 2 usuarios (1 admin, 1 usuario normal)
- 5 categorías
- 3 reportes de ejemplo

---

## 🔧 PASO 2: Configurar el Backend

### 2.1 Navegar a la carpeta del backend
\`\`\`bash
cd backend
\`\`\`

### 2.2 Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 2.3 Configurar variables de entorno
1. Copia el archivo `.env.example` y renómbralo a `.env`
\`\`\`bash
cp .env.example .env
\`\`\`

2. Edita el archivo `.env` con tus credenciales de PostgreSQL:
\`\`\`env
# Puerto del servidor
PORT=3000

# Base de Datos PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=TU_CONTRASEÑA_DE_POSTGRES
DB_NAME=urbana_reporta

# JWT Secret (puedes dejarlo así o cambiarlo)
JWT_SECRET=tu_super_secreto_jwt_key_12345

# Entorno
NODE_ENV=development
\`\`\`

⚠️ **IMPORTANTE**: Reemplaza `TU_CONTRASEÑA_DE_POSTGRES` con la contraseña que configuraste al instalar PostgreSQL.

### 2.4 Iniciar el backend
\`\`\`bash
npm run dev
\`\`\`

✅ Deberías ver:
\`\`\`
🚀 Server running on port 3000
✅ Database connected successfully
\`\`\`

**Deja esta terminal abierta** (el backend debe estar corriendo siempre)

---

## 💻 PASO 3: Configurar Admin Web (Next.js)

### 3.1 Abrir NUEVA terminal y navegar a admin-web
\`\`\`bash
cd admin-web
\`\`\`

### 3.2 Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 3.3 Configurar variables de entorno
1. Crea un archivo `.env.local` en la carpeta `admin-web/`:
\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

### 3.4 Iniciar la aplicación web
\`\`\`bash
npm run dev
\`\`\`

✅ La aplicación estará disponible en: `http://localhost:3001`

### 3.5 Probar el login de admin
1. Abre tu navegador en `http://localhost:3001`
2. Usa estas credenciales:
   - **Email**: `admin@urbana.com`
   - **Password**: `admin123`

---

## 📱 PASO 4: Configurar Mobile User (Expo)

### 4.1 Instalar Expo Go en tu celular
- **Android**: https://play.google.com/store/apps/details?id=host.exp.exponent
- **iOS**: https://apps.apple.com/app/expo-go/id982107779

### 4.2 Abrir NUEVA terminal y navegar a mobile-user
\`\`\`bash
cd mobile-user
\`\`\`

### 4.3 Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 4.4 Configurar variables de entorno

⚠️ **IMPORTANTE**: Necesitas la IP de tu computadora en la red local.

**En Windows:**
\`\`\`bash
ipconfig
\`\`\`
Busca "IPv4 Address" (ejemplo: 192.168.1.100)

**En Mac/Linux:**
\`\`\`bash
ifconfig | grep "inet "
\`\`\`
Busca la IP que NO sea 127.0.0.1 (ejemplo: 192.168.1.100)

1. Crea un archivo `.env` en la carpeta `mobile-user/`:
\`\`\`env
EXPO_PUBLIC_API_URL=http://TU_IP_AQUI:3000
\`\`\`

Ejemplo:
\`\`\`env
EXPO_PUBLIC_API_URL=http://192.168.1.100:3000
\`\`\`

### 4.5 Iniciar Expo
\`\`\`bash
npx expo start
\`\`\`

### 4.6 Escanear QR con Expo Go
1. Se abrirá una página con un código QR
2. Abre Expo Go en tu celular
3. Escanea el código QR:
   - **Android**: Desde la app Expo Go
   - **iOS**: Con la cámara del iPhone

### 4.7 Probar el login de usuario
1. En la app móvil, usa estas credenciales:
   - **Email**: `usuario@urbana.com`
   - **Password**: `usuario123`

---

## 🎯 Resumen de Credenciales

### Admin (Web - PC)
- URL: `http://localhost:3001`
- Email: `admin@urbana.com`
- Password: `admin123`

### Usuario (Mobile - Celular)
- Email: `usuario@urbana.com`
- Password: `usuario123`

---

## 📋 Checklist Final

Asegúrate de que TODO esté corriendo:

- [ ] PostgreSQL instalado y base de datos `urbana_reporta` creada
- [ ] Script `database/schema.sql` ejecutado exitosamente
- [ ] Backend corriendo en puerto 3000
- [ ] Admin Web corriendo en puerto 3001
- [ ] Expo Go instalado en tu celular
- [ ] Mobile User corriendo y conectado via Expo Go
- [ ] Puedes hacer login como admin en la web
- [ ] Puedes hacer login como usuario en el móvil

---

## ❌ Solución de Problemas

### Backend no conecta a la base de datos
- Verifica que PostgreSQL esté corriendo
- Verifica usuario/contraseña en `.env`
- Verifica que el puerto sea 5432

### Admin Web muestra error de conexión
- Verifica que el backend esté corriendo
- Verifica la URL en `.env.local`: `http://localhost:3000`

### Mobile no conecta al backend
- Verifica que tu celular esté en la MISMA red WiFi que tu PC
- Verifica la IP en `.env` de mobile-user
- Prueba acceder desde el navegador del celular a `http://TU_IP:3000/api/health`

### Expo Go no carga la app
- Asegúrate de estar en la misma red WiFi
- Reinicia Expo con: `npx expo start --clear`

---

## 🆘 Comandos Útiles

### Reiniciar todo desde cero

**Backend:**
\`\`\`bash
cd backend
npm run dev
\`\`\`

**Admin Web:**
\`\`\`bash
cd admin-web
npm run dev
\`\`\`

**Mobile:**
\`\`\`bash
cd mobile-user
npx expo start --clear
\`\`\`

---

## 📞 Estructura de Carpetas Final

\`\`\`
proyecto-urbana-reporta/
│
├── admin-web/              # 💻 Aplicación Web (PC)
│   ├── app/
│   │   ├── login/
│   │   ├── dashboard/
│   │   └── ...
│   ├── components/
│   ├── .env.local          # Configuración
│   └── package.json
│
├── mobile-user/            # 📱 Aplicación Móvil (Celular)
│   ├── app/
│   │   ├── (tabs)/
│   │   ├── login.tsx
│   │   └── ...
│   ├── .env                # Configuración
│   └── package.json
│
├── backend/                # ⚙️ API REST
│   ├── src/
│   │   ├── domain/
│   │   ├── application/
│   │   ├── infrastructure/
│   │   └── ...
│   ├── .env                # Configuración
│   └── package.json
│
└── database/               # 🗄️ Base de Datos
    ├── schema.sql          # Script principal
    └── CONTRASEÑAS.txt     # Credenciales
\`\`\`

---

## ✅ ¡Listo!

Si seguiste todos los pasos correctamente, ahora tienes:
- ✅ Base de datos PostgreSQL funcionando
- ✅ Backend API REST corriendo
- ✅ Panel de administración web (Next.js)
- ✅ Aplicación móvil de usuario (React Native + Expo)
- ✅ Todo conectado y funcionando

**¡Felicidades! Tu sistema está completo y funcional.** 🎉
