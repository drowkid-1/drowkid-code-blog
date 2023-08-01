export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Proyectos de código abierto',
    items: [
      {
        name: 'Aplicaciones Android',
        slug: 'apps',
        description: 'Aplicaciones que he creado',
      },
      {
        name: 'Scripts',
        slug: 'route-groups',
        description: 'Instala servicios o herramientas en tu terminal (windows, linux, termux).',
      },
      {
        name: 'Herramientas Online',
        slug: 'parallel-routes',
        description: '¿Te gustó alguna herramienta de mi catálogo open source?, ¡te enseño a personalizarla y subirla a internet!',
      },
    ],
  },
  {
    name: 'Aplicaciones',
    items: [
      {
        name: 'DrowTub',
        slug: 'loading',
        description:
          'Descarga y/o reproduce tu música favorita de distintas plataformas digitales y en distintas calidades.',
      },
      {
        name: 'DrowGenApp',
        slug: 'error-handling',
        description: 'Crea apps para móviles apartir de sitios web. ¡Sólo necesitas la URL!',
      },
      {
        name: 'VirtualXDrow',
        slug: 'not-found',
        description: 'Crea un espacio virtual en tu dispositivo para clonar aplicaciones y tener 2 dispositivos en uno sólo. ',
      },
    ],
  },
  {
    name: 'Generadores',
    items: [
      {
        name: 'DrowLinksGen',
        slug: 'streaming',
        description:
          'Crea Links in Bio en segundos sin suscripciones, sin anuncios, sin keys y sin costo.',
      },
      {
        name: 'GHProfile Gen',
        slug: 'ssg',
        description: 'Genera README.md (archivos md) llamativos y elegantes.',
      },
    ],
  },
  {
    name: 'Scripts',
    items: [
      {
        name: 'DrowScript',
        slug: 'context',
        description:
          'Potente script con 8 herramientas avanzadas desde dns, Localhost, urlacortador, pshishing, qrgen y más',
      },
    ],
  },
  {
    name: 'Misc',
    items: [
      {
        name: 'Client Component Hooks',
        slug: 'hooks',
        description: 'Preview the routing hooks available in Client Components',
      },
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
      {
        name: 'Code Snippets',
        slug: 'snippets',
        description: 'A collection of useful App Router code snippets',
      },
    ],
  },
];
