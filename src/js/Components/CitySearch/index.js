  
import { connect } from 'react-redux';
import CitySearch from './CitySearch';

function mapStoreToProps(store) {
  return {
    city: store.search.city
  }
}
export default connect(mapStoreToProps)(CitySearch);