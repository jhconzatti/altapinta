# 🍔 Alta Pinta - Sandwiches y Mas | Digital Transformation

![Project Status](https://img.shields.io/badge/Status-Live%20%2F%20Production-brightgreen)
![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20Tailwind%20%7C%20Vite-blue)

> Una solución moderna y mobile-first diseñada para modernizar una comercio local de sándwiches y más en Tartagal, Salta, Argentina.

## 🎯 Contexto & Objetivo

**Alta Pinta** es un emprendimiento tradicional en Tartagal (Salta, Argentina) especializado en sándwiches premium, bebidas y salsas caseras. A pesar de tener una fuerte presencia física y productos de alta calidad, su huella digital era inexistente (pedidos manuales por teléfono, sin sitio web, baja visibilidad en Google).

**El Objetivo:** Diseñar y desarrollar una página de aterrizaje de alta conversión que sirva como menú digital y sistema de pedidos, cerrando la brecha entre su excelente producto físico y la experiencia digital del cliente.

## 🚀 Características Clave

* **Diseño Mobile-First:** Optimizado para el 90% de clientes que piden comida desde smartphones.
* **Pedidos sin Fricción (WhatsApp API):** En lugar de un backend complejo, el carrito genera un mensaje pre-formateado que se envía directamente al WhatsApp del restaurante, alineándose con el comportamiento del usuario local.
* **Alineación de Identidad de Marca:** Traducción digital de su marca física usando Modo Oscuro, Tipografía Audaz y Colores que Estimulan el Apetito.
* **Menú Visual:** Presentación de alta calidad de productos (Sándwiches, Bebidas, Salsas) reemplazando menús en PDF difíciles de leer en móvil.
* **Rendimiento:** Tiempos de carga ultra rápidos usando Vite y assets optimizados.

## 🛠️ Tech Stack

* **Core:** [React.js](https://reactjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **UI Components:** Componentes personalizados basados en principios de Shadcn/UI
* **Deployment:** Vercel

## 💡 Lógica de Negocio (¿Por qué este stack?)

Dado que el cliente gestiona un pequeño equipo sin departamento informático, un backend complejo con base de datos introduciría fricción innecesaria y costos de mantenimiento.

Elegí un **enfoque Frontend sin Estado**:
1. **Bajo Mantenimiento:** Sin base de datos que gestionar.
2. **Costo Cero en Hosting:** Puede alojarse en tiers gratuitos de Vercel/Netlify.
3. **Alta Confiabilidad:** Se basa en WhatsApp (que ya usan) para el procesamiento de pedidos.

## 🔧 Cómo Ejecutar Localmente

1. **Clonar el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/altapinta.git
    ```
2. **Instalar dependencias**
    ```bash
    cd altapinta
    npm install
    ```
3. **Ejecutar el servidor de desarrollo**
    ```bash
    npm run dev
    ```

## 👨‍💻 Autor

**Juliano Conzatti** *Desarrollador Full Stack & Estratega Digital*

[![Portfolio](https://img.shields.io/badge/Portfolio-Visita%20mi%20Sitio-brightgreen)](https://julianoconzatti.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conecta-blue)](https://linkedin.com/in/su-linkedin)

---
*Nota: Este proyecto fue desarrollado como una propuesta estratégica para digitalizar un negocio local real.*
