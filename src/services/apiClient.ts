import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber.cezarcozta.com',
});

export default api;
