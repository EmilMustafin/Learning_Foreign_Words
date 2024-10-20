export const setTokensIntoStorage = (tokens: string): void => {
  localStorage.setItem('accessToken', tokens);
  window.dispatchEvent(new Event('storage'));
};

export const removeTokensFromStorage = (): void => {
  localStorage.removeItem('accessToken');
  window.dispatchEvent(new Event('storage'));
};

export const getAccessToken = (): string | null => localStorage.getItem('accessToken');
