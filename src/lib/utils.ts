import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatarData(data: Date) {
  const opcoes: Intl.DateTimeFormatOptions = {
    weekday: "short", // "Tue"
    year: "numeric", // "2024"
    month: "short", // "Jun"
    day: "numeric", // "25"
    hour: "2-digit", // "21"
    minute: "2-digit", // "52"
    second: "2-digit", // "21"
    timeZoneName: "short", // "GMT-3"
    timeZone: "America/Sao_Paulo",
  };
  // Garante que a formatação seja feita em pt-BR e considera o fuso horário de São Paulo
  return new Intl.DateTimeFormat("pt-BR", opcoes).format(data);
}
