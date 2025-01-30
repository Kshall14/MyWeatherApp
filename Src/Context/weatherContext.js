// WeatherContext.js
import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import { fetchWeatherData, setLocation } from './action';
import { getWeatherByCity } from '../Components/api';
const initialState = {
  weatherData: null,
  location: null,
};

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchWeatherDataHandler = async (city) => {
    try {
      const response = await getWeatherByCity(city);
      dispatch(fetchWeatherData(response.data));
      return response; // Return the response
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error; // Re-throw the error
    }
  };

  const setLocationHandler = (location) => {
    dispatch(setLocation(location));
  };

  return (
    <WeatherContext.Provider value={{
      weatherData: state.weatherData,
      location: state.location,
      fetchWeatherData: fetchWeatherDataHandler,
      setLocation: setLocationHandler,
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider, WeatherContext };