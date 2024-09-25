import axios from 'axios';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: 'https://fakeasdasdasdstoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.response.use(
  response => response,
  error => {
    Alert.alert('Error!!!', 'Ha ocurrido un error: ' + error.message);
    return error;
  },
);
export default api;
