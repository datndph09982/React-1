import axios from 'axios';
import {API} from '../config'
export const axiosClient = axios.create({
  baseURL:  API ,
  headers: {
    'Content-Type': 'application/json',
  },
});