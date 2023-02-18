import {User} from "../@types/authentication";

export const clearUser = () => {
  localStorage.removeItem('user')
}

export const updateUser = (user: User) => {
  console.log('user', user)
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}