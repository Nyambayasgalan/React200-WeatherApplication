import React from 'react';
import CitySearch from './Components/CitySearch';
import CityInformation from './Components/CityInformation';
import SearchHistory from './Components/SearchHistory';

export default class App extends React.Component {
  render() {
    console.log('hi')
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>Weather Application</h1>
          <br/>
          <p><i>Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather!</i></p>
          </div>
             <CitySearch />
          <div className='row' width='100%'>
          <div className='col-6'>
            <CityInformation />
          </div>
          <div className='col-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
