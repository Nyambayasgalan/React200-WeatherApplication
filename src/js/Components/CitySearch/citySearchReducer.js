import moment from 'react-moment';

const defaultState = {
  cityData:'',
  city: '',
  lon: '0',
  lat: '0',
  icon: '02d',
  temp: '0',
  pressure: '0',
  humidity: '0',
  temp_min: '0',
  temp_max: '0',
  windSpeed: '0',
  history: [],
};


export default function CitySearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        cityData: payload.data,
        city: payload.data.name,
        lon: payload.data.coord.lon,
        lat: payload.data.coord.lat,
        icon: payload.data.weather[0].icon,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        temp_min: payload.data.main.temp_min,
        temp_max: payload.data.main.temp_max,
        windspeed: payload.data.wind.speed,
        history: [...state.history, {
          city: payload.data.name,
          date: moment().format('MMMM Do YYYY'),
          time: moment().format('h:mm:ss a')
        }]

      };
    }

    case "GET_WEATHER-REJECTED": {

      return {
        ...state,
        error: "this error is coming from the searchReducer."
      };
    }

    case "UPDATE_CITY_SEARCH": {
      return {
        ...state,

        city: payload.city,
      }

    }

    default: {
      return state;
    }
  }
}