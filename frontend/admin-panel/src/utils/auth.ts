export const isTokenValid = (): boolean => {
    const token = localStorage.getItem('access_token');
    const tokenTimestamp = localStorage.getItem('token_timestamp');

    if (!token || !tokenTimestamp) {
      return false; // Token ou timestamp não existem
    }

    const currentTime = Date.now();
    const tokenAge = currentTime - parseInt(tokenTimestamp, 10);

    // Define o tempo de expiração do token (exemplo: 1 hora)
    const tokenExpirationTime = 60 * 60 * 30; // 1 hora em milissegundos

    return tokenAge < tokenExpirationTime; // Retorna true se o token ainda for válido
  };
