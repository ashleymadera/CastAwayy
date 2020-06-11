import api from './api-helper';

export const loginAdmin = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.admin
}

export const registerAdmin = async (registerData) => {
  const resp = await api.post('/admins/', { admin: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.admin
}

export const verifyAdmin = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}