// src/data/site.ts

/**
 * Configuración centralizada de datos oficiales de El Mirador del Cielo.
 * Modifica aquí teléfonos, enlaces de redes, Google Maps, horarios y datos de contacto
 * para que se reflejen automáticamente en todos los componentes y metadatos SEO.
 */
export const siteConfig = {
  name: 'El Mirador del Cielo',
  tagline: 'Gastronomía & Atardeceres en Río de Oro',
  description:
    'El Mirador del Cielo en Río de Oro, Cesar. Disfruta de la mejor vista panorámica, granizados artesanales, pizzetas crocantes y momentos inolvidables.',

  contact: {
    // Número oficial para wa.me (formato internacional sin signos ni espacios)
    phone: '573000000000',
    // Formato con código internacional para SEO Schema.org y visualización
    phoneFormatted: '+573000000000',
    // Generador de enlaces a WhatsApp con texto codificado
    getWhatsAppUrl: (message?: string) => {
      const base = 'https://wa.me/573000000000';
      return message ? `${base}?text=${encodeURIComponent(message)}` : base;
    }
  },

  social: {
    instagram: {
      username: '@miradordelcielordo',
      url: 'https://www.instagram.com/miradordelcielordo?igsi=ZDNya3E1b3Q3cWE5'
    }
  },

  location: {
    name: 'Cerro de la Virgen',
    address: 'Cerro de la Virgen',
    locality: 'Río de Oro',
    region: 'Cesar',
    country: 'CO',
    postalCode: '205010',
    coordinates: {
      latitude: 8.2910646,
      longitude: -73.3840203
    }
  },

  googleMaps: {
    // Enlace directo oficial a la ficha de El Mirador en Google Maps (limpio)
    placeUrl:
      'https://www.google.com/maps/place/MIRADOR+DEL+CIELO/@8.2910646,-73.3840203,17z/data=!3m1!4b1!4m6!3m5!1s0x8e677d004a625959:0xd89b6c13b37b8fd8!8m2!3d8.2910646!4d-73.3840203!16s%2Fg%2F11z4dlswfq',
    // Enlace permanente por identificador CID (abre la ficha directamente en Maps / Web)
    cidUrl: 'https://maps.google.com/?cid=15608187765453983704',
    // Enlace directo a la pestaña de reseñas para leer o calificar
    reviewUrl:
      'https://www.google.com/maps/place/MIRADOR+DEL+CIELO/@8.2910646,-73.3840203,17z/data=!4m8!3m7!1s0x8e677d004a625959:0xd89b6c13b37b8fd8!8m2!3d8.2910646!4d-73.3840203!9m1!1b1!16s%2Fg%2F11z4dlswfq',
    // Navegación GPS directa paso a paso en Google Maps (ideal para turistas desde Ocaña/Cesar)
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=8.2910646,-73.3840203',
    // Navegación GPS alternativa en Waze
    wazeUrl:
      'https://waze.com/ul?ll=8.2910646,-73.3840203&navigate=yes',
    // Iframe embed para la sección de ubicación
    embedUrl:
      'https://maps.google.com/maps?q=8.2910646,-73.3840203+(MIRADOR%20DEL%20CIELO)&t=&z=17&ie=UTF8&iwloc=&output=embed'
  },

  rating: {
    ratingValue: '5.0',
    ratingCount: '1',
    bestRating: '5',
    worstRating: '1'
  },

  schedule: {
    days: 'Martes a Domingo',
    hours: '3:00 PM a 10:00 PM',
    opens: '15:00',
    closes: '22:00',
    goldenHourHint: 'Hora recomendada: 4:30 PM para atardecer'
  }
};
