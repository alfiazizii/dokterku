import axios from 'axios';

export const newsAPI = axios.create({
  baseURL: 'http://newsapi.org/v2/',
});
