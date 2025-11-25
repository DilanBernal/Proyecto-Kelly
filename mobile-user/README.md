# Mobile User - App Urbana Reporta

Aplicación móvil desarrollada con React Native y Expo para que ciudadanos reporten problemas urbanos.

## Características
- Crear reportes con foto y ubicación GPS
- Ver historial de reportes propios
- Seguimiento de estado de reportes
- Mapa interactivo con reportes cercanos
- Notificaciones de cambios de estado
- Perfil de usuario

## Instalación

\`\`\`bash
cd mobile-user
npm install
npx expo start
\`\`\`

Escanea el código QR con la app Expo Go en tu celular.

## Credenciales de Prueba

**Usuario:**
- Email: usuario@urbana.com
- Password: usuario123

## Variables de Entorno

Crea un archivo `.env`:

\`\`\`env
EXPO_PUBLIC_API_URL=http://TU-IP-LOCAL:3000
\`\`\`

Reemplaza `TU-IP-LOCAL` con la IP de tu computadora (ej: 192.168.1.100)

## Tecnologías
- React Native
- Expo SDK 52
- TypeScript
- React Navigation
- Expo Location
- Expo Camera
- AsyncStorage
