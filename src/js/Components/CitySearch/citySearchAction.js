import axios from 'axios';

export function getWeather(city) {
  //  axios.get(`/search/${city}`).then((response =>{
  //     console.log("hello", response.data)
  // }))

  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/search/${city}`),
  };

}

export function updateCitySearch(city) {
  return {
    type: 'UPDATE_CITY_SEARCH',
    payload: { city }
  }
}