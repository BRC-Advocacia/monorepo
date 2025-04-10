import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isTokenValid = (token: string, tokenTimestamp: string): boolean => {

    if (!token || !tokenTimestamp) {
      return false;
    }

    const currentTime = Date.now();
    const tokenAge = currentTime - parseInt(tokenTimestamp, 10);

    const tokenExpirationTime = 60 * 60 * 3600;

    return tokenAge < tokenExpirationTime;
  };
