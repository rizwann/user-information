import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAge = (birthDate: string) => {
  const birthDateInMilliseconds = new Date(birthDate).getTime();
  const currentDateInMilliseconds = Date.now();
  // Check if the provided birthDate is not a valid date
  if (isNaN(birthDateInMilliseconds)) {
    return 0;
  }
  // If the birth date is in the future, return 0
  if (birthDateInMilliseconds > currentDateInMilliseconds) {
    return 0;
  }

  const timeDiff = Math.abs(
    currentDateInMilliseconds - birthDateInMilliseconds
  );
  const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  return age;
};
export const fetchUsers = async (url: string) => {
  try {
    const res = await fetch(url);
    const fetchedUsers = await res.json();
    return fetchedUsers;
  } catch (error) {
    console.log("Error fetching users data", error);
    return undefined;
  }
};
