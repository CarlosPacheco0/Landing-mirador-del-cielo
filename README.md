# 🌄 El Mirador del Cielo | Landing Page Web Premium (Astro + Tailwind CSS)

Landing Page oficial e interactiva de nivel profesional para **El Mirador del Cielo**, un emblemático mirador gastronómico y turístico ubicado en el Cerro de la Virgen en **Río de Oro, Cesar (Colombia)**.

Migrada a la arquitectura moderna de **Astro**, permitiendo una carga ultrarrápida (Zero-JS por defecto), modularidad por componentes y catálogo de productos estructurado en datos desacoplados.

![El Mirador del Cielo](public/images/monumento.png)

---

## 🚀 Características Principales

- ⚡ **Desarrollado en Astro (v5+)**: Rendimiento extremo, SSG (generación estática) y optimización de assets.
- 📋 **Menú y Datos Desacoplados (`src/data/menu.ts`)**: Administra platos, categorías, precios y badges desde un archivo limpio y tipado, sin necesidad de bases de datos complejas ni backend.
- 🌙 **Diseño Slate Night Mode (`#0B0F17`) & Glassmorphism**: Estética nocturna ultra elegante con destellos ámbar y naranja (`glass-glow`).
- 🌅 **Widget de "Hora Dorada & Atardecer" en Tiempo Real**: Indicador activo en el Hero que calcula la hora del atardecer en Río de Oro.
- 🛒 **Carrito de Pedidos Interactivo (`Order Builder WhatsApp`)**:
  - Modalidad *Mesa en Mirador* o *Para Llevar*.
  - Cálculo en tiempo real de subtotales y totales.
  - Generación de mensaje estructurado con envío directo a WhatsApp.
- 🖼️ **Visor Lightbox de Galería a Pantalla Completa**:
  - Zoom de imágenes de alta resolución, navegación táctil y por teclado (`←`, `→`, `ESC`).
- 📅 **Sistema de Reserva de Mesas**: Formulario con enlace a WhatsApp pre-diligenciado.
- 🍕 **Sección de Menú con Filtros de Categoría**: Pestañas interactivas (*Todos*, *Bebidas*, *Comidas*, *Souvenirs*).
- ⭐ **Prueba Social**: Valoración 4.9 ★★★★★ basada en Google Maps & TripAdvisor.

---

## 📁 Estructura del Proyecto

```text
MIRADOR DEL CIELO/
├── public/                 # Archivos estáticos servidos en la raíz
│   └── images/             # Fotografías, pines y video promocional
├── src/
│   ├── components/         # Componentes modulares de Astro
│   │   ├── About.astro
│   │   ├── CartModal.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Gallery.astro
│   │   ├── Hero.astro
│   │   ├── LightboxModal.astro
│   │   ├── Menu.astro
│   │   ├── Navbar.astro
│   │   ├── ReservationModal.astro
│   │   ├── Reviews.astro
│   │   ├── SocialBanner.astro
│   │   ├── Souvenirs.astro
│   │   ├── Toast.astro
│   │   └── WhatsAppButton.astro
│   ├── data/               # "Base de datos" estática en TypeScript/JS
│   │   ├── faqs.ts
│   │   ├── gallery.ts
│   │   ├── menu.ts         # <--- Edita aquí precios y platos
│   │   └── reviews.ts
│   ├── layouts/
│   │   └── Layout.astro    # Layout base (SEO, Google Fonts, AOS)
│   ├── pages/
│   │   └── index.astro     # Punto de entrada principal
│   └── styles/
│       └── global.css      # Tailwind CSS y estilos personalizados
├── astro.config.mjs        # Configuración de Astro
├── package.json
└── README.md
```

---

## ⚙️ Cómo Ejecutar Localmente

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos estáticos optimizados se generarán en la carpeta `dist/`.

4. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

---

## 📄 Licencia & Créditos

© 2026 **El Mirador del Cielo**. Todos los derechos reservados.  
Desarrollado para la promoción turística y comercial de Río de Oro, Cesar.
