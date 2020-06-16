

import api from './api-helper'

export const getAllAdmins = async () => {
  const resp = await api.get('/admins')
  return resp.data
}

export const getAAdmin = async (id) => {
  const resp = await api.get(`/admins/${id}`)
  return resp.data
}
