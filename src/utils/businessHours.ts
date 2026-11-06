// src/utils/businessHours.ts

export interface StoreStatus {
  isOpen: boolean;
  badgeText: string;
  detailText: string;
}

export function calculateStoreStatus(): StoreStatus {
  // Obtenemos la fecha y hora actual en la zona horaria oficial de Colombia (UTC-5)
  const now = new Date();
  const colombiaTimeString = now.toLocaleString("en-US", { timeZone: "America/Bogota" });
  const colDate = new Date(colombiaTimeString);

  const day = colDate.getDay(); // 0 = Domingo, 1 = Lunes, ..., 4 = Jueves, 5 = Viernes, 6 = Sábado
  const hour = colDate.getHours();
  const minute = colDate.getMinutes();
  const currentTime = hour + minute / 60;

  // Días de atención: Jueves (4), Viernes (5), Sábado (6), Domingo (0)
  const isOperatingDay = day === 4 || day === 5 || day === 6 || day === 0;

  // Horario de atención: 4:00 PM (16:00) a 11:00 PM (23:00)
  const isOpen = isOperatingDay && currentTime >= 16 && currentTime < 23;

  if (isOpen) {
    return {
      isOpen: true,
      badgeText: 'Abierto Ahora • Cocina Activa',
      detailText: 'Atendiendo pedidos hasta las 11:00 PM'
    };
  }

  // Si hoy es día de atención pero aún no son las 4 PM
  if (isOperatingDay && currentTime < 16) {
    return {
      isOpen: false,
      badgeText: 'Cerrado Ahora',
      detailText: 'Abrimos hoy a las 4:00 PM'
    };
  }

  // Días cerrados o después de las 11 PM
  let nextDay = 'Jueves';
  if (day === 4 && currentTime >= 23) nextDay = 'Viernes';
  else if (day === 5 && currentTime >= 23) nextDay = 'Sábado';
  else if (day === 6 && currentTime >= 23) nextDay = 'Domingo';
  else if (day === 0 && currentTime >= 23) nextDay = 'Jueves';
  else if (day === 1 || day === 2 || day === 3) nextDay = 'Jueves';

  return {
    isOpen: false,
    badgeText: 'Cerrado Ahora',
    detailText: `Abrimos el ${nextDay} a las 4:00 PM`
  };
}
