import React from 'react';

import {
updateCitySearch,
getWeather
} from './citySearchAction';

export default class CitySearch extends React.Component {

  constructor(props) {
    super(props);

  this.handleChangeInput=this.handleChangeInput.bind(this);
  this.handleClick=this.handleClick.bind(this);
  this.handleGo=this.handleGo.bind(this);
  }

  handleChangeInput(event){
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch (updateCitySearch(value));
  }

  handleClick(event){
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch (getWeather(value));

    event.preventDefault();
    console.log('handleClick button was clicked ')

  }

  handleGo(){
    const {dispatch, city} = this.props;
    dispatch (getWeather(city));
    console.log(city)
  }

  render() {
        const { city } = this.props;
    return (
        <div>
         <div className='row'>
                <div className='d-flex'>
                  <div className='p-2'>
                    <button className='btn btn-primary' value='Ulaanbaatar' onClick={this.handleClick}>Ulaanbaatar</button>
                  </div>
                  <div className='p-2'>
                    <button className='btn btn-primary' value='New york' onClick={this.handleClick}>New York</button>
                  </div>
                  <div className='p-2'>
                    <button className='btn btn-primary' value='San Diego' onClick={this.handleClick}>San Diego</button>
                  </div>
                  <div className='p-2'>
                    <button className='btn btn-primary' value='London' onClick={this.handleClick}>London</button>
                  </div>
                  <div className='p-2'>
                    <button className='btn btn-primary' value='Tokyo' onClick={this.handleClick}>Tokyo</button>
                  </div>
                </div>
              </div>

              <div className='col-md-12'>
                <div className='input-group mb-3'>
                  <input type='text' className='form-control' id='search-input' placeholder='Enter city name' value={city} onChange={this.handleChangeInput}/>
                  <div className='input-group-append'>
                    <button className='input-group-text' type='submit' id='search-button' name='search-button' onClick={this.handleGo}> Go!</button>
                  </div>
                </div>
              </div>
          </div>

    );
  }
}