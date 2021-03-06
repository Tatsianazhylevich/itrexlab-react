import { instance } from './instance.api';

export const registration = (body: {}) => instance
  .post('auth/registration', body);

export const login = (body: {}) => instance
  .post('auth/login', body);

export const getUserProfile = () => instance
  .get('auth/profile');
