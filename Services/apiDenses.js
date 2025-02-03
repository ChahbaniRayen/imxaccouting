import axios from 'axios';
import {API_BASE_URL} from '../config';
const api = axios.create({baseURL: API_BASE_URL});

export const getcompaniesDepenses = async id => {
  try {
    const response = await api.get(`/depenses/DepensesApport/${id}`);
    return response?.data;
  } catch (error) {
    return {message: error?.message, success: false};
  }
};

export const getAllcategories = async () => {
  try {
    const response = await api.get(`/depenses/getAllcategoriesDepenses?timestamp=${new Date().getTime()}`);
    return response?.data;
  } catch (error) {
    return {message: error?.message, success: false};
  }
};
export const getAllfinacesDepenses = async () => {
  try { 
    console.log("finandsqjndqsb");
    const response = await api.get(`/depenses/getAllfinacesDepenses?timestamp=${new Date().getTime()}`);
    console.log(response.data, "responseheeer");
    return response?.data;
  } catch (error) {
    console.error("Error in getAllfinacesDepenses:", error); // More detailed error logging
    return { message: error?.message, success: false };
  }
};
