export interface Review {
  id: number;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  comment: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'María Camila Rodríguez',
    role: 'Visitante de Ocaña',
    initials: 'MC',
    avatarBg: 'from-purple-500 to-pink-500',
    comment: 'La vista al atardecer desde la terraza es Sencillamente ESPECTACULAR. Los granizados están ultra fríos y deliciosos. Definitivamente el mejor lugar para tardear en Río de Oro.',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Eduardo Páez',
    role: 'Visitante Local',
    initials: 'CE',
    avatarBg: 'from-amber-500 to-orange-500',
    comment: 'Excelente atención, la pizzeta artesanal viene bien cargada y doradita. Nos encantó que es Pet Friendly, pudimos traer a nuestro perrito sin ningún problema.',
    rating: 5
  },
  {
    id: 3,
    name: 'Andrea Gutiérrez',
    role: 'Turista',
    initials: 'AG',
    avatarBg: 'from-blue-500 to-cyan-500',
    comment: 'Compré los dos pines de colección para llevar de recuerdo a Bogotá. El ambiente con música suave y la brisa fresca del cerro hacen de la visita algo mágico.',
    rating: 5
  }
];

