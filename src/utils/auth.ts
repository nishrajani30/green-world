export const clearToken = () => {
  localStorage.removeItem('token')
}

export const setToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token')
}