# Urbana Reporta - App Móvil

Aplicación móvil para reportar problemas urbanos alineada con el ODS 11 (Ciudades y Comunidades Sostenibles).

## Versiones Disponibles

### Web App (Next.js)
- Desplegada en Vercel: [https://vercel.com/arciniegasrodriguezkenethsteve-5857s-projects/v0-urban-report-app](https://vercel.com/arciniegasrodriguezkenethsteve-5857s-projects/v0-urban-report-app)
- Construida con v0: [https://v0.app/chat/e4FMvtgd6BA](https://v0.app/chat/e4FMvtgd6BA)

### React Native con Expo (Para móviles)
Los archivos de React Native están listos para ser copiados a un nuevo proyecto Expo.

## Instalación para Expo Go

1. Descarga e instala Expo Go en tu celular:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. En tu computadora, crea un nuevo proyecto:
\`\`\`bash
npx create-expo-app urbana-reporta
cd urbana-reporta
\`\`\`

3. Copia todos los archivos del proyecto a tu nueva carpeta

4. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

5. Inicia el servidor de desarrollo:
\`\`\`bash
npx expo start
\`\`\`

6. Escanea el código QR con Expo Go en tu celular

## Estructura del Proyecto

\`\`\`
app/
├── _layout.tsx          # Layout principal
├── index.tsx            # Pantalla de bienvenida
├── (user)/              # Rutas de usuario
│   ├── home.tsx         # Pantalla principal
│   ├── create-report.tsx # Crear reportes
│   ├── reports.tsx      # Historial
│   └── profile.tsx      # Perfil
└── (admin)/             # Rutas de administrador
    ├── dashboard.tsx    # Panel principal
    ├── reports.tsx      # Gestionar reportes
    ├── users.tsx        # Gestionar usuarios
    └── settings.tsx     # Configuración
\`\`\`

## Características

- Geolocalización con expo-location
- Cámara y galería con expo-image-picker
- Mapas con react-native-maps
- Almacenamiento local con AsyncStorage
- Navegación con Expo Router
- Interfaz nativa optimizada para móviles

## Credenciales de Prueba

**Usuario:**
- Email: usuario@urbana.com
- Password: usuario123

**Admin:**
- Email: admin@urbana.com
- Password: admin123

## Funcionalidades

### Usuario
- Crear reportes con geolocalización
- Subir fotos de evidencia
- Ver historial de reportes
- Seguimiento en tiempo real
- Mapa interactivo de reportes

### Administrador
- Dashboard con estadísticas
- Gestionar reportes
- Cambiar estados de reportes
- Ver usuarios registrados
- Mapa de calor con zonas críticas

## Tecnologías

- React Native
- Expo SDK 52
- Expo Router
- TypeScript
- Expo Location
- Expo Image Picker
- React Native Maps
- AsyncStorage

## Pasos Siguientes

1. Descarga el código del proyecto
2. Copia los archivos a un nuevo proyecto Expo
3. Instala las dependencias
4. Ejecuta `npx expo start`
5. Escanea el código QR con Expo Go
6. Prueba la aplicación en tu celular

## Soporte

Para continuar desarrollando, visita: [https://v0.app/chat/e4FMvtgd6BA](https://v0.app/chat/e4FMvtgd6BA)
