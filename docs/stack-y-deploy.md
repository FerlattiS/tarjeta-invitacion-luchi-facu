# Stack y deploy del proyecto

## Objetivo

Crear una invitacion web para el casamiento de Luciana y Facundo, con una estetica minimalista, elegante, interactiva y sutil. La referencia funcional principal es una web tipo invitacion con portada, cuenta regresiva, secciones informativas, galeria, botones de accion y modales.

## Direccion estetica inicial

Referencia visual del PDF:

- Formato vertical mobile-first.
- Portada full-bleed con foto en blanco y negro.
- Fondo oscuro tipo carbon en las secciones internas.
- Acentos beige/taupe para titulos, iconos y detalles.
- Tipografia manuscrita para nombres y algunos encabezados.
- Sans serif en mayusculas para informacion practica.
- Iconografia lineal simple.
- Botones blancos tipo pildora con texto oscuro.
- Mucho aire vertical y composicion centrada.

Adaptacion para nuestra web:

- Mantener el clima sobrio, fotografico y elegante.
- Reducir frases demasiado romanticas o cursis.
- Priorizar informacion clara: fecha, horarios, ubicaciones, dress code, regalos y confirmacion.
- Usar animaciones sutiles, no protagonistas.
- Hacer que la primera pantalla sea la invitacion en si, no una landing explicativa.

## Stack propuesto

### Vite

Vite es la herramienta para crear y correr el proyecto frontend en desarrollo.

Pros:
- Arranca muy rapido.
- Es simple para proyectos chicos y medianos.
- Funciona muy bien con React y TypeScript.
- Genera archivos estaticos faciles de publicar.

Contras:
- Hay que tener Node.js y npm instalados.
- Para GitHub Pages requiere configurar bien el `base` si el sitio se publica dentro de un subpath.

Uso esperado:
- Crear el proyecto.
- Correrlo localmente con `npm run dev`.
- Generar la version publicable con `npm run build`.

### React

React permite dividir la invitacion en componentes: portada, cuenta regresiva, evento, dress code, galeria, regalos, RSVP y footer.

Pros:
- Componentes reutilizables y faciles de mantener.
- Buen ecosistema.
- Ideal para interacciones simples sin armar todo a mano.
- Suma valor para portfolio porque es una tecnologia muy reconocida.

Contras:
- Tiene una curva inicial si venis de HTML/CSS puro.
- Para una invitacion muy simple podria ser mas de lo estrictamente necesario, aunque sigue siendo una buena eleccion si queres aprender.

Uso esperado:
- Componentes chicos y claros.
- Estado simple para modales, cuenta regresiva y copiado de datos.
- Evitar sobre-ingenieria.

### TypeScript

TypeScript agrega tipos sobre JavaScript.

Pros:
- Ayuda a detectar errores temprano.
- Hace el proyecto mas prolijo para portfolio.
- Mejora el autocompletado y la lectura del codigo.

Contras:
- Agrega algunos conceptos nuevos.
- Al principio puede sentirse mas estricto que JavaScript.

Uso esperado:
- Tipos simples para datos del evento, links, secciones y fotos.
- No hace falta usar patrones complejos.

### Tailwind CSS

Tailwind permite escribir estilos usando clases utilitarias.

Pros:
- Muy bueno para aprender spacing, responsive design, colores y jerarquias visuales.
- Evita saltar todo el tiempo entre archivos CSS.
- Permite prototipar rapido.
- Buen match para una estetica minimalista.

Contras:
- El HTML/JSX puede quedar cargado de clases.
- Requiere aprender la convencion de nombres.
- Si no se ordena bien, puede generar estilos inconsistentes.

Uso esperado:
- Mobile-first.
- Paleta sobria y limitada.
- Componentes con estilos claros.
- Algunas clases compartidas para botones, titulos y secciones.

### Framer Motion

Framer Motion sirve para animaciones en React.

Pros:
- Animaciones suaves y declarativas.
- Ideal para apariciones sutiles, transiciones y microinteracciones.
- Menos friccion que escribir animaciones complejas a mano.

Contras:
- Es una dependencia extra.
- Si se usa demasiado, puede volver la invitacion pesada o distraer.

Uso esperado:
- Usarlo solo si las animaciones CSS no alcanzan.
- Apariciones suaves por seccion.
- Transiciones elegantes, sin efectos exagerados.

### Lucide React

Lucide es una libreria de iconos.

Pros:
- Iconos limpios y modernos.
- Buena consistencia visual.
- Liviana y facil de usar.

Contras:
- Es otra dependencia.
- Conviene no abusar de iconos si la estetica busca ser editorial/minimalista.

Uso esperado:
- Iconos para ubicacion, calendario, regalo, copiar, musica o confirmacion.

## Backend

La recomendacion inicial es no usar backend.

Pros de no usar backend:
- Menos costo.
- Menos mantenimiento.
- Deploy mas simple.
- Menos puntos de falla.

Contras:
- No se guardan datos propios dentro de la app.
- RSVP, sugerencias de canciones o mensajes necesitan una herramienta externa.

Alternativas simples:
- Google Forms.
- Tally.
- Typeform.
- Un formulario de Netlify Forms si se usa Netlify.

Mas adelante, si hace falta:
- Supabase para guardar confirmaciones, invitados o canciones.
- Firebase si se quiere algo realtime o muy integrado al frontend.

## Deploy

### GitHub Pages

GitHub Pages publica sitios estaticos directamente desde un repositorio.

Pros:
- Gratis.
- Muy bueno para portfolio.
- Queda integrado con GitHub.
- Perfecto para una invitacion estatica.

Contras:
- Configurar rutas puede ser un poco mas delicado con Vite.
- No trae funciones serverless propias.
- El dominio por defecto queda como `usuario.github.io/repositorio`.

Cuando conviene:
- Primera version.
- Portfolio.
- Proyecto estatico sin backend.

Notas para Vite:
- Si el repo se llama `tarjeta-luchi`, posiblemente haya que configurar `base: "/tarjeta-luchi/"` en `vite.config.ts`.
- Se puede automatizar el deploy con GitHub Actions.

### Vercel

Vercel es una plataforma de deploy muy orientada a frontend moderno.

Pros:
- Deploy muy facil desde GitHub.
- Preview deployments por cada branch o pull request.
- Excelente experiencia para React/Vite/Next.js.
- Dominios custom faciles de configurar.

Contras:
- Para una app estatica simple puede ser mas plataforma de la necesaria.
- Algunas funciones avanzadas dependen del plan.
- Te ata un poco mas a su ecosistema si despues sumas serverless.

Cuando conviene:
- Si queres previews automaticos.
- Si queres una experiencia de deploy muy comoda.
- Si mas adelante queres experimentar con Next.js o funciones serverless.

Info basica:
- Conectas el repo de GitHub.
- Vercel detecta Vite.
- Build command: `npm run build`.
- Output directory: `dist`.

### Netlify

Netlify tambien publica sitios estaticos y tiene buenas herramientas para formularios.

Pros:
- Deploy simple desde GitHub.
- Buen soporte para sitios estaticos.
- Netlify Forms puede servir para RSVP sin armar backend.
- Preview deployments.
- Dominios custom faciles.

Contras:
- Algunas funciones avanzadas dependen del plan.
- Netlify Forms requiere configurar el formulario de una manera especifica.
- Menos orientado a frameworks fullstack que Vercel, aunque para este proyecto eso no es problema.

Cuando conviene:
- Si queremos RSVP simple sin backend propio.
- Si queremos deploy estatico con formularios integrados.
- Si GitHub Pages queda corto para formularios o previews.

Info basica:
- Conectas el repo de GitHub.
- Build command: `npm run build`.
- Publish directory: `dist`.

## Recomendacion inicial

Para arrancar:

1. Vite + React + TypeScript.
2. Tailwind CSS.
3. Sin backend.
4. RSVP externo con Google Forms o Tally.
5. Deploy inicial en GitHub Pages.
6. Mantener Vercel o Netlify como alternativa si queremos previews, dominio custom mas comodo o formularios integrados.

## Repositorio y portfolio

Conviene que el repo tenga:

- `README.md` con descripcion, capturas y link al deploy.
- Codigo ordenado por componentes.
- Datos del evento separados del layout, por ejemplo en `src/data/event.ts`.
- Buen historial de commits.
- Deploy publico.

Nombre sugerido del repo:

- `tarjeta-luchi-facu`
- `invitacion-luciana-facundo`
- `wedding-invite-luchi-facu`

## Herramientas necesarias en la maquina

Para desarrollar:

- Git.
- Node.js LTS.
- npm, incluido con Node.js.
- GitHub CLI, opcional pero util para crear el repo desde terminal.

Para revisar el PDF de referencia:

- Opcion liviana recomendada: Poppler para Windows, porque trae `pdfinfo` y `pdftoppm`.
- Alternativa: Python + librerias como `pypdf`, `pdfplumber` o `PyMuPDF`.
- Para este proyecto, Poppler alcanza si solo necesitamos convertir paginas del PDF a imagenes para inspeccion visual.
