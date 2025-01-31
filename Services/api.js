import axios from 'axios';
import {API_BASE_URL} from '../config';
const api = axios.create({baseURL: API_BASE_URL});

export const getUserByEmail = async email => {
  try {
    // console.log('email', email);
    const response = await api.get(`/users/getoneuser/${email}`);
    return response.data;
  } catch (error) {
    return {message: error.message, success: false};
  }
};

export const sendOTP = async email => {
  try {
    console.log('email22', email);
    const response = await api.post(`otp/send-otp`, {
      email,
    });
    return response.data;
  } catch (error) {
    return {message: error.message, success: false};
  }
};
export const verifyOTP = async (email, otp) => {
  try {
    console.log('Appel API: otp/verify-otp', {email, otp});
    const response = await api.post(`otp/verify-otp`, {email, otp});
    console.log('Réponse API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur API:', error);
    return {message: error.message || 'Erreur réseau', success: false};
  }
};
