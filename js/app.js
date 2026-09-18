/**
 * ==========================================================================
 * MAGARÍ - MENÚ DIGITAL & CARRITO WHATSAPP
 * Código 100% Vanilla JavaScript, Modular y Configurable
 * ==========================================================================
 */

// ==========================================================================
// 1. CONFIGURACIÓN DEL NEGOCIO
// Modificá estos datos fácilmente para adaptar la información del local.
// ==========================================================================
const CONFIG = {
  nombre: "Magarí",
  slogan: "Cafetería & Delicias Caseras",
  // Formato internacional para Argentina: código país (54) + 9 + código de área + número
  // Ejemplo: "5493794123456" (sin espacios, sin signos '+', sin guiones)
  whatsapp: "549379XXXXXXXX",
  direccion: "Corrientes, Argentina",
  horarios: "Lunes a Sábado de 08:00 a 21:00",
  instagram: "@magari.talvez",
  metodosPago: "Efectivo, Transferencia, Mercado Pago"
};

// ==========================================================================
// 2. CATEGORÍAS DEL MENÚ
// ==========================================================================
const CATEGORIAS = [
  { id: "todas", nombre: "Todos", icono: "🍽️" },
  { id: "bebidas", nombre: "Bebidas", icono: "☕" },
  { id: "dulce", nombre: "Comida - Dulce", icono: "🍰" },
  { id: "salado", nombre: "Comida - Salado", icono: "🥪" }
];

// ==========================================================================
// 3. CATÁLOGO DE PRODUCTOS (CARTA OFICIAL MAGARÍ)
// Precios, descripciones y disponibilidad extraídos de la carta física.
// Para agregar un producto nuevo: duplicá un bloque, poné un id nuevo y listo.
// ==========================================================================
const PRODUCTOS = [
  // ------------------------------------------------------------------------
  // BEBIDAS
  // ------------------------------------------------------------------------
  {
    id: 1,
    nombre: "Café",
    descripcion: "Café espresso tradicional o cortado con espuma de leche.",
    precio: 2500,
    categoria: "bebidas",
    imagen: "img/cafe.jpg",
    disponible: true
  },
  {
    id: 2,
    nombre: "Té",
    descripcion: "Variedad de tés clásicos y en hebras.",
    precio: 2500,
    categoria: "bebidas",
    imagen: "img/te.jpg",
    disponible: true
  },
  {
    id: 3,
    nombre: "Latte",
    descripcion: "Doble shot de espresso con abundante leche vaporizada y suave crema.",
    precio: 3500,
    categoria: "bebidas",
    imagen: "img/latte.jpg",
    disponible: true
  },
  {
    id: 4,
    nombre: "Café frío",
    descripcion: "Iced coffee refrescante servido con hielo y toque dulce.",
    precio: 3500,
    categoria: "bebidas",
    imagen: "img/cafe-frio.jpg",
    disponible: true
  },
  {
    id: 5,
    nombre: "Submarino",
    descripcion: "Barra de chocolate semiamargo derretida en leche caliente.",
    precio: 4500,
    categoria: "bebidas",
    imagen: "img/submarino.jpg",
    disponible: true
  },
  {
    id: 6,
    nombre: "Chocolate caliente",
    descripcion: "Espeso, untuoso, dulce y reconfortante.",
    precio: 4000,
    categoria: "bebidas",
    imagen: "img/chocolate-caliente.jpg",
    disponible: true
  },
  {
    id: 7,
    nombre: "Chocolatada",
    descripcion: "Clásica leche chocolatada servida fría o tibia.",
    precio: 4000,
    categoria: "bebidas",
    imagen: "img/chocolatada.jpg",
    disponible: true
  },
  {
    id: 8,
    nombre: "Exprimido de Naranja",
    descripcion: "100% jugo de naranja fresco y natural recién exprimido.",
    precio: 3000,
    categoria: "bebidas",
    imagen: "img/exprimido-naranja.jpg",
    disponible: true
  },
  {
    id: 9,
    nombre: "Limonada",
    descripcion: "Limonada casera con hojas de menta fresca y jengibre.",
    precio: 3000,
    categoria: "bebidas",
    imagen: "img/limonada.jpg",
    disponible: true
  },
  {
    id: 10,
    nombre: "Licuado al Agua",
    descripcion: "A elección: Banana, Frutilla o Mixto. Preparado al agua.",
    precio: 3000,
    categoria: "bebidas",
    imagen: "img/licuado-agua.jpg",
    disponible: true
  },
  {
    id: 11,
    nombre: "Licuado con Leche",
    descripcion: "A elección: Banana, Frutilla o Mixto. Súper cremoso con leche.",
    precio: 3500,
    categoria: "bebidas",
    imagen: "img/licuado-leche.jpg",
    disponible: true
  },
  {
    id: 12,
    nombre: "Gaseosas",
    descripcion: "Línea Pepsi y Seven Up servidas bien frías.",
    precio: 2500,
    categoria: "bebidas",
    imagen: "img/gaseosas.jpg",
    disponible: true
  },
  {
    id: 13,
    nombre: "Agua saborizada",
    descripcion: "Sabores refrescantes: Manzana o Limón.",
    precio: 2000,
    categoria: "bebidas",
    imagen: "img/agua-saborizada.jpg",
    disponible: true
  },
  {
    id: 14,
    nombre: "Agua mineral",
    descripcion: "Botella individual (con o sin gas).",
    precio: 2000,
    categoria: "bebidas",
    imagen: "img/agua.jpg",
    disponible: true
  },

  // ------------------------------------------------------------------------
  // COMIDA - DULCE
  // ------------------------------------------------------------------------
  {
    id: 15,
    nombre: "Budín de Naranja",
    descripcion: "Porción de budín húmedo y aromático glaseado con naranja.",
    precio: 2000,
    categoria: "dulce",
    imagen: "img/budin-naranja.jpg",
    disponible: true
  },
  {
    id: 16,
    nombre: "Tarta de frutilla",
    descripcion: "Base masa sableé, crema pastelera suave y frutillas frescas.",
    precio: 4500,
    categoria: "dulce",
    imagen: "img/tarta-frutilla.jpg",
    disponible: true
  },
  {
    id: 17,
    nombre: "Marquisse",
    descripcion: "Base densa de chocolate con dulce de leche y merengue italiano.",
    precio: 4500,
    categoria: "dulce",
    imagen: "img/marquisse.jpg",
    disponible: true
  },
  {
    id: 18,
    nombre: "Key lime pie",
    descripcion: "Refrescante crema de lima sobre base de galletitas y crema batida.",
    precio: 5000,
    categoria: "dulce",
    imagen: "img/key-lime-pie.jpg",
    disponible: true
  },
  {
    id: 19,
    nombre: "Chocotorta",
    descripcion: "La clásica receta argentina con galletitas de chocolate y mezcla cremosa.",
    precio: 5000,
    categoria: "dulce",
    imagen: "img/chocotorta.jpg",
    disponible: true
  },
  {
    id: 20,
    nombre: "Pastafrola",
    descripcion: "Relleno a elección: Membrillo, Batata o Dulce de leche.",
    precio: 2000,
    categoria: "dulce",
    imagen: "img/pastafrola.jpg",
    disponible: true
  },
  {
    id: 21,
    nombre: "Medialuna",
    descripcion: "Medialuna tradicional de manteca dorada con almíbar.",
    precio: 1000,
    categoria: "dulce",
    imagen: "img/medialuna.jpg",
    disponible: true
  },
  {
    id: 22,
    nombre: "Croissant relleno dulce",
    descripcion: "Relleno abundante a elección: Crema Pastelera o Nutella.",
    precio: 7000,
    categoria: "dulce",
    imagen: "img/croissant-dulce.jpg",
    disponible: true
  },
  {
    id: 23,
    nombre: "Cookie Americana",
    descripcion: "Galleta horneada estilo New York con abundantes chips de chocolate.",
    precio: 3000,
    categoria: "dulce",
    imagen: "img/cookie-americana.jpg",
    disponible: true
  },
  {
    id: 24,
    nombre: "Cookie Nutella",
    descripcion: "Galleta rellena con corazón derretido de auténtica Nutella.",
    precio: 3500,
    categoria: "dulce",
    imagen: "img/cookie-nutella.jpg",
    disponible: true
  },
  {
    id: 25,
    nombre: "Cookie Oreo",
    descripcion: "Masa especial con trozos de galletitas Oreo y chocolate blanco.",
    precio: 3500,
    categoria: "dulce",
    imagen: "img/cookie-oreo.jpg",
    disponible: true
  },
  {
    id: 26,
    nombre: "+ Bocha de helado",
    descripcion: "Adicional de crema americana para coronar tu postre preferido.",
    precio: 1000,
    categoria: "dulce",
    imagen: "img/helado.jpg",
    disponible: true
  },

  // ------------------------------------------------------------------------
  // COMIDA - SALADO
  // ------------------------------------------------------------------------
  {
    id: 27,
    nombre: "Sacramento",
    descripcion: "Masa hojaldrada salada típica, crocante por fuera y suave por dentro.",
    precio: 2000,
    categoria: "salado",
    imagen: "img/sacramento.jpg",
    disponible: true
  },
  {
    id: 28,
    nombre: "Croissant c/ jamón y queso",
    descripcion: "Croissant tibio con abundante jamón cocido y queso derretido.",
    precio: 7000,
    categoria: "salado",
    imagen: "img/croissant-jyq.jpg",
    disponible: true
  },
  {
    id: 29,
    nombre: "Chipa 100gr",
    descripcion: "Porción de chipacitos caseros con puro queso tybo y sardo.",
    precio: 2000,
    categoria: "salado",
    imagen: "img/chipa.jpg",
    disponible: true
  },
  {
    id: 30,
    nombre: "Palitos de queso 100gr",
    descripcion: "Crujientes palitos horneados con especias y queso rallado.",
    precio: 2000,
    categoria: "salado",
    imagen: "img/palitos-queso.jpg",
    disponible: true
  },
  {
    id: 31,
    nombre: "Tostados",
    descripcion: "Clásico tostado en pan de miga con doble capa de jamón y queso.",
    precio: 6500,
    categoria: "salado",
    imagen: "img/tostados.jpg",
    disponible: true
  },
  {
    id: 32,
    nombre: "Tostado Magarí",
    descripcion: "El favorito de la casa: Jamón cocido, queso fundido y rodajas de tomate.",
    precio: 6000,
    categoria: "salado",
    imagen: "img/tostado-magari.jpg",
    disponible: true
  },
  {
    id: 33,
    nombre: "Sandwich focaccia",
    descripcion: "Pan focaccia artesanal al romero con jamón cocido y queso.",
    precio: 7000,
    categoria: "salado",
    imagen: "img/focaccia-jyq.jpg",
    disponible: true
  },
  {
    id: 34,
    nombre: "Sandwich focaccia capresse",
    descripcion: "Pan focaccia artesanal con tomate fresco, albahaca y queso fundido.",
    precio: 7500,
    categoria: "salado",
    imagen: "img/focaccia-capresse.jpg",
    disponible: true
  }
];

// ==========================================================================
// 4. ESTADO DE LA APLICACIÓN
// ==========================================================================
const STATE = {
  categoriaActiva: "todas",
  terminoBusqueda: "",
  // Carrito: Map o Array de objetos { productoId, cantidad }
  carrito: []
};

// ==========================================================================
// 5. FUNCIONES DE UTILIDAD (Formato de moneda, LocalStorage)
// ==========================================================================

/**
 * Formatea un número como moneda argentina (ej: $2.500, $12.000)
 */
function formatearPrecio(monto) {
  if (typeof monto !== 'number' || isNaN(monto)) return "$0";
  return "$" + monto.toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

/**
 * Persistencia del Carrito en LocalStorage
 */
function guardarCarritoLocalStorage() {
  try {
    localStorage.setItem("magari_carrito", JSON.stringify(STATE.carrito));
  } catch (e) {
    console.warn("No se pudo guardar el carrito en localStorage:", e);
  }
}

function cargarCarritoLocalStorage() {
  try {
    const data = localStorage.getItem("magari_carrito");
    if (data) {
      const parsed = JSON.parse(data);
      // Validar que los productos guardados aún existan en nuestro catálogo
      STATE.carrito = parsed.filter(item => 
        PRODUCTOS.some(p => p.id === item.productoId && p.disponible)
      );
    }
  } catch (e) {
    STATE.carrito = [];
  }
}

/**
 * Retorna el producto correspondiente por ID
 */
function obtenerProducto(id) {
  return PRODUCTOS.find(p => p.id === Number(id));
}

/**
 * Retorna el icono de una categoría
 */
function obtenerIconoCategoria(categoriaId) {
  const cat = CATEGORIAS.find(c => c.id === categoriaId);
  return cat ? cat.icono : "🍴";
}

// ==========================================================================
// 6. GESTIÓN DEL CARRITO (Agregar, Modificar, Eliminar)
// ==========================================================================

function agregarAlCarrito(productoId) {
  const producto = obtenerProducto(productoId);
  if (!producto || !producto.disponible) return;

  const itemExistente = STATE.carrito.find(item => item.productoId === producto.id);
  if (itemExistente) {
    itemExistente.cantidad += 1;
  } else {
    STATE.carrito.push({
      productoId: producto.id,
      cantidad: 1
    });
  }

  guardarCarritoLocalStorage();
  actualizarVistaCarrito();
  renderizarProductos(); // Actualiza contadores en las tarjetas
  mostrarToast(`¡${producto.nombre} agregado!`);

  // Animación de pulso en el botón del carrito
  const headerCartBadge = document.getElementById("headerCartBadge");
  if (headerCartBadge) {
    headerCartBadge.classList.remove("pulse");
    void headerCartBadge.offsetWidth;
    headerCartBadge.classList.add("pulse");
  }
}

function cambiarCantidadCarrito(productoId, delta) {
  const index = STATE.carrito.findIndex(item => item.productoId === Number(productoId));
  if (index === -1) return;

  const item = STATE.carrito[index];
  item.cantidad += delta;

  if (item.cantidad <= 0) {
    STATE.carrito.splice(index, 1);
  }

  guardarCarritoLocalStorage();
  actualizarVistaCarrito();
  renderizarProductos();
}

function eliminarDelCarrito(productoId) {
  STATE.carrito = STATE.carrito.filter(item => item.productoId !== Number(productoId));
  guardarCarritoLocalStorage();
  actualizarVistaCarrito();
  renderizarProductos();
}

function vaciarCarrito() {
  if (STATE.carrito.length === 0) return;
  if (confirm("¿Estás seguro de que querés vaciar todo tu pedido?")) {
    STATE.carrito = [];
    guardarCarritoLocalStorage();
    actualizarVistaCarrito();
    renderizarProductos();
  }
}

/**
 * Calcula cantidades y totales basándose únicamente en los datos originales de JS
 */
function calcularTotales() {
  let cantidadTotal = 0;
  let totalDinero = 0;

  STATE.carrito.forEach(item => {
    const prod = obtenerProducto(item.productoId);
    if (prod) {
      cantidadTotal += item.cantidad;
      totalDinero += prod.precio * item.cantidad;
    }
  });

  return { cantidadTotal, totalDinero };
}

// ==========================================================================
// 7. RENDERIZADO DEL MENÚ Y FILTROS
// ==========================================================================

function renderizarCategorias() {
  const container = document.getElementById("categoriesContainer");
  if (!container) return;

  container.innerHTML = CATEGORIAS.map(cat => {
    const isActive = cat.id === STATE.categoriaActiva ? "active" : "";
    return `
      <button class="category-pill ${isActive}" data-categoria="${cat.id}">
        <span class="category-pill-icon">${cat.icono}</span>
        <span>${cat.nombre}</span>
      </button>
    `;
  }).join("");

  // Event listeners para los botones de categoría
  container.querySelectorAll(".category-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const catId = btn.dataset.categoria;
      STATE.categoriaActiva = catId;
      
      // Actualizar estilo activo
      container.querySelectorAll(".category-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Actualizar título de sección
      const catObj = CATEGORIAS.find(c => c.id === catId);
      const titleElem = document.getElementById("activeCategoryTitle");
      if (titleElem && catObj) {
        titleElem.textContent = catObj.id === "todas" ? "MENÚ" : catObj.nombre;
      }

      renderizarProductos();
    });
  });
}

function filtrarProductos() {
  return PRODUCTOS.filter(prod => {
    // Filtro por categoría
    const coincideCategoria = STATE.categoriaActiva === "todas" || prod.categoria === STATE.categoriaActiva;
    
    // Filtro por búsqueda
    const termino = STATE.terminoBusqueda.trim().toLowerCase();
    const coincideBusqueda = termino === "" || 
      prod.nombre.toLowerCase().includes(termino) || 
      prod.descripcion.toLowerCase().includes(termino);

    return coincideCategoria && coincideBusqueda;
  });
}

function renderizarProductos() {
  const grid = document.getElementById("productsGrid");
  const noResults = document.getElementById("noResults");
  const countBadge = document.getElementById("productCountBadge");
  if (!grid) return;

  const productosFiltrados = filtrarProductos();

  // Contador de productos
  if (countBadge) {
    countBadge.textContent = `${productosFiltrados.length} ${productosFiltrados.length === 1 ? 'producto' : 'productos'}`;
  }

  // Estado vacío si no hay coincidencias
  if (productosFiltrados.length === 0) {
    grid.innerHTML = "";
    if (noResults) noResults.style.display = "block";
    return;
  } else {
    if (noResults) noResults.style.display = "none";
  }

  grid.innerHTML = productosFiltrados.map(prod => {
    const cartItem = STATE.carrito.find(item => item.productoId === prod.id);
    const cantidadEnCarrito = cartItem ? cartItem.cantidad : 0;
    const iconoCat = obtenerIconoCategoria(prod.categoria);

    // Controles de botón o selector de cantidad si ya está en carrito
    let actionButtonHTML = "";
    if (!prod.disponible) {
      actionButtonHTML = `<button class="btn-add-product" disabled>Agotado</button>`;
    } else if (cantidadEnCarrito > 0) {
      actionButtonHTML = `
        <div class="card-quantity-control">
          <button class="card-qty-btn" onclick="cambiarCantidadCarrito(${prod.id}, -1)" aria-label="Disminuir">-</button>
          <span class="card-qty-value">${cantidadEnCarrito}</span>
          <button class="card-qty-btn" onclick="cambiarCantidadCarrito(${prod.id}, 1)" aria-label="Aumentar">+</button>
        </div>
      `;
    } else {
      actionButtonHTML = `
        <button class="btn-add-product" onclick="agregarAlCarrito(${prod.id})" aria-label="Agregar ${prod.nombre}">
          <span>+</span> Agregar
        </button>
      `;
    }

    return `
      <article class="product-card" data-id="${prod.id}">
        <div class="product-image-wrapper">
          <img 
            src="${prod.imagen}" 
            alt="${prod.nombre}" 
            class="product-img" 
            loading="lazy"
            onerror="this.parentElement.classList.add('is-placeholder')"
          >
          <div class="product-placeholder-art" aria-hidden="true">
            <span class="placeholder-icon">${iconoCat}</span>
            <span class="placeholder-sub">Magarí</span>
          </div>
          ${!prod.disponible ? `<span class="badge-agotado">Agotado</span>` : ""}
        </div>

        <div class="product-details">
          <h3 class="product-title">${prod.nombre}</h3>
          <p class="product-description">${prod.descripcion}</p>
          
          <div class="product-footer">
            <span class="product-price">${formatearPrecio(prod.precio)}</span>
            ${actionButtonHTML}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================================================
// 8. RENDERIZADO DEL CARRITO & MODAL
// ==========================================================================

function actualizarVistaCarrito() {
  const { cantidadTotal, totalDinero } = calcularTotales();

  // 1. Actualizar contador en el header
  const headerCartBadge = document.getElementById("headerCartBadge");
  if (headerCartBadge) {
    headerCartBadge.textContent = cantidadTotal;
  }

  // 2. Actualizar botón flotante inferior en móviles
  const floatingWrapper = document.getElementById("floatingCartWrapper");
  const floatingCount = document.getElementById("floatingCartCount");
  const floatingTotal = document.getElementById("floatingCartTotal");

  if (floatingWrapper && floatingCount && floatingTotal) {
    if (cantidadTotal > 0) {
      floatingWrapper.style.display = "block";
      floatingCount.textContent = `${cantidadTotal} ${cantidadTotal === 1 ? 'ítem' : 'ítems'}`;
      floatingTotal.textContent = formatearPrecio(totalDinero);
    } else {
      floatingWrapper.style.display = "none";
    }
  }

  // 3. Actualizar contenido del modal/drawer
  const itemsCountText = document.getElementById("cartItemsCountText");
  const cartEmptyState = document.getElementById("cartEmptyState");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartFormSection = document.getElementById("cartFormSection");
  const cartFooter = document.getElementById("cartFooter");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartTotal = document.getElementById("cartTotal");

  if (itemsCountText) {
    itemsCountText.textContent = `${cantidadTotal} ${cantidadTotal === 1 ? 'producto seleccionado' : 'productos seleccionados'}`;
  }

  if (cantidadTotal === 0) {
    if (cartEmptyState) cartEmptyState.style.display = "block";
    if (cartItemsList) cartItemsList.innerHTML = "";
    if (cartFormSection) cartFormSection.style.display = "none";
    if (cartFooter) cartFooter.style.display = "none";
  } else {
    if (cartEmptyState) cartEmptyState.style.display = "none";
    if (cartFormSection) cartFormSection.style.display = "flex";
    if (cartFooter) cartFooter.style.display = "block";

    if (cartSubtotal) cartSubtotal.textContent = formatearPrecio(totalDinero);
    if (cartTotal) cartTotal.textContent = formatearPrecio(totalDinero);

    if (cartItemsList) {
      cartItemsList.innerHTML = STATE.carrito.map(item => {
        const prod = obtenerProducto(item.productoId);
        if (!prod) return "";
        const subtotalItem = prod.precio * item.cantidad;

        return `
          <div class="cart-item-row">
            <div class="cart-item-info">
              <div class="cart-item-name">${prod.nombre}</div>
              <div class="cart-item-price-unit">${formatearPrecio(prod.precio)} c/u</div>
            </div>

            <div class="cart-item-controls">
              <div class="cart-qty-toggle">
                <button class="cart-qty-btn" onclick="cambiarCantidadCarrito(${prod.id}, -1)" aria-label="Restar">-</button>
                <span class="cart-qty-num">${item.cantidad}</span>
                <button class="cart-qty-btn" onclick="cambiarCantidadCarrito(${prod.id}, 1)" aria-label="Sumar">+</button>
              </div>

              <span class="cart-item-subtotal">${formatearPrecio(subtotalItem)}</span>

              <button class="cart-item-remove-btn" onclick="eliminarDelCarrito(${prod.id})" aria-label="Eliminar ${prod.nombre}">
                🗑️
              </button>
            </div>
          </div>
        `;
      }).join("");
    }
  }
}

function abrirCarrito() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden"; // Evita scroll de fondo
  }
}

function cerrarCarrito() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// 9. ENVÍO DE PEDIDO POR WHATSAPP
// ==========================================================================

function enviarPedidoWhatsApp() {
  const { cantidadTotal, totalDinero } = calcularTotales();

  // Validación: pedido vacío
  if (cantidadTotal === 0 || STATE.carrito.length === 0) {
    alert("Tu pedido está vacío. Agregá al menos un producto para continuar.");
    return;
  }

  // Obtener datos del cliente del formulario
  const nombreInput = document.getElementById("clienteNombre");
  const direccionInput = document.getElementById("clienteDireccion");
  const obsInput = document.getElementById("clienteObservaciones");
  const tipoEntregaRadio = document.querySelector('input[name="tipoEntrega"]:checked');

  const nombre = nombreInput ? nombreInput.value.trim() : "";
  const direccion = direccionInput ? direccionInput.value.trim() : "";
  const observaciones = obsInput ? obsInput.value.trim() : "";
  const tipoEntrega = tipoEntregaRadio ? tipoEntregaRadio.value : "Retiro en local";

  // Validación: nombre requerido para una mejor atención
  if (!nombre) {
    alert("Por favor ingresá tu nombre para que sepamos a quién entregarle el pedido.");
    if (nombreInput) nombreInput.focus();
    return;
  }

  // Validación: dirección requerida si eligió envío a domicilio
  if (tipoEntrega === "Envío a domicilio" && !direccion) {
    alert("Por favor ingresá la dirección de entrega.");
    if (direccionInput) direccionInput.focus();
    return;
  }

  // Construir mensaje amigable y prolijo
  let mensaje = `¡Hola! Quiero realizar el siguiente pedido en *${CONFIG.nombre}*:\n\n`;

  STATE.carrito.forEach(item => {
    const prod = obtenerProducto(item.productoId);
    if (prod) {
      const icono = obtenerIconoCategoria(prod.categoria);
      const subtotalItem = formatearPrecio(prod.precio * item.cantidad);
      mensaje += `${icono} *${prod.nombre}* x${item.cantidad}\n`;
      mensaje += `   ${subtotalItem}\n`;
    }
  });

  mensaje += `\n--------------------\n`;
  mensaje += `*TOTAL: ${formatearPrecio(totalDinero)}*\n\n`;
  mensaje += `*Modalidad:* ${tipoEntrega}\n`;
  mensaje += `*Nombre:* ${nombre}\n`;

  if (tipoEntrega === "Envío a domicilio" && direccion) {
    mensaje += `*Dirección:* ${direccion}\n`;
  }

  if (observaciones) {
    mensaje += `*Observaciones:* ${observaciones}\n`;
  }

  mensaje += `\n¡Muchas gracias!`;

  // Construcción de la URL de WhatsApp (API oficial wa.me)
  const urlWhatsApp = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`;

  // Abrir WhatsApp en pestaña nueva o aplicación nativa
  window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
}

// ==========================================================================
// 10. TOAST DE FEEDBACK
// ==========================================================================
let toastTimeout;
function mostrarToast(mensaje) {
  const toast = document.getElementById("toastNotification");
  const msgSpan = document.getElementById("toastMessage");
  if (!toast || !msgSpan) return;

  msgSpan.textContent = mensaje;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ==========================================================================
// 11. INICIALIZACIÓN Y EVENT LISTENERS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Cargar datos del negocio en la interfaz
  const headerSlogan = document.getElementById("headerSlogan");
  const footerSlogan = document.getElementById("footerSlogan");
  const footerAddress = document.getElementById("footerAddress");
  const footerHours = document.getElementById("footerHours");
  const quickHours = document.getElementById("quickHours");
  const footerPayments = document.getElementById("footerPayments");
  const currentYear = document.getElementById("currentYear");
  const footerWhatsappLink = document.getElementById("footerWhatsappLink");
  const footerInstagramLink = document.getElementById("footerInstagramLink");

  if (headerSlogan) headerSlogan.textContent = CONFIG.slogan;
  if (footerSlogan) footerSlogan.textContent = CONFIG.slogan;
  if (footerAddress) footerAddress.textContent = CONFIG.direccion;
  if (footerHours) footerHours.textContent = CONFIG.horarios;
  if (quickHours) quickHours.textContent = CONFIG.horarios;
  if (footerPayments) footerPayments.textContent = CONFIG.metodosPago;
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  if (footerWhatsappLink) {
    footerWhatsappLink.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("¡Hola! Me gustaría hacer una consulta.")}`;
  }
  if (footerInstagramLink) {
    footerInstagramLink.href = `https://instagram.com/${CONFIG.instagram.replace('@', '')}`;
  }

  // 2. Cargar carrito desde LocalStorage
  cargarCarritoLocalStorage();

  // 3. Renderizar componentes
  renderizarCategorias();
  renderizarProductos();
  actualizarVistaCarrito();

  // 4. Búsqueda en tiempo real
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const resetSearchBtn = document.getElementById("resetSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      STATE.terminoBusqueda = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = e.target.value.trim() !== "" ? "flex" : "none";
      }
      renderizarProductos();
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      STATE.terminoBusqueda = "";
      clearSearchBtn.style.display = "none";
      renderizarProductos();
      searchInput.focus();
    });
  }

  if (resetSearchBtn && searchInput) {
    resetSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      STATE.terminoBusqueda = "";
      STATE.categoriaActiva = "todas";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      renderizarCategorias();
      renderizarProductos();
    });
  }

  // 5. Control de apertura/cierre del carrito
  const headerCartBtn = document.getElementById("headerCartBtn");
  const floatingCartBtn = document.getElementById("floatingCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartBackdrop = document.getElementById("cartBackdrop");
  const cartExploreBtn = document.getElementById("cartExploreBtn");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const sendWhatsAppBtn = document.getElementById("sendWhatsAppBtn");

  if (headerCartBtn) headerCartBtn.addEventListener("click", abrirCarrito);
  if (floatingCartBtn) floatingCartBtn.addEventListener("click", abrirCarrito);
  if (closeCartBtn) closeCartBtn.addEventListener("click", cerrarCarrito);
  if (cartBackdrop) cartBackdrop.addEventListener("click", cerrarCarrito);
  if (cartExploreBtn) cartExploreBtn.addEventListener("click", cerrarCarrito);
  if (clearCartBtn) clearCartBtn.addEventListener("click", vaciarCarrito);
  if (sendWhatsAppBtn) sendWhatsAppBtn.addEventListener("click", enviarPedidoWhatsApp);

  // 6. Alternar campos según tipo de entrega (Retiro vs Envío)
  const radiosEntrega = document.querySelectorAll('input[name="tipoEntrega"]');
  const direccionGroup = document.getElementById("direccionGroup");

  radiosEntrega.forEach(radio => {
    radio.addEventListener("change", (e) => {
      if (direccionGroup) {
        direccionGroup.style.display = e.target.value === "Envío a domicilio" ? "flex" : "none";
      }
    });
  });

  // 7. Cerrar con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarCarrito();
    }
  });

  console.log("☕ Menú digital Magarí iniciado correctamente.");
});
