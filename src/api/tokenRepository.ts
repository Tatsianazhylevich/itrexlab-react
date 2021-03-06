export const setToken = (token: any) => localStorage.setItem('access_token', token);
export const setRefreshToken = (token: any) => localStorage.setItem('refresh_token', token);

export const getToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');
