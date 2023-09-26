import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/login', // Replace with your backend API base URL
});

export default api;