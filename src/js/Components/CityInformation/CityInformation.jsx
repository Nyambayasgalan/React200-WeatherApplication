import React from 'react';

export default class CityInformation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      city,
      lon,
      lat,
      icon,
      temp,
      pressure,
      humidity,
      temp_min,
      temp_max,
      windspeed,
    } = this.props;

    return (

      <div className='col-md-6'>
        <div className="card border-info">
          <div className="card">
            <div className='card-header' id="header">City Information</div>
            <div className="card-body">
              <h5 className="card-title text-center" id="city-name">
                 <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} id="weather-icon"/>
                    {city}</h5>
                <p className='text-center' id="lat-lon"> Latitude & Longitude: {lat},{lon}</p>
              <hr />

              <div className="d-flex bd-highlight mb-3 justify-content-center">
                <div className="p-1 bd-highlight mr-auto">
                  <strong>Temperature(F)</strong>
                </div>
                <div className="p-1 bd-highlight mr-auto">
                  <strong>Pressure</strong>
                </div>
                <div className="p-1 bd-highlight mr-auto">
                  <strong>Humidity</strong>
                </div>
              </div>


              <div className="d-flex bd-highlight mb-3 align-items-right" id="temp-values">
                <div className='p-1 bd-highlight mr-auto'>
                  <p>{temp}°F</p>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <p>{pressure}</p>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <p>{humidity}%</p>
                </div>
              </div>


              <div className="d-flex bd-highlight mb-3 justify-content-center">
                <div className='p-1 bd-highlight mr-auto'>
                  <strong>Lowest Temp(F)</strong>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <strong>Highest Temp(F)</strong>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <strong>Wind Speed</strong>
                </div>
              </div>

              <div className="d-flex bd-highlight mb-3 align-items-center" id="temp-values">
                <div className='p-1 bd-highlight mr-auto'>
                  <p>{temp_min}°F</p>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <p>{temp_max}°F</p>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <p>{windspeed} mph</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







    );
  }
}