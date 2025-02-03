import axios from 'axios';
import {API_BASE_URL} from '../config';
const api = axios.create({baseURL: API_BASE_URL});
export const getUserByEmail = async email => {
  try {
    const response = await api.get(`/users/getoneuser/${email}`);
    return response?.data;
  } catch (error) {
    return {message: error?.message, success: false};
  }
};

export const sendOTP = async email => {
  try {
    const response = await api.post(`otp/send-otp`, {
      email,
    });
    return response?.data;
  } catch (error) {
    return {message: error?.message, success: false};
  }
};
export const verifyOTP = async (email, otp) => {
  try {
    const response = await api.post(`otp/verify-otp`, {email, otp});
    return response?.data;
  } catch (error) {
    return {message: error?.message || 'Erreur réseau', success: false};
  }
};
export const addCompany = async name => {
  try {
    const response = await api.post('/companies/add', {name});
    return response.data;
  } catch (error) {
    console.error('Error during company addition:', error);
    return {message: error.message || 'Erreur réseau', success: false};
  }
};
export const getCompanies = async () => {
  try {
    const response = await api.get(`/companies/getallcompanies`);
    return response.data;
  } catch (error) {
    return {message: error?.message || 'Erreur réseau', success: false};
  }
};
