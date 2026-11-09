import { url } from '../utils/paths';

export type GalleryCategory = 'ambiente' | 'gastronomia' | 'noches';

export interface GalleryShowcaseItem {
  id: number;
  src: string;
  title: string;
  desc: string;
  category: GalleryCategory;
  featured?: boolean;
}

export const aboutMonumentItem: GalleryShowcaseItem = {
  id: 0,
  src: url('/images/monumento.png'),
  title: 'Vista Panorámica del Cerro',
  desc: 'Vista aérea del icónico Cerro del Monumento a la Virgen en Río de Oro, hogar de El Mirador del Cielo.',
  category: 'ambiente'
};

// 6 fotos por defecto en la vista principal: 04, 06, 09, 10, 14 y 13
export const defaultGalleryItems: GalleryShowcaseItem[] = [
  {
    id: 1,
    src: url('/images/galeria-masa-artesanal.jpeg'),
    title: 'Masa Artesanal de la Casa',
    desc: 'Preparación diaria con masa fresca artesanal para lograr pizzetas doradas y crocantes al horno.',
    category: 'gastronomia',
    featured: true
  },
  {
    id: 2,
    src: url('/images/galeria-noche-terraza.jpeg'),
    title: 'Noches Temáticas en el Deck',
    desc: 'Ambiente divertido y gastronomía al aire libre frente al letrero oficial de El Mirador.',
    category: 'noches',
    featured: true
  },
  {
    id: 3,
    src: url('/images/galeria-noche-coctel.jpeg'),
    title: 'Cócteles y Sodas de Altura',
    desc: 'Bebidas refrescantes con cítricos deshidratados bajo las guirnaldas de luces cálidas.',
    category: 'noches',
    featured: true
  },
  {
    id: 4,
    src: url('/images/galeria-noche-pizzeta.jpeg'),
    title: 'Pizzetas Recién Horneadas',
    desc: 'Nuestras pizzetas saladas listas para compartir en nuestras noches especiales en el cerro.',
    category: 'noches',
    featured: true
  },
  {
    id: 5,
    src: url('/images/galeria-pizzeta-logo.jpeg'),
    title: 'Pizzeta Dulce & Cóctel',
    desc: 'Pizzeta dulce artesanal con fresas frescas acompañada de cóctel frutal junto a la baranda del mirador.',
    category: 'gastronomia',
    featured: true
  },
  {
    id: 6,
    src: url('/images/galeria-cerro-noche.jpeg'),
    title: 'Río de Oro Iluminado',
    desc: 'Panorámica en hora azul del Monumento a la Virgen iluminado y el municipio entre montañas.',
    category: 'ambiente',
    featured: true
  }
];

// Colección completa para /galeria
export const fullGalleryItems: GalleryShowcaseItem[] = [
  ...defaultGalleryItems,
  {
    id: 7,
    src: url('/images/mirador.webp'),
    title: 'Atardeceres en Nuestra Terraza',
    desc: 'Colores dorados de montaña y luces cálidas recibiendo la caída del sol en Río de Oro.',
    category: 'ambiente'
  },
  aboutMonumentItem,
  {
    id: 8,
    src: url('/images/galeria-terraza-malteada.jpeg'),
    title: 'Noches Bajo las Luces',
    desc: 'Sonrisas, brisa fresca de montaña y malteadas artesanales disfrutadas en terraza.',
    category: 'ambiente'
  },
  {
    id: 9,
    src: url('/images/galeria-malteada-crocante.jpeg'),
    title: 'Malteadas Artesanales',
    desc: 'Malteadas cremosas coronadas con chantilly y topping crocante para acompañar la vista.',
    category: 'gastronomia'
  },
  {
    id: 10,
    src: url('/images/galeria-torta-malteada.jpeg'),
    title: 'Tarde de Torta & Malteada',
    desc: 'Malteada de arándanos y porción de torta casera bañada en salsa de chocolate.',
    category: 'gastronomia'
  },
  {
    id: 11,
    src: url('/images/galeria-pizzeta-coctel.jpeg'),
    title: 'Vista Completa en la Baranda',
    desc: 'Nuestra pizzeta dulce de fresas y cóctel rosado con la panorámica nocturna de fondo.',
    category: 'gastronomia'
  },
  {
    id: 12,
    src: url('/images/recuerdo-mesa-polaroid.jpeg'),
    title: 'Sabores y Recuerdos en la Mesa',
    desc: 'Pizzetas artesanales, bebidas refrescantes y capturas instantáneas de tu visita.',
    category: 'gastronomia'
  },
  {
    id: 13,
    src: url('/images/galeria-noche-dulce.jpeg'),
    title: 'Momentos Dulces Bajo el Cielo',
    desc: 'Malteadas especiales y postres de la casa disfrutados en nuestras veladas nocturnas.',
    category: 'noches'
  }
];

