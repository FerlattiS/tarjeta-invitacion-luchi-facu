# Como funcionaria con fotos definitivas

La invitacion ya tiene una seccion de fotos con placeholders. Cuando esten elegidas las imagenes reales, la idea es reemplazar esos placeholders por assets optimizados dentro del proyecto.

## Cantidad recomendada

Para mantener la invitacion liviana y elegante:

- 1 foto principal para portada.
- 4 a 6 fotos para galeria.
- 1 o 2 fotos de detalle si suman clima visual.

No conviene cargar muchas fotos en la primera version porque la mayoria de invitados la va a abrir desde el celular.

## Formato ideal

- Portada: vertical, proporcion aproximada `9:16`.
- Galeria: vertical o cuadrada, idealmente todas con un encuadre similar.
- Peso por imagen: intentar quedar debajo de `300 KB` cuando sea posible.
- Formato recomendado: `webp`.
- Alternativa: `jpg` optimizado.

## Donde irian los archivos

Una estructura posible:

```text
src/assets/photos/
  portada.webp
  galeria-01.webp
  galeria-02.webp
  galeria-03.webp
  galeria-04.webp
```

La portada actual esta en:

```text
src/assets/hero-reference.png
```

Cuando tengamos la foto definitiva, se reemplaza por una imagen propia y se actualiza el import en `src/App.tsx`.

## Como se veria en codigo

La galeria podria quedar con un array simple:

```ts
import foto1 from "../assets/photos/galeria-01.webp";
import foto2 from "../assets/photos/galeria-02.webp";

export const photos = [
  { src: foto1, alt: "Luciana y Facundo" },
  { src: foto2, alt: "Detalle de la pareja" },
];
```

Despues React renderiza esas fotos en la seccion `Fotos`, reemplazando los placeholders actuales.

## Criterio visual

- Mantener blanco y negro o tonos desaturados si queremos respetar el boceto de Canva.
- Evitar fotos demasiado oscuras si van a tener texto encima.
- Priorizar imagenes con aire negativo para portada.
- No usar muchas fotos con estilos distintos entre si.

## Proxima decision

Cuando tengan las fotos, conviene elegir primero la portada. Esa imagen define gran parte del tono visual del resto de la invitacion.

