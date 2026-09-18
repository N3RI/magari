# Magarí ☕✨

Menú digital interactivo para cafetería y local gastronómico, desarrollado **exclusivamente con HTML5, CSS3 y JavaScript vanilla**. Diseñado especialmente para dispositivos móviles, con estética cálida artesanal basada en la carta física de Magarí y sistema de pedidos directo por WhatsApp.

---

## 🌟 Características

- **100% Configurable desde `js/app.js`**: El dueño del local no necesita tocar HTML ni CSS para actualizar precios, productos, horarios o el teléfono.
- **Catálogo Completo Integrado**: Incluye todos los productos de la carta física (Bebidas, Comida Dulce y Comida Salada) con sus precios reales.
- **Carrito Interactivo Mobile-First**: Panel deslizable / bottom sheet para teléfonos, botón flotante inferior permanente con contador de ítems y total en vivo.
- **Envío Directo a WhatsApp (`wa.me`)**: Genera el mensaje formateado con emojis, cantidades, subtotales, total, tipo de entrega (Retiro / Delivery), nombre y observaciones.
- **Persistencia en LocalStorage**: Si el cliente recarga la página, su pedido no se pierde.
- **Fallback Inteligente de Imágenes**: Si aún no agregaste una foto a la carpeta `img/`, la tarjeta muestra una ilustración estilizada con la paleta y el ícono correspondiente sin romperse.
- **Buscador en Tiempo Real y Filtro de Categorías**: Encuentra cualquier producto al instante.
- **Soporte para Productos Agotados**: Posibilidad de marcar `disponible: false` para deshabilitar el botón y mostrar la etiqueta "AGOTADO".

---

## 📁 Estructura del Proyecto

```text
magari/
├── index.html         # Estructura semántica, SEO y Open Graph
├── css/
│   └── styles.css     # Estilos responsive mobile-first y paleta oficial Magarí
├── js/
│   └── app.js         # Configuración del negocio, catálogo y lógica del carrito
└── img/               # Fotos de los productos (agregadas manualmente)
    └── README.md
```

---

## 🛠️ Guía Rápida de Modificación (`js/app.js`)

Todo el menú se administra desde el archivo **`js/app.js`**:

### 1. Cambiar nombre, eslogan, WhatsApp u horarios
Edita el objeto `CONFIG` al inicio del archivo:
```javascript
const CONFIG = {
  nombre: "Magarí",
  slogan: "Cafetería & Delicias Caseras",
  whatsapp: "5493794123456", // Número en formato internacional sin espacios ni signos +
  direccion: "Corrientes, Argentina",
  horarios: "Lunes a Sábado de 08:00 a 21:00",
  instagram: "@magari.talvez",
  metodosPago: "Efectivo, Transferencia, Mercado Pago"
};
```

### 2. Cambiar el precio de un producto
Busca el producto por su nombre en el array `PRODUCTOS` y modifica el valor numérico (sin comillas ni signos `$`). Por ejemplo:
```javascript
{
  id: 1,
  nombre: "Café",
  precio: 2800, // <-- Nuevo precio
  ...
}
```

### 3. Marcar un producto como Agotado
Cambia la propiedad `disponible` a `false`:
```javascript
{
  id: 19,
  nombre: "Chocotorta",
  disponible: false // <-- Se mostrará como "AGOTADO" y no se podrá agregar
}
```

### 4. Agregar un nuevo producto
Copia y pega un bloque al final de `PRODUCTOS` con un `id` único consecutivo:
```javascript
{
  id: 35,
  nombre: "Alfajor de Pistacho",
  descripcion: "Masa de cacao rellena de ganache de pistacho y chocolate blanco.",
  precio: 3200,
  categoria: "dulce",
  imagen: "img/alfajor-pistacho.jpg",
  disponible: true
}
```

### 5. Agregar una nueva categoría
Edita el array `CATEGORIAS`:
```javascript
{ id: "especiales", nombre: "Especiales", icono: "⭐" }
```

### 6. Dónde colocar las imágenes
Guarda tus fotos en la carpeta `img/` con el mismo nombre que indicaste en la propiedad `imagen` del producto (por ejemplo `img/alfajor-pistacho.jpg`).

---

## 🚀 Cómo abrir y alojar la web

1. **Abrir localmente**: Haz doble clic en `index.html` o usa cualquier navegador web.
2. **Alojar gratis**: Puedes subir esta carpeta a **GitHub Pages**, **Vercel**, **Netlify**, o cualquier hosting web estándar.
