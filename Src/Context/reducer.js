// reducer.js
import { FETCH_WEATHER_DATA, SET_LOCATION } from './action';

const initialState = {
  weatherData: null,
  location: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA:
      return { ...state, weatherData: action.payload };
    case SET_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

export default reducer;