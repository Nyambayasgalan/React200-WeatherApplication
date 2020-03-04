import CityInformation from './CityInformation';
import { connect } from 'react-redux';

function mapStoreToProps(store){

  return{
        cityData: store.search.cityData,
        city: store.search.city,
        lon: store.search.lon,
        lat: store.search.lat,
        icon: store.search.icon,
        temp: store.search.temp,
        pressure: store.search.pressure,
        humidity: store.search.humidity,
        temp_min: store.search.temp_min,
        temp_max: store.search.temp_max,
        windspeed: store.search.windspeed,
  }

}



export default connect (mapStoreToProps)(CityInformation);