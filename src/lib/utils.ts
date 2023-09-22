import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAge = (birthDate: string) => {
  const timeDiff = Math.abs(Date.now() - new Date(birthDate).getTime());
  const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  return age;
};
