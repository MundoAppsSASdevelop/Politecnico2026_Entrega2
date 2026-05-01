// ==================== BASE DE DATOS LOCAL - DESTINOS DE COLOMBIA ====================
let destinos = [
    {
        id: 1,
        nombre: 'Cartagena de Indias',
        ciudad: 'Cartagena',
        departamento: 'Bolívar',
        descripcionBreve: 'La heroica, ciudad amurallada con playas paradisíacas',
        descripcionCompleta: 'Cartagena es una joya colonial en el Caribe colombiano. Recorre sus murallas centenarias, disfruta de sus playas de ensueño, visita el Castillo San Felipe de Barajas y déjate encantar por su música y gastronomía caribeña. Incluye tour guiado por la ciudad amurallada, paseo en chiva y entrada a museos.',
        imagenUrl: 'https://picsum.photos/id/10/400/300',
        categoria: 'playa',
        precio: 450000,
        duracion: '3 días / 2 noches',
        incluye: 'Hospedaje, desayunos, tour guiado, transporte aeropuerto-hotel'
    },
    {
        id: 2,
        nombre: 'Eje Cafetero',
        ciudad: 'Quindío',
        departamento: 'Quindío',
        descripcionBreve: 'Paisajes cafeteros y cultura del café',
        descripcionCompleta: 'Sumérgete en el corazón de la cultura cafetera colombiana. Visita fincas tradicionales, aprende sobre el proceso del café, cabalga por montañas verdes y visita el hermoso Valle del Cocora con sus imponentes palmas de cera.',
        imagenUrl: 'https://picsum.photos/id/11/400/300',
        categoria: 'naturaleza',
        precio: 380000,
        duracion: '4 días / 3 noches',
        incluye: 'Hospedaje en finca cafetera, tour del café, cabalgata, transporte'
    },
    {
        id: 3,
        nombre: 'Medellín y Guatapé',
        ciudad: 'Medellín',
        departamento: 'Antioquia',
        descripcionBreve: 'La ciudad de la eterna primavera y la piedra del peñol',
        descripcionCompleta: 'Descubre Medellín, una ciudad innovadora llena de arte y cultura. Explora la Comuna 13, monta en el Metrocable y visita Guatapé para escalar la famosa Piedra del Peñol con vistas espectaculares.',
        imagenUrl: 'https://picsum.photos/id/12/400/300',
        categoria: 'ciudad',
        precio: 420000,
        duracion: '3 días / 2 noches',
        incluye: 'Hospedaje, tours urbanos, transporte a Guatapé, entrada a la Piedra'
    },
    {
        id: 4,
        nombre: 'Santa Marta y Tayrona',
        ciudad: 'Santa Marta',
        departamento: 'Magdalena',
        descripcionBreve: 'Playas vírgenes y naturaleza exuberante',
        descripcionCompleta: 'Explora el Parque Nacional Natural Tayrona, con sus playas cristalinas y selva tropical. Visita el centro histórico de Santa Marta y relájate en las mejores playas del Caribe colombiano.',
        imagenUrl: 'https://picsum.photos/id/13/400/300',
        categoria: 'playa',
        precio: 490000,
        duracion: '4 días / 3 noches',
        incluye: 'Hospedaje, entrada al Parque Tayrona, transporte, guía bilingüe'
    },
    {
        id: 5,
        nombre: 'San Andrés Islas',
        ciudad: 'San Andrés',
        departamento: 'San Andrés',
        descripcionBreve: 'Mar de los 7 colores, paraíso caribeño',
        descripcionCompleta: 'Vive una experiencia única en el Caribe colombiano. Bucea en el mar de los 7 colores, visita la laguna Encantada, practica snorkel en Johnny Cay y disfruta de la cultura isleña.',
        imagenUrl: 'https://picsum.photos/id/14/400/300',
        categoria: 'isla',
        precio: 650000,
        duracion: '5 días / 4 noches',
        incluye: 'Vuelo ida y vuelta, hospedaje, tour por la isla, snorkel'
    },
    {
        id: 6,
        nombre: 'Caño Cristales',
        ciudad: 'La Macarena',
        departamento: 'Meta',
        descripcionBreve: 'El río de los 5 colores, joya de la naturaleza',
        descripcionCompleta: 'Conoce el río más hermoso del mundo. Durante la temporada de lluvias, sus aguas se tiñen de rojo, amarillo, verde, azul y negro gracias a las plantas acuáticas. Una experiencia inolvidable.',
        imagenUrl: 'https://picsum.photos/id/104/400/300',
        categoria: 'naturaleza',
        precio: 780000,
        duracion: '4 días / 3 noches',
        incluye: 'Vuelos, hospedaje, entradas, guía especializado'
    },
    {
        id: 7,
        nombre: 'Villa de Leyva',
        ciudad: 'Villa de Leyva',
        departamento: 'Boyacá',
        descripcionBreve: 'Arquitectura colonial y misterios prehistóricos',
        descripcionCompleta: 'Recorre la ciudad colonial mejor conservada de Colombia. Visita el fósil de kronosaurus, el desierto de la Candelaria y disfruta de la gastronomía boyacense.',
        imagenUrl: 'https://picsum.photos/id/15/400/300',
        categoria: 'historia',
        precio: 320000,
        duracion: '3 días / 2 noches',
        incluye: 'Hospedaje, desayunos, tours, transporte'
    },
    {
        id: 8,
        nombre: 'Leticia - Amazonas',
        ciudad: 'Leticia',
        departamento: 'Amazonas',
        descripcionBreve: 'Aventura en la selva amazónica',
        descripcionCompleta: 'Explora la selva tropical más grande del mundo. Navega por el Amazonas, visita comunidades indígenas, observa delfines rosados y vive la magia de la selva.',
        imagenUrl: 'https://picsum.photos/id/16/400/300',
        categoria: 'aventura',
        precio: 890000,
        duracion: '5 días / 4 noches',
        incluye: 'Vuelos, hospedaje, tours selváticos, alimentación'
    },
    {
        id: 9,
        nombre: 'Salento y Cocora',
        ciudad: 'Salento',
        departamento: 'Quindío',
        descripcionBreve: 'Palmas de cera y pueblos coloridos',
        descripcionCompleta: 'Visita el pueblo más colorido de Colombia. Camina entre las palmas más altas del mundo en el Valle del Cocora y prueba el mejor café de la región.',
        imagenUrl: 'https://picsum.photos/id/17/400/300',
        categoria: 'naturaleza',
        precio: 290000,
        duracion: '2 días / 1 noche',
        incluye: 'Hospedaje, tour al Valle del Cocora, desayunos'
    },
    {
        id: 10,
        nombre: 'Desierto de la Tatacoa',
        ciudad: 'Villavieja',
        departamento: 'Huila',
        descripcionBreve: 'Paisaje lunar y observación de estrellas',
        descripcionCompleta: 'Descubre un paisaje único en el mundo. El desierto de la Tatacoa ofrece formaciones rocosas impresionantes y un cielo perfecto para la observación astronómica.',
        imagenUrl: 'https://picsum.photos/id/18/400/300',
        categoria: 'aventura',
        precio: 350000,
        duracion: '2 días / 1 noche',
        incluye: 'Transporte, hospedaje, tour astronómico'
    }
];

// ==================== GESTIÓN DE FAVORITOS (localStorage) ====================
function obtenerFavoritos() {
    const favs = localStorage.getItem('colombia_favoritos');
    return favs ? JSON.parse(favs) : [];
}

function guardarFavoritos(favoritos) {
    localStorage.setItem('colombia_favoritos', JSON.stringify(favoritos));
    actualizarContadorFavoritos();
}

function esFavorito(id) {
    return obtenerFavoritos().includes(id);
}

function agregarFavorito(id) {
    let favoritos = obtenerFavoritos();
    if (!favoritos.includes(id)) {
        favoritos.push(id);
        guardarFavoritos(favoritos);
        mostrarAlerta('success', '✅ ¡Destino agregado a tus favoritos!');
    }
}

function quitarFavorito(id) {
    let favoritos = obtenerFavoritos();
    favoritos = favoritos.filter(favId => favId !== id);
    guardarFavoritos(favoritos);
    mostrarAlerta('info', '🗑️ Destino eliminado de favoritos');
}

function toggleFavorito(id) {
    if (esFavorito(id)) {
        quitarFavorito(id);
    } else {
        agregarFavorito(id);
    }
    const vistaActual = document.querySelector('[data-vista-actual]')?.getAttribute('data-vista-actual') || 'inicio';
    mostrarVista(vistaActual);
}

function actualizarContadorFavoritos() {
    const contador = document.getElementById('contadorFavoritos');
    if (contador) {
        const cantidad = obtenerFavoritos().length;
        contador.textContent = cantidad;
        if (cantidad > 0) {
            contador.style.display = 'inline-block';
        } else {
            contador.style.display = 'none';
        }
    }
}

// ==================== CRUD: CREAR Y ELIMINAR DESTINOS ====================
function crearDestino(event) {
    event.preventDefault();
    
    const form = event.target;
    const nuevoDestino = {
        id: Math.max(...destinos.map(d => d.id)) + 1,
        nombre: form.nombre.value,
        ciudad: form.ciudad.value,
        departamento: form.departamento.value,
        descripcionBreve: form.descripcionBreve.value,
        descripcionCompleta: form.descripcionCompleta.value,
        imagenUrl: form.imagenUrl.value || 'https://picsum.photos/id/42/400/300',
        categoria: form.categoria.value,
        precio: parseInt(form.precio.value),
        duracion: form.duracion.value,
        incluye: form.incluye.value
    };
    
    destinos.push(nuevoDestino);
    form.reset();
    mostrarAlerta('success', '✅ ¡Nuevo destino turístico creado exitosamente!');
    mostrarVista('destinos');
}

function eliminarDestino(id) {
    if (confirm('¿Estás seguro de eliminar este destino turístico? Esta acción no se puede deshacer.')) {
        destinos = destinos.filter(d => d.id !== id);
        const favoritosActuales = obtenerFavoritos();
        const nuevosFavoritos = favoritosActuales.filter(favId => favId !== id);
        guardarFavoritos(nuevosFavoritos);
        mostrarAlerta('success', '🗑️ Destino eliminado correctamente');
        mostrarVista('destinos');
    }
}

// ==================== CONTACTO ====================
function enviarContacto(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('contactNombre').value;
    const email = document.getElementById('contactEmail').value;
    const mensaje = document.getElementById('contactMensaje').value;
    
    if (!nombre || !email || !mensaje) {
        mostrarAlerta('warning', '⚠️ Por favor completa todos los campos');
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        mostrarAlerta('danger', '❌ Por favor ingresa un correo electrónico válido');
        return;
    }
    
    mostrarAlerta('success', '✅ ¡Mensaje enviado! Pronto un asesor te contactará para planificar tu viaje por Colombia.');
    event.target.reset();
}

// ==================== ALERTAS ====================
function mostrarAlerta(tipo, mensaje) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${tipo} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-5`;
    alertDiv.style.zIndex = '9999';
    alertDiv.style.minWidth = '350px';
    alertDiv.style.boxShadow = '0 10px 40px rgba(0,0,0,0.2)';
    alertDiv.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// ==================== FORMATEAR PRECIO EN COP ====================
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(precio);
}

// ==================== VISTAS PRINCIPALES ====================
function mostrarVista(vista) {
    const contenedor = document.getElementById('contenidoPrincipal');
    contenedor.setAttribute('data-vista-actual', vista);
    
    switch(vista) {
        case 'inicio':
            contenedor.innerHTML = renderInicio();
            break;
        case 'destinos':
            contenedor.innerHTML = renderDestinos();
            break;
        case 'favoritos':
            contenedor.innerHTML = renderFavoritos();
            break;
        case 'contacto':
            contenedor.innerHTML = renderContacto();
            break;
        case 'gestionar':
            contenedor.innerHTML = renderGestionar();
            break;
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== VISTA INICIO ====================
function renderInicio() {
    const destinosDestacados = destinos.slice(0, 4);
    
    return `
        <div class="vista">
            <!-- Banner de bienvenida -->
            <div class="banner-colombia text-white p-5 rounded-4 mb-5 text-center">
                <i class="bi bi-geo-alt-fill display-1"></i>
                <h1 class="display-4 fw-bold mt-3">¡Descubre la Magia de Colombia!</h1>
                <p class="lead fs-3">Destinos turísticos increíbles a los mejores precios</p>
                <p class="mb-3">Desde las playas del Caribe hasta la selva amazónica</p>
                <button class="btn btn-success btn-lg mt-3" onclick="mostrarVista('destinos')">
                    <i class="bi bi-search-heart"></i> Explorar Destinos
                </button>
            </div>

            <!-- Destinos destacados -->
            <h2 class="text-center mb-4">✨ Destinos Turísticos Destacados</h2>
            <div class="row g-4">
                ${destinosDestacados.map(destino => `
                    <div class="col-md-6 col-lg-3">
                        <div class="card h-100 shadow-sm">
                            <img src="${destino.imagenUrl}" class="card-img-top" alt="${destino.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${destino.nombre}</h5>
                                <p class="card-text text-muted"><i class="bi bi-geo-alt"></i> ${destino.ciudad}, ${destino.departamento}</p>
                                <p class="card-text">${destino.descripcionBreve}</p>
                                <p class="fw-bold text-primary fs-4">${formatearPrecio(destino.precio)}</p>
                                <p class="text-muted small"><i class="bi bi-clock"></i> ${destino.duracion}</p>
                                <button class="btn btn-primary w-100" onclick="verDetalle(${destino.id})">
                                    <i class="bi bi-eye"></i> Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Por qué Colombia -->
            <div class="row mt-5 py-4 bg-gradient-colombia text-white rounded-4">
                <div class="col-12 text-center mb-4">
                    <h2><i class="bi bi-heart-fill"></i> ¿Por qué viajar por Colombia?</h2>
                </div>
                <div class="col-md-4 text-center">
                    <i class="bi bi-globe2 display-3"></i>
                    <h5 class="mt-2">Biodiversidad única</h5>
                    <p>Somos el segundo país más biodiverso del mundo</p>
                </div>
                <div class="col-md-4 text-center">
                    <i class="bi bi-emoji-sunglasses display-3"></i>
                    <h5 class="mt-2">Gente acogedora</h5>
                    <p>Colombianos famosos por su calidez y hospitalidad</p>
                </div>
                <div class="col-md-4 text-center">
                    <i class="bi bi-cup-straw display-3"></i>
                    <h5 class="mt-2">Gastronomía única</h5>
                    <p>Sabores tradicionales que enamoran</p>
                </div>
            </div>

            <!-- Testimonios de viajeros -->
            <div class="row mt-5">
                <div class="col-12">
                    <h3 class="text-center mb-4">📢 Lo que dicen nuestros viajeros</h3>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card text-center p-3 h-100">
                        <i class="bi bi-star-fill text-warning fs-1"></i>
                        <p class="mt-2">"La experiencia en Cartagena fue inolvidable. Excelente organización y atención."</p>
                        <small>- María Rodríguez, Medellín</small>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card text-center p-3 h-100">
                        <i class="bi bi-star-fill text-warning fs-1"></i>
                        <p class="mt-2">"El Eje Cafetero es mágico. Volveré con mi familia definitivamente."</p>
                        <small>- Juan Pérez, Bogotá</small>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card text-center p-3 h-100">
                        <i class="bi bi-star-fill text-warning fs-1"></i>
                        <p class="mt-2">"San Andrés superó mis expectativas. El mar de 7 colores es real."</p>
                        <small>- Laura Torres, Cali</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== VISTA DESTINOS ====================
function renderDestinos() {
    if (destinos.length === 0) {
        return `
            <div class="alert alert-info text-center">
                <i class="bi bi-info-circle fs-1"></i>
                <h3>No hay destinos disponibles</h3>
                <p>¡Agrega tu primer destino turístico!</p>
                <button class="btn btn-primary" onclick="mostrarVista('gestionar')">Administrar destinos</button>
            </div>
        `;
    }
    
    return `
        <div class="vista">
            <h2 class="mb-4">🗺️ Todos los destinos de Colombia</h2>
            <div class="row g-4">
                ${destinos.map(destino => `
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100 shadow-lg">
                            <img src="${destino.imagenUrl}" class="card-img-top" alt="${destino.nombre}">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">${destino.nombre}</h5>
                                    <span class="badge bg-primary">${destino.categoria}</span>
                                </div>
                                <p class="text-muted small"><i class="bi bi-geo-alt"></i> ${destino.ciudad}, ${destino.departamento}</p>
                                <p class="card-text mt-2">${destino.descripcionBreve}</p>
                                <p class="fw-bold text-primary fs-3">${formatearPrecio(destino.precio)}</p>
                                <p class="text-muted small"><i class="bi bi-calendar"></i> ${destino.duracion}</p>
                                <div class="d-flex gap-2 mt-2">
                                    <button class="btn btn-primary flex-grow-1" onclick="verDetalle(${destino.id})">
                                        <i class="bi bi-eye"></i> Ver más
                                    </button>
                                    <button class="btn ${esFavorito(destino.id) ? 'btn-danger' : 'btn-outline-danger'}" 
                                            onclick="toggleFavorito(${destino.id})">
                                        ${esFavorito(destino.id) ? '❤️' : '🤍'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ==================== VISTA DETALLE ====================
function verDetalle(id) {
    const destino = destinos.find(d => d.id === id);
    if (!destino) {
        mostrarAlerta('danger', 'Destino no encontrado');
        return;
    }
    
    const contenedor = document.getElementById('contenidoPrincipal');
    contenedor.innerHTML = `
        <div class="vista">
            <button class="btn btn-secondary mb-3" onclick="mostrarVista('destinos')">
                ← Volver a destinos
            </button>
            <div class="card shadow-lg border-0">
                <div class="row g-0">
                    <div class="col-md-6">
                        <img src="${destino.imagenUrl}" class="img-fluid rounded-start detalle-imagen" alt="${destino.nombre}">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <span class="badge bg-primary mb-2 fs-6">${destino.categoria}</span>
                            <h2 class="card-title">${destino.nombre}</h2>
                            <p class="text-muted"><i class="bi bi-geo-alt"></i> ${destino.ciudad}, ${destino.departamento}</p>
                            <p class="card-text lead mt-3">${destino.descripcionCompleta}</p>
                            <div class="mt-3">
                                <h5><i class="bi bi-clock"></i> Duración: ${destino.duracion}</h5>
                                <h5><i class="bi bi-gift"></i> Incluye:</h5>
                                <p>${destino.incluye}</p>
                                <h3 class="text-primary mt-3">${formatearPrecio(destino.precio)}</h3>
                            </div>
                            <div class="mt-4 d-flex gap-3">
                                <button class="btn ${esFavorito(destino.id) ? 'btn-danger' : 'btn-outline-danger'} btn-lg" 
                                        onclick="toggleFavorito(${destino.id}); verDetalle(${destino.id})">
                                    ${esFavorito(destino.id) ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
                                </button>
                                <button class="btn btn-success btn-lg" onclick="mostrarVista('contacto')">
                                    <i class="bi bi-whatsapp"></i> Reservar ahora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== VISTA FAVORITOS ====================
function renderFavoritos() {
    const favoritosIds = obtenerFavoritos();
    const destinosFavoritos = destinos.filter(d => favoritosIds.includes(d.id));
    
    if (destinosFavoritos.length === 0) {
        return `
            <div class="alert alert-warning text-center">
                <i class="bi bi-heart fs-1"></i>
                <h3>No tienes destinos favoritos</h3>
                <p>Explora Colombia y guarda tus destinos favoritos ❤️</p>
                <button class="btn btn-primary" onclick="mostrarVista('destinos')">
                    <i class="bi bi-compass"></i> Explorar destinos
                </button>
            </div>
        `;
    }
    
    return `
        <div class="vista">
            <h2 class="mb-4">❤️ Mis destinos favoritos (${destinosFavoritos.length})</h2>
            <div class="row g-4">
                ${destinosFavoritos.map(destino => `
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100 shadow-sm">
                            <img src="${destino.imagenUrl}" class="card-img-top" alt="${destino.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${destino.nombre}</h5>
                                <p class="card-text">${destino.descripcionBreve}</p>
                                <p class="fw-bold text-primary">${formatearPrecio(destino.precio)}</p>
                                <div class="d-flex gap-2">
                                    <button class="btn btn-primary flex-grow-1" onclick="verDetalle(${destino.id})">
                                        Ver detalle
                                    </button>
                                    <button class="btn btn-outline-danger" onclick="toggleFavorito(${destino.id})">
                                        ❌ Quitar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ==================== VISTA CONTACTO ====================
function renderContacto() {
    return `
        <div class="vista">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <div class="card shadow-lg border-0">
                        <div class="card-header bg-gradient-colombia text-white text-center py-3">
                            <h3 class="mb-0"><i class="bi bi-headset"></i> ¿Listo para vivir Colombia?</h3>
                            <p class="mb-0 mt-2">Déjanos tus datos y un asesor te contactará</p>
                        </div>
                        <div class="card-body p-4">
                            <form onsubmit="enviarContacto(event)">
                                <div class="mb-3">
                                    <label class="form-label">Nombre completo *</label>
                                    <input type="text" class="form-control" id="contactNombre" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Correo electrónico *</label>
                                    <input type="email" class="form-control" id="contactEmail" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Teléfono</label>
                                    <input type="tel" class="form-control" id="contactTelefono">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Destino de interés</label>
                                    <select class="form-control" id="contactDestino">
                                        <option value="">Selecciona un destino</option>
                                        ${destinos.map(d => `<option value="${d.nombre}">${d.nombre}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mensaje *</label>
                                    <textarea class="form-control" id="contactMensaje" rows="4" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-success w-100">
                                    <i class="bi bi-send"></i> Enviar mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== VISTA GESTIONAR (CRUD) ====================
function renderGestionar() {
    return `
        <div class="vista">
            <h2 class="mb-4">⚙️ Administración de Destinos Turísticos</h2>
            <div class="alert alert-info">
                <i class="bi bi-info-circle"></i> Aquí puedes agregar nuevos destinos turísticos de Colombia o eliminar los existentes.
            </div>
            <div class="row">
                <!-- Formulario para crear -->
                <div class="col-md-5 mb-4">
                    <div class="card shadow-lg border-0">
                        <div class="card-header bg-success text-white">
                            <h4 class="mb-0"><i class="bi bi-plus-circle"></i> Agregar nuevo destino</h4>
                        </div>
                        <div class="card-body">
                            <form onsubmit="crearDestino(event)">
                                <div class="mb-3">
                                    <label class="form-label">Nombre del destino *</label>
                                    <input type="text" class="form-control" name="nombre" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Ciudad *</label>
                                    <input type="text" class="form-control" name="ciudad" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Departamento *</label>
                                    <input type="text" class="form-control" name="departamento" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Descripción breve *</label>
                                    <input type="text" class="form-control" name="descripcionBreve" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Descripción completa *</label>
                                    <textarea class="form-control" name="descripcionCompleta" rows="3" required></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">URL de imagen</label>
                                    <input type="text" class="form-control" name="imagenUrl" placeholder="https://picsum.photos/id/42/400/300">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Categoría</label>
                                    <select class="form-control" name="categoria">
                                        <option value="playa">🏖️ Playa</option>
                                        <option value="ciudad">🏙️ Ciudad</option>
                                        <option value="naturaleza">🌿 Naturaleza</option>
                                        <option value="aventura">🧗 Aventura</option>
                                        <option value="historia">🏛️ Historia</option>
                                        <option value="isla">🏝️ Isla</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Precio en COP *</label>
                                    <input type="number" class="form-control" name="precio" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Duración *</label>
                                    <input type="text" class="form-control" name="duracion" placeholder="Ej: 3 días / 2 noches" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Incluye *</label>
                                    <textarea class="form-control" name="incluye" rows="2" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-success w-100">
                                    <i class="bi bi-check-circle"></i> Crear destino
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Lista de destinos para eliminar -->
                <div class="col-md-7">
                    <div class="card shadow-lg border-0">
                        <div class="card-header bg-danger text-white">
                            <h4 class="mb-0"><i class="bi bi-trash"></i> Eliminar destinos existentes</h4>
                        </div>
                        <div class="card-body" style="max-height: 600px; overflow-y: auto;">
                            ${destinos.map(destino => `
                                <div class="list-group-item d-flex justify-content-between align-items-center mb-2 p-3 border rounded">
                                    <div>
                                        <strong><i class="bi bi-geo-alt"></i> ${destino.nombre}</strong><br>
                                        <small class="text-muted">${destino.ciudad}, ${destino.departamento}</small><br>
                                        <small>${destino.descripcionBreve.substring(0, 60)}...</small><br>
                                        <span class="badge bg-primary mt-1">${destino.categoria}</span>
                                        <span class="badge bg-success mt-1">${formatearPrecio(destino.precio)}</span>
                                    </div>
                                    <button class="btn btn-danger btn-sm" onclick="eliminarDestino(${destino.id})">
                                        <i class="bi bi-trash"></i> Eliminar
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== INICIALIZAR APLICACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    mostrarVista('inicio');
    actualizarContadorFavoritos();
    console.log('🇨🇴 ColombiaViajero - Proyecto Politécnico Grancolombiano 2026');
    console.log('Desarrollado por: Cristian Garzón');
});