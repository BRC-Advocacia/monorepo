export const isTokenValid = (): boolean => {
    const token = localStorage.getItem('access_token');
    const tokenTimestamp = localStorage.getItem('token_timestamp');

    if (!token || !tokenTimestamp) {
      return false;
    }

    const currentTime = Date.now();
    const tokenAge = currentTime - parseInt(tokenTimestamp, 10);

    const tokenExpirationTime = 60 * 60 * 1000;

    return tokenAge < tokenExpirationTime; 
  };
