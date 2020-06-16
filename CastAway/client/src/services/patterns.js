import api from './api-helper'

export const getAllPatterns = async () => {
  const resp = await api.get('/patterns')
  return resp.data;
}

export const getAPattern = async (id) => {
  const resp = await api.get(`/patterns/${id}`)
  return resp.data
}

// CREATE

export const createPattern = async (patternData) => {
  const resp = await api.post('/patterns', { pattern: patternData })
  return resp.data
}

// EDIT/UPDATE

export const updatePattern = async (id, patternData) => {
  const resp = await api.put(`/patterns/${id}`, { pattern: patternData })
  return resp.data
}

//DELETE

export const deletePattern = async (id) => {
  const resp = await api.delete(`/patterns/${id}`)
  return resp
}

