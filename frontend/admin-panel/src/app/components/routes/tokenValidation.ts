export const isTokenValid = (token: string, tokenTimestamp: string | null): boolean => {

    if (!token || !tokenTimestamp) {
      return false;
    }

    const currentTime = Date.now();
    const tokenAge = currentTime - parseInt(tokenTimestamp, 10);

    const tokenExpirationTime = 60 * 60 * 9999999;

    return tokenAge < tokenExpirationTime;
  };
