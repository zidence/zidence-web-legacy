import axios from './axiosConfig'

export const register = async (username, email, password) => {
  const response = await axios.post('/auth/register', {
    username: username,
    email: email,
    password: password,
  })
  return response.data
}

export const login = async (email, password) => {
  const response = await axios.post('/auth/login', {
    email: email,
    password: password,
  })
  return response.data
}

export const logout = async (accessToken) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  const response = await axios.post('/auth/logout')
  return response.data
}

export const getProfile = async (username, accessToken) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  const response = await axios.get(`/auth/${username}`)
  return response.data
}
