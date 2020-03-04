  
import { combineReducers } from 'redux';
import citySearchReducer from './Components/CitySearch/citySearchReducer';

const rootReducer = combineReducers({
search: citySearchReducer,
// this is where the reducer props are being held. Only one reducer for search input is needed.
});

export default rootReducer;