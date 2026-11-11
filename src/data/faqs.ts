export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: '¿Se requiere reserva previa para ingresar?',
    answer: 'No es obligatoria la reserva previa. Atendemos por orden de llegada. Sin embargo, para grupos grandes o celebraciones especiales puedes reservar desde el botón superior o escribirnos directamente por WhatsApp.'
  },
  {
    id: 2,
    question: '¿Cuentan con parqueadero disponible?',
    answer: 'Sí, en la zona adyacente al Cerro de la Virgen se dispone de espacio para estacionar automóviles y motocicletas de forma segura.'
  },
  {
    id: 3,
    question: '¿Es un espacio Pet Friendly?',
    answer: '¡Por supuesto! Nos encanta recibir a tus mascotas. Contamos con amplia terraza al aire libre para que disfruten de la brisa de montaña a tu lado.'
  },
  {
    id: 4,
    question: '¿Cuál es la mejor hora para llegar y tomar fotos?',
    answer: 'Te recomendamos llegar entre las 4:30 PM y 5:30 PM para alcanzar la "Hora Dorada", admirar la puesta de sol completa y disfrutar la iluminación nocturna del mirador.'
  },
  {
    id: 5,
    question: '¿Qué medios de pago aceptan?',
    answer: 'Aceptamos efectivo, transferencias bancarias en línea por Nequi y Daviplata.'
  }
];

