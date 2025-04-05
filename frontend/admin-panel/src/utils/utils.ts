import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isTokenValid = (token: string, tokenTimestamp: string | null): boolean => {

    if (!token || !tokenTimestamp) {
      return false;
    }

    const currentTime = Date.now();
    const tokenAge = currentTime - parseInt(tokenTimestamp, 10);

    const tokenExpirationTime = 60 * 60 * 1000;

    return tokenAge < tokenExpirationTime;
  };
