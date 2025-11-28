# Configuración de Variables de Entorno

Este proyecto utiliza variables de entorno para configuración sensible y URLs externas.

## Instrucciones de Configuración

1. **Copia el archivo de ejemplo:**
   ```bash
   cp .env.example .env.local
   ```

2. **Configura las variables en `.env.local`:**
   - `NEXT_PUBLIC_CONTACT_FORM_URL`: URL de tu Google Apps Script para el formulario de contacto

## Variables de Entorno Disponibles

### Variables Públicas (Frontend)
Estas variables están disponibles en el navegador y deben tener el prefijo `NEXT_PUBLIC_`:

- **NEXT_PUBLIC_CONTACT_FORM_URL**: URL del endpoint de Google Apps Script que recibe los datos del formulario de contacto.

## Notas Importantes

- ✅ **`.env.local`** - Ignorado por git, usa este para desarrollo local
- ✅ **`.env.example`** - Template sin valores reales, se sube al repositorio
- ❌ **`.env`** - Ignorado por git, NO subir al repositorio

## Para Producción (Vercel)

Cuando despliegues en Vercel, debes configurar las variables de entorno en el dashboard:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega: `NEXT_PUBLIC_CONTACT_FORM_URL` con tu URL de producción
