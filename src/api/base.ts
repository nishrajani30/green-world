import axios from 'axios';

const instance = axios.create({
  // API URL, can be taken from process.env.REACT_APP_API_URL
  // For this POC, putting dummy URL
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default instance;