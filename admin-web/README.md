# Admin Web - App Urbana Reporta

Panel de administración web desarrollado con Next.js 16 para gestionar reportes urbanos desde PC/Monitor.

## Características
- Dashboard con estadísticas en tiempo real
- Gestión de reportes (aprobar, rechazar, cambiar estado)
- Gestión de usuarios registrados
- Mapa de calor con visualización de reportes
- Sistema de categorías y configuración
- Autenticación JWT

## Instalación

\`\`\`bash
cd admin-web
npm install
npm run dev
\`\`\`

La aplicación estará disponible en `http://localhost:3001`

## Credenciales de Prueba

**Administrador:**
- Email: admin@urbana.com
- Password: admin123

## Variables de Entorno

Crea un archivo `.env.local`:

\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

## Tecnologías
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
