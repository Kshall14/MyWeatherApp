// actions.js
export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';
export const SET_LOCATION = 'SET_LOCATION';

export const fetchWeatherData = (data) => ({
  type: FETCH_WEATHER_DATA,
  payload: data,
});

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});