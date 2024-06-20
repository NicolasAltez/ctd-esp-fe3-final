import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchDentists = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching dentists:', error);
    throw error;
  }
};

export const fetchDentistById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching dentist with id ${id}:`, error);
    throw error;
  }
};
