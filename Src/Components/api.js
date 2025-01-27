import axios from 'axios';

const API_KEY = '8b89d3b8bac12d3546b61feb0a7df258';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city) => {
    try {
        console.log('API Request URL:', `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`);
      console.log('API Response:', res);
      return { success: true, data: res.data };
    } catch (e) {
        console.error('API Error:', e.message);
        console.error('API Error Message:', e.message);
        console.error('API Error Response:', e.response);
      return { success: false, data: null };
    }
  };
export default getWeatherByCity;