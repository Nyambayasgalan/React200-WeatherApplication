import React from 'react';
import CitySearch from './Components/CitySearch';
import CityInformation from './Components/CityInformation';
import SearchHistory from './Components/SearchHistory';
import moment from 'react-moment';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>Weather Application</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>
        <CitySearch />
        <br />
        <CityInformation />
        <SearchHistory />
      </div>

    );
  }
}
