import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dataTimeFormat(data: Date) {
  const opcoes: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  };

  // Garante que a formatação seja feita em pt-BR e considera o fuso horário de São Paulo
  return new Intl.DateTimeFormat("pt-BR", opcoes).format(data);
}
