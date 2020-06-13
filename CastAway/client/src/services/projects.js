import api from './api-helper'

//Show/Index

export const getAllProjects = async () => {
  const resp = await api.get('/projects')
  return resp.data
}

export const getAProject = async (id) => {
  const resp = await api.get(`/projects/${id}`)
  return resp.data
}

//Create

export const createProject = async (projectData) => {
  const resp = await api.post('/projects', { project: projectData })
  return resp.data
}

//Edit/Update

export const UpdateProject = async (id, projectData) => {
  const resp = await api.put(`/projects/${id}`, { projects: projectData })
  return resp.data
}

//Delete

export const deleteProject = async (id) => {
  const resp = await api.delete(`/projects/${id}`)
  return resp
}

