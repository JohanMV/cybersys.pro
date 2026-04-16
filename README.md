# CyberSys Pro - Website Corporativa

Desarrollo de la landing page institucional interactiva para **CyberSys**. Construida bajo una arquitectura orientada a la conversión comercial, rendimiento óptimo y diseño premium con animaciones modernas.

![CyberSys Preview](public\images\cybersys_app.webp)

## 🚀 Stack Tecnológico

Este proyecto ha sido construido utilizando estándares modernos de desarrollo, combinando la velocidad de Vite con la robustez de React 19 y las nuevas funcionalidades CSS-only de Tailwind v4.

| Tecnología / Librería | Versión | Propósito / Función Principal |
| :--- | :--- | :--- |
| **React** | `^19.2.4` | Librería core para la construcción interactiva de la interfaz de usuario. |
| **Vite** | `^8.0.4` | Bundler y servidor de desarrollo ultra-rápido (reemplazo de CRA / Webpack). |
| **TypeScript** | `~6.0.2` | Type-safety estricto para escalar la arquitectura sin errores en runtime. |
| **Tailwind CSS** | `^4.2.2` | Engine de estilos utility-first usando el nuevo `@tailwindcss/vite` de la v4. |
| **Framer Motion** | `^12.38.0` | Orquestación de animaciones de Layout, gestos y físicas (`motion/react`). |
| **Shadcn UI (Radix)** | `^1.2` | Primitivas accesibles y componentes atómicos base (`@radix-ui/*`). |
| **ScrollX / Aceternity** | `-` | Componentes visuales complejos (Bento Grid, Venom Beam, Tilt Cards). |
| **Lucide React** | `^1.8.0` | Ecosistema de iconografía consistente. |
| **D3.js & TopoJSON**| `^7.9.0` | Renderizado ultra-liviano del *Globe Wireframe* 3D mediante vectores SVG. |

## 🏗 Arquitectura del Proyecto

El código fuente sigue un patrón modular separando la composición del layout (Sections) de las piezas funcionales reutilizables (UI).

```text
src/
├── assets/          # Íconos estáticos (ej. icons-whatsapp.svg) y media local.
├── components/
│   ├── sections/    # Módulos grandes de negocio (Hero, Projects, Methodology, Footer).
│   └── ui/          # Componentes atómicos (Botones, Grids, Modales, Shadcn UI).
├── lib/             # Utilidades core (ej. utils.ts para merge de Tailwind classes con clsx).
├── App.tsx          # Entrada de la capa de rutas/componentes principales.
├── index.css        # Core de Tailwind v4 y variables CSS nativas para el Dark Mode.
└── main.tsx         # Punto de anclaje de React (createRoot).
```

## ✨ Características Principales

*   **Bento Grid Interactivo:** La sección de proyectos (`Projects.tsx`) emplea un Bento Grid animado con categorización en tiempo real (`IA y Automatización`, `Ciberseguridad`, `Desarrollo Web`).
*   **Performance First:** Reemplaza soluciones pesadas de WebGL (como Three.js) por manipulaciones SVG con D3 para el componente interactivo del globo terráqueo (`globe-wireframe.tsx`).
*   **Efectos Canvas Nativos:** El componente `Venom Beam` (`venom-beam.tsx`) renderiza en `<canvas>` cálculos matemáticos basados en colisión y proximidad del mouse sin saturar el Main Thread.
*   **Conversión Comercial (Lead Generation):** Modales profundos en los proyectos enrutados dinámicamente con llamadas a la acción (CTAs) para contactar ventas vía WhatsApp.
*   **Dark Mode Ready:** Implementación nativa usando `@custom-variant dark` de Tailwind con la directiva CSS de variantes automáticas para intercambiar colores *oklch()*.

## 🛠 Instalación y Despliegue

La gestión de dependencias en este repositorio se controla de manera óptima utilizando `npm` (según se refleja en el `package-lock.json`).

### Requisitos Previos
- Node.js >= 18.x

### Clonar e Inicializar
```bash
# Instalar las dependencias
npm install

# Iniciar el servidor local (Hot Module Replacement)
npm run dev
```

### Construcción para Producción
```bash
# Compila TypeScript y genera el bundle con Vite
npm run build

# Prueba en local la versión compilada
npm run preview
```

## ⚙️ Configuración / Variables de Entorno

Actualmente, al ser una SPA puramente estática focalizada en exposición comercial y enrutamiento hacia plataformas de comunicación (WhatsApp / Mailto), el ecosistema de cliente **no requiere la configuración estricta de variables de entorno** (`.env`).

Si a futuro se requiere conectar los formularios (`ContactSection`) a un servicio vía API, pueden configurarse:

```env
# .env
VITE_API_BASE_URL="https://api.cybersys.pro"
VITE_HUBSPOT_PORTAL_ID="123456"
```

## 🔐 Calidad de Código (Linting & Types)

El proyecto restringe los commits defectuosos a través de:
*   TypeScript estricto validando los paths (`@/*`).
*   **ESLint 9** nativo configurado bajo su nuevo formato (`eslint.config.js`) protegiendo directores generados e integrando el ecosistema de Vite/React-Refresh.

---
*Desarrollado y mantenido de acuerdo con los estándares técnicos y UI/UX de nivel Enterprise.*
