import axios from 'axios';
import {API_BASE_URL} from '../config';
const api = axios.create({baseURL: API_BASE_URL});

export const getcompaniesDepenses = async id => {
  try {
    const response = await api.get(`/depenses/DepensesApport/${id}`);
    console.log(response.data, 'response');
    return response?.data;
  } catch (error) {
    return {message: error?.message, success: false};
  }
};

export const getAllcategories = async () => {
  try {
    const response = await api.get('/depenses/getAllcategoriesDepenses');
    return response?.data;
  } catch (error) {
    return {message: error?.message, success: false};
  }
};
export const getAllfinacesDepenses = async () => {
  try {
    const response = await api.get('/depenses/getAllfinacesDepenses');
    return response?.data;
  } catch (error) {
    return {message: error?.message, success: false};
  }
};
