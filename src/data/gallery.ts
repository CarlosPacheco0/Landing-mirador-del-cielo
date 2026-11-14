import { url } from '../utils/paths';

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  desc: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 0,
    src: url('/images/monumento.webp'),
    title: 'Vista Panorámica del Cerro',
    desc: 'Atardecer único desde el Cerro del Monumento a la Virgen en Río de Oro.'
  },
  {
    id: 1,
    src: url('/images/granizados.jpeg'),
    title: 'Granizados Artesanales',
    desc: 'Sabor refrescante cítrico y frutal, servido helado para el calor de la tarde.'
  },
  {
    id: 2,
    src: url('/images/pizzeta.jpeg'),
    title: 'Pizzeta Artesanal Horneada',
    desc: 'Masa crujiente horneada con abundante queso y salsa napolitana de la casa.'
  },
  {
    id: 3,
    src: url('/images/empanadas.jpeg'),
    title: 'Empanadas Crocantes',
    desc: 'Empanadas tradicionales doradas servidas con ají casero especial.'
  },
  {
    id: 4,
    src: url('/images/pin01.webp'),
    title: 'Pin Fachada El Mirador',
    desc: 'Edición conmemorativa en metal con detalles de la fachada original.'
  },
  {
    id: 5,
    src: url('/images/pin02.webp'),
    title: 'Pin Jaguar 368 Años',
    desc: 'Pin oficial celebrando la historia y fauna representativa de Río de Oro.'
  }
];

